import Vue from "vue";
import VueRouter from "vue-router";
// Landing
import DashboardLayout from '../layout/DashboardLayout.vue'
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Usuarios from "../views/dashboard/Usuarios";
import Tarefas from "../views/dashboard/Tarefas";



Vue.use(VueRouter);

const routes = [
  {
    path: "/Tarefas",
    name: "Tarefas",
    component: Tarefas,DashboardLayout,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token')
   if (!token){
    
     next('/signin');
   }
 
    next();
    },
  },
  {
    path: "/",
    name: "Usuarios",
    component: Usuarios,DashboardLayout,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token')
   if (!token){
    
     next('/signin');
   }
 
    next();
    },
  },
  
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
