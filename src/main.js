import { BootstrapVue, DropdownPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App.vue";
import "./assets/css/custome.css";
import "./assets/css/popup.css";
import "./assets/css/style.css";
import "./components/validation/errorMessage";
import router from "./router";
import axios from 'axios'
import Vuetify from 'vuetify'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;



Vue.use(DropdownPlugin);
Vue.use(BootstrapVue);


Vue.config.productionTip = false;
Vue.use(Vuetify);
new Vue({
  vuetify : new Vuetify(),
  router,
  render: (h) => h(App),
}).$mount("#app");
