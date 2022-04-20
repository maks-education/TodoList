<template>
  <div>

      <header class="Todo-List-header">
      <div class="logo">Todo List</div> 
  <div class="search-wrapper">
      <input type="text" placeholder="Search..." class="search">
    <div class="search-icon-wrapper" > 
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
  </div>

  <div class="form"> 
      <router-link to ="/register">Sign Up</router-link>
      <router-link to ="/login">Sign In</router-link>
        <div class="login-password">
            <label>
                <input class="login" type="text" placeholder="Login" v-model="form.login" >
            </label>
           <label>
                <input class="password" type="password" placeholder="Password" v-model="form.password" >
            </label>
        </div>
        

       <button class="loginUser" @click="handleFormLogin">Login</button>

    
    </div>
    </header>


  </div>
</template>

<script>
import {request} from "App/function js/api";

export default {
    name: 'LoginPage',
    data(){ 
        return {
            form:{
        login: null,
        password: null
        }
     }
 }, 
    methods: {
        handleFormLogin() {
            const resultCompare = request('login', {
                method: 'POST',
                body: JSON.stringify(this.form),
                headers: {
                         'Content-type':'application/json',
                        }
                    }) 
                
            },
           
        }


 
    

}
</script>

<style>

</style>