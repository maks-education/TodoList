import 'core-js/actual'
import Vue from 'vue';
import RegisterPage from "./pages/register/RegisterPage.vue"
import HomePage from "./pages/home/HomePage.vue"
import VueRouter from 'vue-router'
import LoginPage from "./pages/login/LoginPage.vue"
import ProfilePage from "./pages/profilePage/ProfilePage.vue"
import { request } from "App/function js/api.js"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {path: '/', redirect: '/login'},
      {path: '/home', component: HomePage, name: 'home', meta: {isSearchVisible: true, logo: 'TodoList'}},
      {path: '/register', component: RegisterPage, name: 'register', meta: {logo: 'Sign Up'}},
      {path: '/login', component: LoginPage, name: 'login', meta: {logo: 'Sign In'}},
    ],
})

router.beforeEach((to, from, next) => {
  const routesToForNotLoggedIn = ['login', 'register']
  if (!routesToForNotLoggedIn.includes(to.name) && router.app.isLoggedIn === false) {
    next({name: 'login'})
  } else if (routesToForNotLoggedIn.includes(to.name) && router.app.isLoggedIn) {
    next({name: 'home'})
  }
   else{
    next()
    }
})

new Vue ({
  el: '#app',
  router,
  data: {
    isLoggedIn: null,
  },

  async created() {
    const isLoggedInResp = await request('auth/isLoggedIn');
    try {    
      if (isLoggedInResp.status === 200){
      this.$root.isLoggedIn = true
      await this.$router.push({ path: '/home' }) //вернуть на home
    } else {
      this.$root.isLoggedIn = false
      await this.$router.push({ path: '/login' })
    }
    } catch (e) {
      if(e.name !== 'NavigationDuplicated') {
        console.warn(e)
      }
    }
  },

  async createdReg() {
    try {
      if (isRegisterUpResp) {
        
      }
    } catch {

    }
  }
})









