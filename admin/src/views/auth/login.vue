<script setup>
axios.defaults.withCredentials = true;
</script>

<template>
<div class="container d-flex align-items-center justify-content-center">
<div class="w-25 login-form">
  <h2 class="d-flex justify-content-center">Авторизация</h2>
  <input type="text" placeholder="email" v-model="email" class="form-control">
  <input type="password" placeholder="password" v-model="password" class="form-control">
  <div class="d-flex justify-content-between mt-16">
    <button class="btn btn-primary" @click="login">Login</button>
    <button class="btn btn-outline-success" @click="$router.push({name: 'register'})">Register new user</button>
  </div>


</div>

</div>
</template>

<script>

import axios from 'axios'
export default {
  name: "login",
  data() {
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    login(){
      axios.get('http://localhost:8000/sanctum/csrf-cookie')
          .then(r=>{
            axios.post('http://localhost:8000/login', {email: this.email, password: this.password})
                .then(res=>{
                  console.log(res)
                })
          })
    },
    onLogin(){

    }
  }
}
</script>

<style scoped>
.container{
  height: 100vh;
}

div input{
  margin-bottom: 5px;
}
.login-form{
  padding: 16px;
  border: 3px solid #198754;
  border-radius: 5%;
}
</style>
