<script setup>
import { ref } from 'vue'
import headerv from './header.vue'
const list = ref([]);
const listshop = ref([]);
const coffeeList =ref([{link1:'newcard1',name:'The Nest Cafe',reviwe:'The Nest Cafe ร้านอาหาร บรรยากาศดีใกล้ชิดธรรมชาติ จัดเต็มทั้งอาหารเหนือ อาหารพื้นเมือง และเครื่องดื่มหลากหลาย ที่นอกจะอิ่มท้องจากอาหาร ยังอิ่มใจกับบรรยากาศท่ามกลางขุนเขา ชมวิวได้รอบ 180 องศา มุมถ่ายรูปเยอะ และมีเมนูเด็ดอย่าง “ฮังเลคากิกับข้าวซอยลอยฟ้า” อาหารเหนือพื้นบ้านแท้ ๆ นอกจากเมนู อาหาร เครื่องดื่มแล้ว ที่นี่ยังมีที่พักอีกด้วย',rate:'101 - 250',open:'9:00-17:30 น',link:'https://www.chillnaid.com/wp-content/uploads/2020/07/thenest-1-12.jpg'},
                       {link1:'newcard2',name:'TEA FAC',reviwe:'ร้านกาแฟโกดังสีดำ ย่านสันติธรรม “TEA FAC.” เริ่มจากโรงคั่วชา Bluemocha แล้วเพิ่มเติมมาด้วยร้านกาแฟคุณภาพดี ราคาน่ารักเริ่มต้นแค่ 37.- เมนูซิกเนเจอร์คือ “Tea Fac” เข้มข้น และหอมมัน เบลนด์ด้วยสูตรเฉพาะ หรือถ้าชอบความสดชื่นต้อง “ชาพีช” ใช้ใบชาอบพีชแท้ ๆ หอมทุกคำที่ดื่ม',rate:'ต่ำกว่า 100',open:'8:00-18:00 น',link:'https://www.hungryfatguy.com/wp-content/uploads/2022/10/20221001_150357.jpg'},
                       {link1:'newcard3',name:'Ristr8to',reviwe:'วันนี้จะมาแนะนำ ร้านกาแฟเชียงใหม่เทพ ๆ ย่านถนนนิมาน ร้านนี้อยู่หน้านิมมานซอยสาม มีลูกค้าเยอะตลอดทั้งวัน ทั้งชาวไทยและชาวต่างชาติ มีเมนูให้เลือกเยอะ มีเมล็ดกาแฟให้เลือกเยอะเช่นกัน วันนี้ได้สั่งเป็น “Dirty” ทางร้านผสมนมได้โอเคมาก ไม่หวาน มัน ๆ กำลังดี ช็อตกาแฟหอม ๆ ใส่ลงไปเข้ากันมาก สายกาแฟไม่ควรพลาดร้านนี้ ทั้งเรื่องรสชาติและบรรยากาศ ควรมาครับ',rate:'ต่ำกว่า 100',open:'7:00-18:00 น',link:'https://www.hungryfatguy.com/wp-content/uploads/2014/04/KNS_1811-650x433.jpg'},
                       {link1:'newcard4',name:'ROAST8RY LAB',reviwe:'ร้านกาแฟดังเชียงใหม่อีกสาขา ที่อยู่ไม่ไกลจากสาขาแรก ที่นั่งเยอะกว่า แต่คนก็เยอะเหมือนเดิม วันนี้ได้สั่งเป็นเครื่องดื่มอย่าง “Blvck & Yellow” เป็นกาแฟดำผสมกับน้ำมะม่วง ท็อปด้วยเนื้อมะม่วงอบแห้ง กาแฟรสละมุนมาก เข้ากันได้ดีกับน้ำมะม่วง แก้วนี้โดนใจมาก อีกแก้วเป็น “Godmother Mocha” กาแฟกับโกโก้เข้มข้น เสิร์ฟมาในทรงกระบอกที่มีส่วนเว้าเป็นหัวกะโหลก รูปทรงเป็นเอกลักษณ์ของทางร้าน รสชาติกลมกล่อมเข้มข้น ดีงามเช่นกัน',rate:'101 - 250',open:'8:00-17:00 น',link:'https://img.wongnai.com/p/400x0/2021/12/19/3ee07b1b221d4d8a8837272d8f67177f.jpg'},
                       {link1:'newcard5',name:'Roxpresso Coffee Craft',reviwe:'ร้านกาแฟในเชียงใหม่ดี ๆ ที่มีความพิถีพิถันมาก หน้าร้านเป็นซอยเล็กนะคะ หาที่จอดรถค่อนข้างยากเลยค่ะ ภายในร้านสวยค่ะ ชอบการตกแต่ง สายฮอปปิงก็มาถ่ายรูปได้นะคะ สำหรับเมนูกาแฟต่าง ๆ ราคาค่อนข้างสูงทีเดียว แต่ดูจากการทำแล้ว เค้าค่อนข้างพิถีพิถันมาก เราว่ากาแฟดีเลยทีเดียว',rate:'101 - 250',open:'9:00-17:30 น',link:'https://www.bloggang.com/data/p/pangeataround/picture/1609586023.jpg'}])
function ntable(name) {   
  const x = {
    shop:name
  }
  
  list.value.splice(x);
  list.value.push(x);

}
function re() {
  window.location.reload();
}
const form = ref({
  name: "",
  phone: "",
  date: "",
  time: ""
});
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
            <h5 class="card-title">{{ i.name }}</h5>
            <p class="card-text"><small class="text-body-secondary">ช่วงราคา : {{ i.rate }} <br> เวลา เปิด-ปิด : {{ i.open }}</small></p>
            <p class="card-text m-3">
              <div class="position-absolute bottom-0" style="padding: 10px;">
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#pageform" @click="ntable(i.name)" :value="i.name">จองโต๊ะ</button>
                <router-link :to="i.link1" class="m-3">รายละเอียด</router-link>
              </div>
            </p>
          </div>
          <div style="padding: 50px;"></div>
        </div>
      </div>
    </div>
  </div>
</div>

    <div class="modal fade" id="pageform" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel" v-for="i in list">{{ i.shop }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form class="modal-body form-box">
            <label for="namecos" class="form-label">ชื่อผู้จอง</label>
            <input type="text" id="namecos" class="form-control " v-model="form.name" placeholder="ชื่อ-นามสกุล"  required>
            <label for="tel" class="form-label">เบอร์โทรศัพท์</label>
            <input type="tel" id="tel" class="form-control" v-model="form.phone" placeholder="EX. 0865421586"  required>
            <label for="date" class="form-label">วันที่จอง</label>
            <input type="date" id="date" class="form-control" v-model="form.date" required>
            <label for="time" class="form-label">เวลาที่จอง</label>
            <input type="time" id="time" class="form-control" v-model="form.time" required>
          </form>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">ต่อไป</button>    
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModalToggle2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">ยืนยันการจอง</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" v-for="i in list">
            <p><strong>ร้านที่จอง:</strong> {{i.shop}}</p>
            <p><strong>ชื่อ-นามสกุล:</strong> {{ form.name }}</p>
            <p><strong>เบอร์โทร:</strong> {{ form.phone }}</p>
            <p><strong>วันที่:</strong> {{ form.date }}</p>
            <p><strong>เวลา:</strong> {{ form.time }}</p>
          </div>
          <div class="modal-footer" v-for="i in list">
            <button type="button" class="btn btn-danger" data-bs-target="#pageform" data-bs-toggle="modal">แก้ไข</button>
            <button type="button" class="btn btn-primary" @click="pushlist(i.name)" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" >ยืนยันการจอง</button>    
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModalToggle3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">จองสำเร็จ</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>ขอให้เป็นวันที่ดี~~</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="re()">ยืนยันการจอง</button>    
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

