
<template>
  <div id="app">
    <div id="preloader" v-show="isLoading">
      <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify) 



export default {
  name: "App",
  data() {
    return {
      
      isLoading: true,
      time: 100,
      show: 1,
    };
  },
methods: {
    validate() {
      
      this.$http.get('/user/{id}').then(token => {
        
      this.token = token

      if (!token){
      this.$router.push ('/signin')
}     

      })



      },
      created() {
      


      }



      

    },


  mounted() {
 
     
    setTimeout(() => {
      this.validate()
      this.isLoading = false;
    }, 1000);
    
  },
};
</script>

