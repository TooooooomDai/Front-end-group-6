import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Myhouse',
    name: 'myhouse',
    component: () => import('../views/Myhouse.vue')
  },
  {
    path:'/Myhouse/Addhouse/',
    name:'addhouse',
    component: () => import('../views/Addhouse.vue')
  },
  {
    path:'/Myhouse/Edithouse/',
    name:'edithouse',
    component: () => import('../views/Edithouse.vue')
  },
  {
    path:'/Myhouse/Seehouse/',
    name:'seehouse',
    component: () => import('../views/Seehouse.vue')
  }
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
