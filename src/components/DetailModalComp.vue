<template>
    <div id="modal-container">
        <div id="detail-container">
            <div id="img-back" :style="{'background-image': `radial-gradient(circle, rgba(0, 0, 0, 0.400) 50%, #000 90%), url('${concatSrcUrl(item.thumbnail.path,item.thumbnail.extension)}')`}">
                <img :src="concatSrcUrl(item.thumbnail.path,item.thumbnail.extension)" alt="detailedPhoto">
                <!-- SAVE BUTTON -->
                <div id="save-buttons">
                    <div v-if="store.state.favorites.includes(item.id)" @click="unsaveFav(item.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z"/></svg>  
                    </div>
                    <div v-if="!store.state.favorites.includes(item.id)" @click="saveFav(item.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,0H6.5A5.507,5.507,0,0,0,1,5.5V20.472a3.5,3.5,0,0,0,6.044,2.4l4.912-5.2,5.013,5.25A3.5,3.5,0,0,0,23,20.51V5.5A5.507,5.507,0,0,0,17.5,0ZM20,20.51a.5.5,0,0,1-.861.345l-6.1-6.391A1.5,1.5,0,0,0,11.95,14h0a1.5,1.5,0,0,0-1.086.47l-6,6.345a.479.479,0,0,1-.549.122A.471.471,0,0,1,4,20.472V5.5A2.5,2.5,0,0,1,6.5,3h11A2.5,2.5,0,0,1,20,5.5Z"/></svg>
                    </div>
                </div>
                <!-- CLOSE MODAL BUTTON  -->
                <div @click="closeModalFunc" id="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M13.93,12L21.666,2.443c.521-.644,.422-1.588-.223-2.109-.645-.522-1.588-.421-2.109,.223l-7.334,9.06L4.666,.557c-1.241-1.519-3.56,.357-2.332,1.887l7.736,9.557L2.334,21.557c-.521,.644-.422,1.588,.223,2.109,.64,.519,1.586,.424,2.109-.223l7.334-9.06,7.334,9.06c.524,.647,1.47,.742,2.109,.223,.645-.521,.744-1.466,.223-2.109l-7.736-9.557Z"/></svg>
                </div>
            </div>
            <!-- TITLE -->
            <h2 id="title">{{item.title}}</h2>
            <!-- CREATORS -->
            <ul id="creators">
                <li v-for="cr in item.creators.items" :key="cr">
                    <h3>{{ cr.name }}</h3>
                </li>

            </ul>
            <!-- DESCRIPTION -->
            <p id="description">{{ item.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import store from "/src/store"
const props = defineProps({
    closeModalFunc:Function,
    concatSrcUrl:Function,
    item:Object
})
const save = ref(false)

const saveFav=(id)=>{
    save.value=true
    store.dispatch("pushFavorites",id)
    props.closeModalFunc()
}
const unsaveFav=(id)=>{
    save.value=false
    store.state.favorites = store.state.favorites.filter( i => i != id)
}

</script>

<style >

#modal-container{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}
#detail-container{
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: white;


}
#title{
    padding-top: 64px;
    z-index: 9999;
    text-align: center;
}
#description{
    padding: 24px;
    text-align: center; 
    max-height: 300px;
    overflow: auto;
    overflow-x:hidden ;
    margin-top: 10px;
}
#creators{
    list-style-type: none;
    display: flex;
    gap: 32px;
    font-size: small;
    color: rgb(189, 189, 189);
    margin-top: 10px;
    overflow-x: auto;
    overflow-y:hidden ;
    max-width: 100%;
    padding: 20px;

}
#creators li{
    text-align: center;
}
#creators li::after{
    content: ' ';
    display: block;
  border-bottom: 1px solid red;
  margin-top: 5px;
}
svg{
    fill: red;
    width: 24px;
    height: 24px;
    transition: all .3s ease;
    cursor: pointer;
}
svg:hover{
    scale: 1.1;
}
#save-buttons{
    position: absolute;
    bottom: -48px;
    right: 0;
    display: flex;
    gap: 10px;
    margin-left: auto;
    margin-right: 24px;
    margin-top: 10px;
}
#close-button{
    position: absolute;
    top: 0;
    right: -50px;
    display: flex;
    gap: 10px;
    margin-left: auto;
    margin-right: 24px;
    margin-top: 10px;
}

 #img-back {
    width: 100%;
    border: 1px black solid;
    height: 30%;
    background:  center center/cover no-repeat ;
    position: relative;
}
#img-back img{
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 170px;
    height: 250px;
    object-fit: cover;
    object-position: 0;
    filter: drop-shadow(2px 1px 29px #FF0000);
    user-select: none;
}
</style>