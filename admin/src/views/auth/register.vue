<script setup>

</script>

<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="w-25 login-form">
      <h2 class="d-flex justify-content-center">Регистрация</h2>
      <input type="text" placeholder="name" v-model="name" class="form-control">
      <input type="text" placeholder="email" v-model="email" class="form-control">
      <input type="password" placeholder="password" v-model="password" class="form-control">
      <input type="password" placeholder="Confirm password" v-model="password_confirmation" class="form-control">
      <div class="d-flex justify-content-between mt-16">
        <button class="btn btn-primary" @click="register">Register</button>
        <button class="btn btn-outline-success" @click="$router.push({name: 'login'})">Have an account? Login</button>
      </div>


    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "login",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {}
    }
  },
  mounted() {

  },
  methods: {
    register() {
      axios.post('http://localhost:8000/api/register',
          {email: this.email, name: this.name, password: this.password, password_confirmation: this.password_confirmation})
          .then(res=> {
            console.log(res)
          })

    },
    onLogin() {
      axios.get('http://localhost:8000/api/user')
          .then(r=>{
            console.log(r)
          })
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
}

div input {
  margin-bottom: 5px;
}

.login-form {
  padding: 16px;
  border: 3px solid #198754;
  border-radius: 5%;
}
</style>
