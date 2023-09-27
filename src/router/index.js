import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import newcard1 from '../components/card/newcard1.vue'
import newcard2 from '../components/card/newcard2.vue'
import newcard3 from '../components/card/newcard3.vue'
import newcard4 from '../components/card/newcard4.vue'
import newcard5 from '../components/card/newcard5.vue'


const routes = [
  {path: '/newcard1' , component: newcard1},
  {path: '/newcard2' , component: newcard2},
  {path: '/newcard3' , component: newcard3},
  {path: '/newcard4' , component: newcard4},
  {path: '/newcard5' , component: newcard5 },
  {path: '/' ,component: HomeView}
  ]
  
  const route = createRouter({ 
      history: createWebHistory(),
      routes,
  })
export default route
