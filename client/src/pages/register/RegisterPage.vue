<template> 
    <div>
       <input type="text" placeholder="name" v-model="name">
       <input type="text" placeholder="surname" v-model="surname">
       <input type="text" placeholder="login" v-model="login">
       <input type="text" placeholder="password" v-model="password">
       <button id="saveDataUser">Save</button>
    </div>

</template>

<script>
    export default {
        name: 'RegisterPage',
        data(){
            return {
            login: null,
            name: null,
            surname: null,
            password: null,
            }
        }
    }

</script>


<style>

</style>
