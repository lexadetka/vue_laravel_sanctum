<script setup>
import 'bootstrap/dist/css/bootstrap.css'
axios.defaults.withCredentials = true;
</script>
<template>
<div>
  index
</div>
</template>
<script>
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap'
export default {
  name: 'App',
  data() {
    return{
      defaultUrl: 'localhost:8000'
    }
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
