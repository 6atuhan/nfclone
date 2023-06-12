<template>
    <DetailModalComp v-if="openModal==true" :item="item" :closeModalFunc="closeModalFunc" :concatSrcUrl="concatSrcUrl"></DetailModalComp>

    <div id="head-row-container">
        <h2>{{ header }}</h2>
    <div id="row-full-container">
        <img v-for="i in comics" :key="i" @click="openModalFunc(i)" :src="concatSrcUrl(i.thumbnail.path,i.thumbnail.extension)" :class="{'box-shadow':store.state.favorites.includes(i.id)}" alt="comics-poster">
    </div>
    </div>
</template>

<script setup>
import DetailModalComp from "/src/components/DetailModalComp.vue";
import { ref } from "vue";
import store from "/src/store"
const openModal = ref(false)
const item = ref([])

const openModalFunc=(selectedItem)=>{
    openModal.value=true
    item.value=selectedItem

}
const closeModalFunc=(item)=>{
    openModal.value=false

}

const props = defineProps({
    comics:Array,
    header:String
})

const concatSrcUrl = ((url,extension)=>{
return url+"."+extension
})

</script>

<style scoped>
#head-row-container{
    margin-top: -40px;

}

#row-full-container{
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
    padding-top:30px ;
    justify-content: center;
    align-items: center;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
#row-full-container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}


#row-full-container img{
    width: 170px;
    height: 250px;
    object-fit: cover;
  object-position: 0;
    margin-right:10px;
    transition: all .4s ease;
    flex-shrink: 0;


}
#row-full-container img:hover{
    scale: 1.08;
}

#head-row-container h2{
    margin-left: 20px;
    text-transform: uppercase;
}
.box-shadow{
    filter: drop-shadow(0px 0px 4px #FF0000);
    box-shadow: 3px 3px 3px red,-3px -3px 3px red,3px -3px 3px red,-3px 3px 3px red;


}
</style>