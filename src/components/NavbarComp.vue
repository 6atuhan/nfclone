<template>
    <div id="navbar-container" >
        <!-- logo -->
        <img @click="goNetflixClone" id="logo" :src="namelogo" alt="netflix_name_logo">
        <!-- favorites counter -->
        <div id="favorites">
            <p v-if="!store.state.favorites.length<=0">{{ store.state.favorites.length }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="24" height="24"><path d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z"/></svg>  
        </div>
        <!-- profile photo -->
        <img @click="goMarvel" id="pp" :src="pp" alt="profile_photo">
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import namelogo from "/src/assets/images/name_logo.png"
import pp from "/src/assets/images/pp.png"
import router from "/src/router";
import store from "/src/store"
var yukseklik = ref()

onMounted(()=>{
    // navbar backgroundColor changer
    window.addEventListener('scroll',()=>{
        yukseklik.value=window.scrollY
        const navbar=  document.querySelector("#navbar-container")
        if(yukseklik.value >= 72 )
        {
            navbar.style.backgroundColor = "black"

        }
        else{

            navbar.style.backgroundColor = "transparent"
        }
    })

})

const goNetflixClone=()=>{
    router.push("/")
}
const goMarvel=()=>{
    router.push("/marvel")
}
</script>

<style>
#navbar-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 16px;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left:0;
        padding-right: 20px;
        padding-left: 20px;
        z-index: 9999;
        transition: all .4s ease;

}
img{
    height: 30px;
    object-fit: contain;
    cursor:pointer;
}
svg{
    fill: red;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
#favorites:hover{
    scale: 1.1;
}
#favorites{
    margin-left: auto;
    margin-right: 20px;
    position: relative;
    transition: all .3s ease;

}
#favorites p{
    color: red;
    font-weight: 700;
    background-color: black;
    border-radius: 5px;
    padding: 1px;
    padding-left: 4px;
    padding-right: 4px;
    z-index: 999;
    position: absolute;
    top: -8px;
    right: -8px;
    user-select: none;

}
</style>