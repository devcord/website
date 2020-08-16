import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Rules from '@/views/Rules'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
