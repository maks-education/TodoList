import 'core-js/actual'
import Vue from 'vue';
import RegisterPage from "./pages/register/RegisterPage.vue"
import HomePage from "./pages/home/HomePage.vue"
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {path: '/', component: HomePage},
      {path: '/register', component: RegisterPage},
    ],
})

new Vue ({
  el: '#app',
  router,
})









