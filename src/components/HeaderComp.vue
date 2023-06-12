<template>
<div id="header-container">
        <div id="content-container">
                <!-- title -->
        <h1>{{ title }}</h1>
                <!-- buttons -->
        <div>
                <button>Play</button>
                <button>My List</button>
        </div>
        <!-- description -->
                <p>{{ description }}</p>
        </div>

</div>
</template>

<script setup>
import { onMounted,defineProps, } from "vue"


const props = defineProps({
title:String,
description:String,
imageurl:String
})



onMounted(()=>{
        document.documentElement.style.setProperty("--bgurl", "url('" + props.imageurl + "')");

})
</script>

<style>
:root{
        --bgurl: url('');
}
#header-container{
        width: 100%;
        background-size: cover;
        background-position: center center;
        background-image: linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(0,0,0,1)),
        var(--bgurl);
        color: white;
        object-fit: contain;
        min-height: 520px;
        flex-shrink: 0;        
        display: flex;
        align-content: center;
        justify-content: center;
}
#content-container{
        margin-top:120px;
        display: flex;
        justify-content: start;
        align-content: start;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 16px;
        height: fit-content;
        width: 100%;
        padding-left:24px ;

        
}
#content-container p{

        max-width: 400px;
        max-height: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all .2s;
        font-size: small;
        font-weight: 600;

}

#content-container h1{
        font-size: 64px;
}

#content-container button{
    
        width: 100px;
        padding: 10px;
        background: rgba(245, 243, 243, 0.034);
        color: white;
        font-weight: 700;
        cursor: pointer;
        transition: all .2s;
        border: 0;
        border-radius: 5px;
        margin-left: 10px;
        margin-right: 10px;
}
#content-container button:hover{

        background: rgba(255, 255, 255, 0.959);
        color: black;

}

</style>