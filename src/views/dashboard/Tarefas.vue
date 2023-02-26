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
        Tarefa
        <v-spacer></v-spacer>
        <v-btn
                color="primary"
                @click="criarTarefa"
              >
              Criar Tarefa
              </v-btn><v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="getTarefa"
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
              <h5 class="modal-title">Edição de Tarefa</h5>
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
              <form v-on:submit.prevent="atualizarTarefa">
                <div class="mb-3">
                <label for="formName" class="form-label">Tarefa</label>
                <input :placeholder="upNome" class="form-control" type="text" v-model="upNome" id="upNome">
                </div>    
                <div class="mb-3">
                <label for="formName" class="form-label">Estado</label>
                <input :placeholder="upEstado" class="form-control" type="text" v-model="upEstado" id="upEstado">
                </div>
                <label for="formName" class="form-label">Usuario</label>
              <select class="form-control" ref="Usuario">
                <option value="1" selected >Selecione Usuario</option>
                <option v-for="UserNome in UserNome" :key="UserNome.id" :value="UserNome.id">{{ UserNome.name }}</option>
              </select>                    
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
              <h5 class="modal-title">Criação de Tarefa</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="criarTarefa"
                
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form v-on:submit.prevent="cadastroTarefa">
                <div class="mb-3">
                <label for="formName" class="form-label">Tarefa</label>
                <input class="form-control" type="text" v-model="criarNome" id="criarNome">
              </div>
              <div class="mb-3">
                <label for="formName" class="form-label">Estado</label>
                <input class="form-control" type="text" v-model="criarEstado" id="criarEstado">
              </div>
              <label for="formName" class="form-label">Usuario</label>
              <select class="form-control" ref="Usuario">
                <option value="1" selected>Selecione um Usuario</option>
                <option v-for="UserNome in UserNome" :key="UserNome.id" :value="UserNome.id">{{ UserNome.name }}</option>
              </select>
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
export default {
      name: 'Tarefa',
      components: {
    Layout,
  },
      data () {
        return {
          search: '',
          loadTable: true,
          id: this.id,
          Usuario: this.Usuario,
          criarNome: this.criarNome,
          criarEstado: this.criarEstado,
          criarUser: this.criarUser,
          upNome: this.upNome,
          upEstado: this.upEstado,
          upUser: this.upUser,
          dialog: false,
          dialogDelete: false,
          dialogRelatorio: false,
          editedIndex: -1,
          getTarefa: [],
          UserNome:[],
          errors: [],
          show:false,
          headers: [
           
            
            { text: 'Tarefa', value: 'Descricao' },
            { text: 'Estado', value: 'Estado' },
            { text: 'Usuario', value: 'name' },
            
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
          criarTarefa() {
              setTimeout(() => (this.show = !this.show), 10);
          },
          async cadastroTarefa(){
                  this.criarTarefa()
                  try{
                   await this.$http.post("/tarefa", {
                  
                  "descricao": this.criarNome,
                  "estado": this.criarEstado,
                  "user_id": this.$refs['Usuario'].value,
                  
                })
          
          alert("Tarefa Criada!");
          this.$router.go(0);
          } catch (error) {
                
                alert("Erro!");
          }
          this.dialog = false
                  
              },
              async atualizarTarefa(){
                const id = this.id
                
          try{
          await this.$http.patch("/tarefa/"+id, {
                  
                  "descricao": this.upNome,
                  "estado": this.upEstado,
                  "user_id": this.$refs['Usuario'].value,
                  
                })
          alert("Tarefa Atualizado!");
          this.$router.go(0);
          } catch (error) {
                
                alert("Erro!");
          }
          this.dialog = false
            },
           
  
        editItem (item) {
          this.editedIndex = this.getTarefa.indexOf(item)
          this.editedItem = Object.assign({}, item)
        this.id = item.id_tarefa
        this.upNome = item.Descricao
        this.upEstado = item.Estado
        this.upUser = item.user_id
        
          this.dialog = true
        },
  
        
  
        deleteItem (item) {
          this.editedIndex = this.getTarefa.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        deleteItemConfirm (item) {
          
          const id = item.id_tarefa
          this.$http.delete("/tarefa/"+id)
                          .then((res) => {
                            alert("Tarefa Removida!");
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
            Object.assign(this.getMarca[this.editedIndex], this.editedItem)
          } else {
            this.getMarca.push(this.editedItem)
          }
          this.close()
        },
  
  },
      created: function(){
        this.$http.get('/user')
        .then(response => {
              this.UserNome = response.data;
                   })
        
                   this.$http.get("/tarefa")
                          .then(response => {
                            this.getTarefa = response.data;
                          })
                          .catch(error => {
                            this.getTarefa = error.data;
                          });
                    this.loadTable= false;
              },
    }

</script>
