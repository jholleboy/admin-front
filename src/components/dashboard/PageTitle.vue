<template>
  <div class="page_title">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page_title-content">
            <p>
              Bem vindo(a) 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
data() {

    
    return {
      dadosusuario: [],
       active: "all",
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
