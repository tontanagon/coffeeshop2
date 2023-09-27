<script setup>
import { ref } from 'vue'
const coffeeList =ref([{name:'TEA FAC',reviwe:'ร้านกาแฟโกดังสีดำ ย่านสันติธรรม “TEA FAC.” เริ่มจากโรงคั่วชา Bluemocha แล้วเพิ่มเติมมาด้วยร้านกาแฟคุณภาพดี ราคาน่ารักเริ่มต้นแค่ 37.- เมนูซิกเนเจอร์คือ “Tea Fac” เข้มข้น และหอมมัน เบลนด์ด้วยสูตรเฉพาะ หรือถ้าชอบความสดชื่นต้อง “ชาพีช” ใช้ใบชาอบพีชแท้ ๆ หอมทุกคำที่ดื่ม',rate:'ต่ำกว่า 100',open:'8:00-18:00 น',link:'https://www.hungryfatguy.com/wp-content/uploads/2022/10/20221001_150357.jpg'}
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



