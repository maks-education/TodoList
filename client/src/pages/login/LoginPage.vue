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
</header>
  <div class="form"> 
      <div class="register-login">
      <router-link to ="/register"><button class="button-form-register">Sign Up</button></router-link>
      <router-link to ="/login"><button class="button-form-login">Sign In</button></router-link>
      </div>
  <div class="login-password">
            <label>
                <input class="login" type="text" placeholder="Login" v-model="form.login" >
            </label>
           <label>
                <input class="password" type="password" placeholder="Password" v-model="form.password" >
            </label>
            <div v-if="isError"> ERROR</div>
        </div>
        

       <button class="loginUser" @click="handleFormLogin">Login</button>

    
    </div>
    


  </div>
</template>

<script>
import {request} from "App/function js/api";

export default {
    name: 'LoginPage',
    data(){ 
        return {
        isError: false,
        form:{
        login: null,
        password: null
        }
     }
 }, 
    methods: {
        async handleFormLogin() {
            this.isError = false
            const resultCompare = await request('login', {
                method: 'POST',
                body: JSON.stringify(this.form),
                headers: {
                         'Content-type':'application/json',
                        }
                    }) 
                if (resultCompare.status === 200){
                    this.$router.push({ path: '/home'})
                }  else {
                    this.isError = true
                }
            },
        }


 
    

}
</script>

<style scoped>
    .form{
    height: 300px;
    width: 500px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin-top: 100px;
        margin-left: auto;
        margin-right: auto;
    border-radius: 10px ;
  
    
    }

.register-login {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 500px;
    height: 60px;
}

.button-form-register {
    width: 105px;
    height: 35px;
    margin-right: 10px;
    background-color: white;
    border-width: 2px;
    border-style: solid;
    border-color: orangered;
    border-radius: 15px;
    font-size: 90%;
    font-weight: 700;
    color: orangered;
    transition: all 600ms ease;
}

.button-form-register:hover {
    background-color: orangered;
    color: white;
}

.button-form-login {
    width: 105px;
    height: 35px;
    margin-left: 10px;
    background-color: white;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(0, 169, 0);
    border-radius: 15px;
    font-size: 92%;
    font-weight: 700;
    color: rgb(0, 169, 0);
    transition: all 600ms ease;
}

.button-form-login:hover {
    background-color: rgb(0, 169, 0);
    color: white;
}



.form input[type = text],[type = password]{
    margin: 10px;
    height: 25px;
    width: 200px;
        border:0; 
        border-bottom:1px solid #eee; 
        outline: none;
}

.login-password {
    margin-bottom: 20px;
}

.loginUser {
    height: 40px;
    width: 200px;
    background: white;
    margin-top: 55px;
    border-width: 2px;
    border-radius: 15px;
    border-style: solid;
    border-color: purple;
    color: purple;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 1.5em;
    transition: all 650ms ease;
}

.loginUser:hover {
    background-color: purple;
    color: white;
}

.home-reg {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between

}
</style>

