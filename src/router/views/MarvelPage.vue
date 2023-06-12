<template>
    <div id="container" >
      <NavbarComp></NavbarComp>
      <HeaderComp :title="title" :description="description" :imageurl="imageurl"></HeaderComp>
      <ContainerComp :comics="comics" :header="header" ></ContainerComp>  
    </div>
  
</template>
  
<script setup>
  import HeaderComp from "/src/components/HeaderComp.vue"
  import ContainerComp from "/src/components/ContainerComp.vue"
  import NavbarComp from "/src/components/NavbarComp.vue"
  import store from "/src/store"
import { ref } from "vue"


  const concatSrcUrl = ((url,extension)=>{
return url+"."+extension
})


var header = "Marvel Comics"
var title=store.state.comics[4].title
var description=store.state.comics[4].description
var imageurl=concatSrcUrl(store.state.comics[4].thumbnail.path,store.state.comics[4].thumbnail.extension)
const comics = store.state.comics

const ids =store.state.comics.map(item => item.id);
const images =store.state.comics.map(item => item.thumbnail);


  </script>
  
  <style scoped>
  #container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    min-width: 100vw;
    min-height: 100vh;
  
    background-color: aquamarine;
  }
  li{
  border: 1px black solid;
  padding: 2px;
  margin: 10px;
}
li p {
  border-bottom:2px black dashed ;
  margin: 5px;
}
li img {
  width: 170px;
    height: 250px;
    object-fit: cover;
  object-position: 0;
    margin-right:10px;
    transition: all .4s ease;
    flex-shrink: 0;

}
  
  </style>
  