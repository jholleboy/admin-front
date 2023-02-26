<template>
  <div class="authincation section-padding">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-xl-5 col-md-6">
          <div class="mini-logo text-center my-5">
            <router-link to="landing"
              >Criar Conta</router-link>
          </div>
          <div class="auth-form card">
            <div class="card-header justify-content-center">
             
            </div>
            <div class="card-body">
              <form
                @click.prevent="formSubmit"
                method="post"
                name="myform"
                class="signup_validate"
              >
                <div class="form-group">
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    name="name"
                      v-model="name"

                  />
                </div>
                <div class="form-group">
                  <label>Senha</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder=""
                    name="password"
                      v-model="password"

                  />
                </div>
                <div class="form-group">
                  <label>E-Mail</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder=""
                    name="email"
                      v-model="email"

                  />
                </div>
                
                <div class="text-center mt-4">
                  <button type="submit" class="btn btn-success btn-block">
                    Registrar
                  </button>
                </div>
              </form>
              <div class="new-account mt-3">
                <p>
                  Já tem conta?
                  <router-link class="text-primary" to="/signin"
                    >Entre</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    formSubmit() {
      var data = {email:this.email  , password:this.password, name:this.name}
       
         this.$http.post('/auth/register',data).then(data =>{
        
        console.log(data)
         this.$router.replace("/signin")
     //location.reload();

         })
     
    
     
    //this.$router.push("/index");
    
   



      
    },
  },
};
</script>
