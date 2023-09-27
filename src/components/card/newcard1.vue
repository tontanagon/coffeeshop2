<script setup>
import { ref } from 'vue'
const nest =ref([{name:'The Nest Cafe',reviwe:'The Nest Cafe ร้านอาหาร บรรยากาศดีใกล้ชิดธรรมชาติ จัดเต็มทั้งอาหารเหนือ อาหารพื้นเมือง และเครื่องดื่มหลากหลาย ที่นอกจะอิ่มท้องจากอาหาร ยังอิ่มใจกับบรรยากาศท่ามกลางขุนเขา ชมวิวได้รอบ 180 องศา มุมถ่ายรูปเยอะ และมีเมนูเด็ดอย่าง “ฮังเลคากิกับข้าวซอยลอยฟ้า” อาหารเหนือพื้นบ้านแท้ ๆ นอกจากเมนู อาหาร เครื่องดื่มแล้ว ที่นี่ยังมีที่พักอีกด้วย',rate:'101 - 250',open:'9:00-17:30 น',link:'https://www.chillnaid.com/wp-content/uploads/2020/07/thenest-1-12.jpg'},
])
import headerv from '/src/views/header.vue'
</script>
<template>
<main>
<headerv></headerv>

<div class="album py-5 bg-body-tertiary">
  <div class="container">
      <div class="text-center" v-for="(i,index) in nest" :key="index">
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

