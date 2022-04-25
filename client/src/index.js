import 'core-js/actual'
import Vue from 'vue';
import RegisterPage from "./pages/register/RegisterPage.vue"
import HomePage from "./pages/home/HomePage.vue"
import VueRouter from 'vue-router';
import LoginPage from "./pages/login/LoginPage.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {path: '/', redirect: '/login'},
      {path: '/register', component: RegisterPage},
      {path: '/login', component: LoginPage}
    ],
})

new Vue ({
  el: '#app',
  router,
})









