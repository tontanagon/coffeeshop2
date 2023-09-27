<script setup>
import { ref } from 'vue'
const coffeeList =ref([{name:'Ristr8to',reviwe:'วันนี้จะมาแนะนำ ร้านกาแฟเชียงใหม่เทพ ๆ ย่านถนนนิมาน ร้านนี้อยู่หน้านิมมานซอยสาม มีลูกค้าเยอะตลอดทั้งวัน ทั้งชาวไทยและชาวต่างชาติ มีเมนูให้เลือกเยอะ มีเมล็ดกาแฟให้เลือกเยอะเช่นกัน วันนี้ได้สั่งเป็น “Dirty” ทางร้านผสมนมได้โอเคมาก ไม่หวาน มัน ๆ กำลังดี ช็อตกาแฟหอม ๆ ใส่ลงไปเข้ากันมาก สายกาแฟไม่ควรพลาดร้านนี้ ทั้งเรื่องรสชาติและบรรยากาศ ควรมาครับ',rate:'ต่ำกว่า 100',open:'7:00-18:00 น',link:'https://www.hungryfatguy.com/wp-content/uploads/2014/04/KNS_1811-650x433.jpg'},
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

