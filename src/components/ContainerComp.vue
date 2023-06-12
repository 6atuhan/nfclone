<template>
    <div id="container-container">
        <RowFullComp :comics="comics"  :header="header"></RowFullComp>

    </div>
</template>

<script setup>
import RowFullComp from '/src/components/RowFullComp.vue';

const props = defineProps({
    comics:Array,
    header:String
})

</script>

<style scoped>
#container-container{
        width: 100%;
        height: max-content;
        background-color: #000;
        color: white;
}
</style>