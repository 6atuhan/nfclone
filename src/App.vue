<template>

  <router-view v-if="isReady"></router-view>
  
</template>


<script setup>
import axios from 'axios';
import store from "/src/store"
import { onMounted, ref } from 'vue';


const isReady= ref(false)

onMounted(()=>{
const ts = "1686503596099"
const publickey = "23db2ba89f9280d2bfc4d302404dd863"
const hashval = "7b8529657c83470ea8527ea13b01b4ee"

const url =`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publickey}&hash=${hashval}`

axios.get(url).then(response=>{

  console.log('response :>> ', response.data.data.results);
  store.state.comics=response.data.data.results
  isReady.value=true


}).catch(error=>{
  console.log('error :>> ', error);
})

})


</script>


<style scoped>

</style>