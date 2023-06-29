<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

</script>

<template>
<div class="d-flex flex-column w-25">
  <button class="btn btn-primary" @click="login">Login</button>
  <button class="btn btn-outline-success">testGet</button>
</div>
</template>
<script>
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap'
export default {
  name: 'App',
  methods: {
    login(){
      axios.get('http://api.alexeybychkovski.site/sanctum/csrf-cookie')
          .then(r=>{
            axios.post('http://api.alexeybychkovski.site/login', {email: 'user@mail.ru', password: '123'})
                .then(res=>{
                  console.log(res)
                })
          })
    },
    testGet(){
      axios.get('http://api.alexeybychkovski.site/api/user')
          .then(res=>{
            console.log(res)
          })
    }
  }
}
</script>
<style scoped>

</style>
