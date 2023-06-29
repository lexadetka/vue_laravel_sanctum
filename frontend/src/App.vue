<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
axios.defaults.withCredentials = true;
</script>

<template>
  <div>
    123
    <button @click="login" class="btn btn-outline-success">Login</button>
    <button @click="testGet" class="btn btn-primary">test get</button>
    <button @click="getUser" class="btn btn-primary">get User</button>
  </div>
</template>
<script>
import 'bootstrap/dist/js/bootstrap'
import axios from 'axios'
export default {
  name: 'App',
  mounted() {
    // this.testGet()
  },
  methods: {
    testGet(){
      axios.get('http://api.alexeybychkovski.site/api/get')
          .then(res=>{
            console.log(res)
          })
    },
    getUser(){
      axios.get('http://api.alexeybychkovski.site/api/user')
          .then(res=>{
            console.log(res)
          })
    },
    login(){
      axios.get('http://api.alexeybychkovski.site/sanctum/csrf-cookie')
          .then(r=>{
            axios.post('http://api.alexeybychkovski.site/login',{email:'user@mail.ru', password: '123'})
                .then(res=>{
                  console.log(res)
                })
          })
    }
  }
}
</script>

<style scoped>

</style>
