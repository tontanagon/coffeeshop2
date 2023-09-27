<script setup>
import { ref } from 'vue'
const coffeeList =ref([{name:'Roxpresso Coffee Craft',reviwe:'ร้านกาแฟในเชียงใหม่ดี ๆ ที่มีความพิถีพิถันมาก หน้าร้านเป็นซอยเล็กนะคะ หาที่จอดรถค่อนข้างยากเลยค่ะ ภายในร้านสวยค่ะ ชอบการตกแต่ง สายฮอปปิงก็มาถ่ายรูปได้นะคะ สำหรับเมนูกาแฟต่าง ๆ ราคาค่อนข้างสูงทีเดียว แต่ดูจากการทำแล้ว เค้าค่อนข้างพิถีพิถันมาก เราว่ากาแฟดีเลยทีเดียว',rate:'101 - 250',open:'9:00-17:30 น',link:'https://www.bloggang.com/data/p/pangeataround/picture/1609586023.jpg'}])
import headerv from '/src/views/header.vue'
</script>
<template>
<main>
<headerv></headerv>

<div class="album py-5 bg-body-tertiary">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col" v-for="(i,index) in coffeeList" :key="index">
        <div class="card shadow-sm h-100" style="max-width:500px;">
            <img :src="i.link" class="card-img-top rounded mx-auto d-block " alt="..." :id="i.name" width="700" height="400">
          <div class="card-body">
            <p class="card-text">{{ i.reviwe }}</p>
            <router-link to="/">home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</main>
</template>

<style scoped>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      } 
</style>

