<script setup>
import { ref } from 'vue'
const coffeeList =ref([{name:'ROAST8RY LAB',reviwe:'ร้านกาแฟดังเชียงใหม่อีกสาขา ที่อยู่ไม่ไกลจากสาขาแรก ที่นั่งเยอะกว่า แต่คนก็เยอะเหมือนเดิม วันนี้ได้สั่งเป็นเครื่องดื่มอย่าง “Blvck & Yellow” เป็นกาแฟดำผสมกับน้ำมะม่วง ท็อปด้วยเนื้อมะม่วงอบแห้ง กาแฟรสละมุนมาก เข้ากันได้ดีกับน้ำมะม่วง แก้วนี้โดนใจมาก อีกแก้วเป็น “Godmother Mocha” กาแฟกับโกโก้เข้มข้น เสิร์ฟมาในทรงกระบอกที่มีส่วนเว้าเป็นหัวกะโหลก รูปทรงเป็นเอกลักษณ์ของทางร้าน รสชาติกลมกล่อมเข้มข้น ดีงามเช่นกัน',rate:'101 - 250',open:'8:00-17:00 น',link:'https://img.wongnai.com/p/400x0/2021/12/19/3ee07b1b221d4d8a8837272d8f67177f.jpg'},
])
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

