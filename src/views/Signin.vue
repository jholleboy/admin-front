<template>
  <div class="authincation section-padding">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-xl-5 col-md-6">
          <div class="mini-logo text-center my-5">
            <router-link to="landing"
              >FAÇA LOGIN</router-link>
          </div>
         <div class="auth-form card">
            <div class="card-header justify-content-center">
              <h4 class="card-title">Acessar</h4>
            </div>
            <div class="card-body">
              <ValidationObserver v-slot="{ passes }">
                <form
                  method="post"
                  name="myform"
                  class="signin_validate"
                  novalidate="novalidate"
                  @submit.prevent="passes(formSubmit)"
                >
                  <ValidationProvider
                    rules="required|email"
                    v-slot="{ errors }"
                    name="method"
                    class="form-group"
                    tag="div"
                  >
                    <label>E-Mail</label>
                    <input
                      type="email"
                      ref="email"
                      class="form-control error"
                      placeholder=""
                      name="email"
                      v-model="email"
                      aria-invalid="true"
                    />
                    <label class="error" for="email">{{ errors[0] }}</label>
                  </ValidationProvider>
                  <ValidationProvider
                    rules="passwordFieldName|verify_password"
                    v-slot="{ errors }"
                    name="password"
                    class="form-group"
                    tag="div"
                  >
                    <label>Senha</label>
                    <input
                      type="password"
                      ref="password"
                      class="form-control error"
                      placeholder=""
                      name="password"
                      v-model="password"
                      aria-invalid="true"
                    />
                    <label class="error" for="password">{{ errors[0] }}</label>
                  </ValidationProvider>
                  <div
                    class="form-row d-flex justify-content-between mt-4 mb-2"
                  >
                    <div class="form-group mb-0">
                      <label class="toggle">
                        <input class="toggle-checkbox" type="checkbox" />
                        <div class="toggle-switch"></div>
                        <span class="toggle-label">Lembrar</span>
                      </label>
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-success btn-block">
                      Acessar
                    </button>
                  </div>
                </form>
              </ValidationObserver>
              <div class="new-account mt-3">
                <p>
                  Não tem uma conta?
                  <router-link class="text-primary" to="signup"
                    >Cadastre-se</router-link
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
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "Signin",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      email: "",
      password: "",
      checkbox: "",
    };
  },
   mounted() {
   localStorage.removeItem('token')
    
  },
  methods: {
   
     formSubmit() {
      var data = {email:this.email  , password:this.password}
      
      this.$http.post('/auth/login',data).then(token => {
      
    localStorage.setItem('token', token.data.data.token)
     this.$router.replace("/")
     location.reload();
    
   



      })

    },
  },
};
</script>
