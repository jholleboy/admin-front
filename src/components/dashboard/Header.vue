<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <nav class="navbar">
            <div class="header-search d-flex align-items-center">
              <router-link class="brand-logo mr-3" to="index">
                Painel
              </router-link>
              
            </div>

            <div class="dashboard_log">
              <div class="d-flex align-items-center">
                <div
                  class="profile_log dropdown"
                  :class="show && 'show'"
                  @click.capture="show = !show"
                >
                  <div class="user" data-toggle="dropdown">
                    <span class="thumb"><i class="mdi mdi-account"></i></span>
                    <span class="name">{{dadosusuario.name}}</span>
                    <span class="arrow"><i class="la la-angle-down"></i></span>
                  </div>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    :class="show && 'show'"
                  >
                    <router-link to="signin" class="dropdown-item logout">
                      <i class="la la-sign-out"></i> Sair
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dadosusuario: [],
      show: false,
    };
  },
    mounted() {
  this.$http.get('/user/{id}').then(response => {
     this.dadosusuario = response.data;
     
     
     })
     
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    
  },
};
</script>
