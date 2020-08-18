import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

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
    component: () => import(/* webpackChunkName: "rules" */ '@/views/Rules'),
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login'),
  },

  {
    path: '/process-code',
    name: 'ProcessCode',
    component: () => import(/* webpackChunkName: "process-code" */ '@/views/ProcessCode'),
  },

  {
    path: '/verify',
    name: 'Verify',
    component: () => import(/* webpackChunkName: "verify" */ '@/views/Verify'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
