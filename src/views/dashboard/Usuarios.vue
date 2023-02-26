<template>

  <Layout :active="4" :title="true">
   <v-app >
    
  <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-10 col-md-12">
            <div class="card profile_card">
              <v-spacer></v-spacer>
      
              <v-card>
      <v-card-title>
        Usuario
        <v-spacer></v-spacer>
        <v-btn
                color="primary"
                @click="criarUsuario"
              >
              Criar Usuario
              </v-btn><v-spacer></v-spacer>
        <v-text-field
          class="elevation-1"
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="getUsuario"
        :search="search"
        :loading="loadTable"
        loading-text="Carregando... Por favor,aguarde!"
      >
  
  
      <template v-slot:top>
        <v-toolbar
          flat
        >
        <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <v-card>
                <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edição de Usuario</h5>
              <v-btn
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="close"
              >
                <span aria-hidden="true">&times;</span>
              </v-btn>
            </div>
            <div class="modal-body">
              <form v-on:submit.prevent="atualizarUsuario">
                <div class="mb-3">
                <label for="formName" class="form-label">Nome</label>
                <input :placeholder="upNome" class="form-control" type="text" v-model="upNome" id="upNome">
                </div>
                <div class="mb-3">
                <label for="formName" class="form-label">Email</label>
                <input :placeholder="upEmail" class="form-control" type="text" v-model="upEmail" id="upEmail">
                </div>
              <div class="mb-3">
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  type="submit"
                >
                  Salvar
                </v-btn>
              </div>
              </form>
            </div>
          </div>
        </div>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="showIten"
            max-width="500px"
          >
            <v-card>
                <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">{{ showUser.name }}</h2>
              <v-btn
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="close"
              >
                <span aria-hidden="true">&times;</span>
              </v-btn>
            </div>
            <div class="modal-body">
              <h3>Tarefas</h3>
              <td>
          <tr v-for="verUsuario in verUsuario" :key="verUsuario.user_id">
            
            <input :placeholder="verUsuario.Descricao" class="form-control" type="text" disabled="disabled"  >  
           <input :placeholder="verUsuario.Estado" class="form-control" type="text" disabled="disabled"  >
             
        </tr>
        </td>              
            </div>
          </div>
        </div>
            </v-card>
          </v-dialog>
  
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Deseja remover esse registro?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm(item)">Sim</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
      
        <v-icon
        small
        class="mr-2"
        @click="showItem(item)"
      >
        show
      </v-icon>
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
        <v-icon
          small
          @click="deleteItemConfirm(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <span>
          Carregando... Por favor,aguarde!
        </span>
      </template>
      </v-data-table>
    </v-card>
    <div
        ref="modal"
        class="modal fade"
        :class="[{'show d-block': show}, {'d-none': !show}]"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Criação de Usuario</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="criarUsuario"
                
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form v-on:submit.prevent="cadastroUsuario">
              <div class="mb-3">
                <label for="formName" class="form-label">Nome</label>
                <input class="form-control" type="text" v-model="criarNome" id="criarNome">
              </div>
              <div class="mb-3">
                <label for="formEmail" class="form-label">Email</label>
                <input class="form-control" type="text" v-model="criarEmail" id="criarEmail">
              </div>
              <div class="mb-3">
                <label for="formSenha" class="form-label">Senha</label>
                <input class="form-control" type="text" v-model="criarSenha" id="criarSenha">
              </div>      
              <div class="mb-3">
                <button type="submit" class="btn btn-primary pull-right">Cadastrar</button>
              </div>
              </form>
              </div>
          </div>
        </div>
      </div>  
 
  
    
    </div></div></div></div></div>
    </v-app>
  </Layout>
</template>

<script>
import Layout from "../../components/dashboard/Layout.vue";
//import axios from "axios";
export default {
  name: "compras",
  components: {
    Layout,
  },
  data() {
 
    return {

          search: '',
          loadTable: true,
          id: this.id,
          upNome: this.UpNome,
          upEmail: this.UpEmail,
          criarNome: this.criarNome,
          criarEmail: this.criarEmail,
          criarSenha: this.criarSenha,
          dialog: false,
          showIten: false,
          dialogDelete: false,
          dialogRelatorio: false,
          editedIndex: -1,
          getUsuario: [],
          verUsuario: [],
          showUser: [],
          errors: [],
          showIndex: [],
          show:false,
          headers: [
          
        
          
            { text: 'Nome', value: 'name' },
            { text: 'Email', value: 'email' },
            { text: 'Ações', value: 'actions', sortable: false },
          ],
        }
  },
  computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
      },
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
        dialogRelatorio (val) {
          val || this.closeRelatorio()
        },
      },
   methods: {
          criarUsuario() {
              setTimeout(() => (this.show = !this.show), 10);
          },
          async cadastroUsuario(){
                  this.criarUsuario()
                  
                  try{
                   await this.$http.post("/user/", {
                  
                  "name": this.criarNome,
                  "email": this.criarEmail,
                  "password": this.criarSenha,
                  
                })
          
          alert("Conta Criada!");
          this.$router.go(0);
          } catch (error) {
                
                alert("Erro!");
          }
          this.dialog = false
                  
                 
              },
              async atualizarUsuario(){
                const id = this.id
                
          try{
          await this.$http.patch("/user/"+id, {
                  
                  "name": this.upNome,
                  "email": this.upEmail,
                  
                  
                })
          alert("Usuario Atualizado!");
          this.$router.go(0);
          } catch (error) {
                
                alert("Erro!");
          }
          this.dialog = false
            },
           
  
        editItem (item) {
          this.editedIndex = this.getUsuario.indexOf(item)
          this.editedItem = Object.assign({}, item)
        this.id = item.id
        this.upNome = item.name
        this.upEmail = item.email
        
          this.dialog = true
        },
       async showItem (item) {
          this.editedIndex = this.getUsuario.indexOf(item)
          this.showUser = Object.assign({}, item)
          this.id = item.id
          const id = this.id
          
         await this.$http.get("/user/"+id)
         .then(response => {
         this.verUsuario = response.data;
             })
             console.log(this.verUsuario)
          this.showIten = true
        },
  
        
  
        deleteItem (item) {
          this.editedIndex = this.getUsuario.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        deleteItemConfirm (item) {
          
          const id = item.id
          this.$http.delete("/user/"+id)
                          .then((res) => {
                            alert("Usuario Removido!");
                            this.$router.go(0);
                          })
                          .catch((error) => {
                            alert("Erro!");
                          }).finally(() => {
                          });
          this.closeDelete()
        },
  
        close () {
          this.dialog = false
          this.showIten = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeRelatorio () {
          this.dialogRelatorio = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        save () {
          if (this.editedIndex > -1) {
            Object.assign(this.getTensao[this.editedIndex], this.editedItem)
          } else {
            this.getTensao.push(this.editedItem)
          }
          this.close()
        },
  
  },
  created: function(){
        
    this.$http.get("/user")
             .then(response => {
               this.getUsuario = response.data;
             })
             .catch(error => {
               this.getUsuario = error.data;
             });
       this.loadTable= false;
 },
  
};

</script>
