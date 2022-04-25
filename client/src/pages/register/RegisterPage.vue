<template> 
<div>
      <header class="Todo-List-header">
      <div class="logo">Todo List</div> 
        <div class="home-reg">
          <router-link to ="/home"><i class="fa fa-home" aria-hidden="true" id="iconHome"></i></router-link>
          <router-link to ="/register"><i class="fa fa-user-circle-o" aria-hidden="true" id="iconUser"></i></router-link>
        </div>
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
        <div class="name-surname">
            <label>
                <input class="name" type="text" placeholder="Name" v-model="form.name">
            </label>
            <label>
                <input class="surname" type="text" placeholder="Surname" v-model="form.surname">
            </label>
        </div>

        <div class="login-email">
            <label>
                <input class="login" type="text" placeholder="Login" v-model="form.login" >
            </label>
            <label>
                <input class="email" type="text" placeholder="Email" v-model="form.email">
            </label>
        </div>
        
        <div class="psw">
            <label>
                <input class="password" type="password" placeholder="Password" v-model="form.password" @input="validatePassword">
            </label>
            <label>
                <input class="password" type="password" placeholder="Enter password" v-model="confirmationPassword" @input="validatePassword">
            </label>
            <div v-if="!isPasswordValid">ERROR</div>
        </div>

       <button class="saveDataUser" @click="handleFormSave">Register</button>

    
    </div>
</div>
</template>

<script>

import {request} from "App/function js/api";
    export default {
        name: 'RegisterPage',
        data(){
            return {
            isPasswordValid: true,
            confirmationPassword: null,
            form:{
            login: null,
            name: null,
            surname: null,
            email: null,
            password: null,
            }
            }
        },
        methods: {
                handleFormSave() {
                    if (this.isPasswordValid && Boolean(this.form.password)) {
                    request('register', {
                        method: 'POST',
                        body: JSON.stringify(this.form),
                        headers: {
                            'Content-type':'application/json',
                        }
                    }) 
                }
            },
            validatePassword() {
                this.isPasswordValid = true 
                if (this.form.password !== this.confirmationPassword) {
                    this.isPasswordValid = false
                }
            }
        }
    }

</script>


<style scoped>
    .form{
    height: 400px;
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
    margin-bottom: 50px;
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

.saveDataUser {
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

.saveDataUser:hover {
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
