<template> 
<div>
      <header class="Todo-List-header">
      <div class="logo">Todo List</div> 
        <div class="home-reg">
          <router-link to ="/"><i class="fa fa-home" aria-hidden="true" id="iconHome"></i></router-link>
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
    <router-link to ="/register">Sign Up</router-link>
    <router-link to ="/login">Sign In</router-link>
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

       <button class="saveDataUser" @click="handleFormSave">Save</button>

    
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
    height: 500px;
    width: 500px;
    background: white;
    display: flex;
    justify-content: center;
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
    /* background: url(./background.jpg); */
     
    
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
    background: white;
    height: 30px;
    width: 70px;
    border: 0;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    margin-top: 55px;
    margin-left: 350px;
}

.home-reg {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between

}

</style>
