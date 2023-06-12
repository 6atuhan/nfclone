<template>
  <div id="container" >
    <NavbarComp></NavbarComp>
    <HeaderComp :title="title" :description="description" :imageurl="imageurl"></HeaderComp>
    <div id="series-container">
      <!-- FIRST MAIN LINE  -->
      <div id="head-row-container">
        <h2>NETFLIX ORIGINALS</h2>
    <div id="row-full-container">
        <img v-for="i in images" :key="i" :src="i" alt="">
    </div>
      </div>
    <!-- SUB LINES -->
    <div id="sub-lines-container" v-for="hd in headers" :key="hd">
        <h2 >{{ hd }}</h2>
        <div id="row-half-container">
        <img v-for="img in images" :key="img" :src="img" alt="">
    </div>
    </div>
    </div>

  </div>

</template>

<script setup>
import HeaderComp from "/src/components/HeaderComp.vue"
import ContainerComp from "/src/components/ContainerComp.vue"
import NavbarComp from "/src/components/NavbarComp.vue"







const title="La Case De Papel"
const description="La casa de papel is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor, one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo. "
const imageurl="https://tr.web.img2.acsta.net/newsv7/22/03/21/11/58/2914428.jpg"

const images = [
    "https://i.pinimg.com/originals/c8/4b/e1/c84be1e6576d19ec0fd8f5402f1dda17.jpg",
    "https://m.media-amazon.com/images/I/71xu1PT1dwL._AC_UF1000,1000_QL80_.jpg",
    "https://cdn.europosters.eu/image/350/posters/justice-league-group-i107785.jpg",
    "https://i.pinimg.com/originals/c8/4b/e1/c84be1e6576d19ec0fd8f5402f1dda17.jpg",
    "https://m.media-amazon.com/images/I/71xu1PT1dwL._AC_UF1000,1000_QL80_.jpg",
    "https://cdn.europosters.eu/image/350/posters/justice-league-group-i107785.jpg",
    "https://i.pinimg.com/originals/c8/4b/e1/c84be1e6576d19ec0fd8f5402f1dda17.jpg",
    "https://m.media-amazon.com/images/I/71xu1PT1dwL._AC_UF1000,1000_QL80_.jpg",
    "https://cdn.europosters.eu/image/350/posters/justice-league-group-i107785.jpg",

]
const headers=[
    "Trending Now",
    "Top Rated",
    "Action Movies",
    "Comedy Movies",
    "Horror Movies",
    "Romance Movies",
    "Documentaries"
]
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
#series-container{
        width: 100%;
        height: max-content;
        background-color: #000;
        color: white;
}

#head-row-container{
    margin-top: -40px;

}

#row-full-container{


    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    padding: 10px;
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
#row-full-container img:first-of-type{

    margin-left:40px;
}
#head-row-container h2{
    margin-left: 20px;
    text-transform: uppercase;
}




#row-half-container{
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    padding: 10px;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
#row-half-container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}


#row-half-container img{
    width: 170px;
    height: 100px;

    margin-right:10px;
    transition: all .4s ease;
    object-fit: cover;
    flex-shrink: 0;

}
#row-half-container img:hover{
    scale: 1.08;
}
#row-half-container img:first-of-type{

    margin-left:40px;
}
#sub-lines-container h2{
    margin-left: 20px;
}
</style>
