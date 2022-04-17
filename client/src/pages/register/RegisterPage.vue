<template> 
    <div class="form">
       <input type="text" placeholder="name" v-model="form.name">
       <input type="text" placeholder="surname" v-model="form.surname">
       <input type="text" placeholder="login" v-model="form.login">
       <input type="text" placeholder="Email" v-model="form.Email">
       <input type="text" placeholder="password" v-model="form.password">
       <button id="saveDataUser" @click="handleFormSave">Save</button>
    </div>

</template>

<script>
import {request} from "App/function js/api";
    export default {
        name: 'RegisterPage',
        data(){
            return {
            form:{
            login: null,
            name: null,
            surname: null,
            Email: null,
            password: null,
            }
            }
        },
        methods: {
            handleFormSave() {
                request('register', {
                    method: 'POST',
                    body: JSON.stringify(this.form)
                })
            } 
        }
    }

</script>


<style scoped>

</style>
