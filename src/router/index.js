import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
// import Rules from '@/views/Rules'
// import Login from '@/views/Login'
// import ProcessCode from '@/views/ProcessCode'
// import Verify from '@/views/Verify'

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
    component: () => import('@/views/Rules'),
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
  },

  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/Logout'),
  },

  {
    path: '/process-code',
    name: 'ProcessCode',
    component: () => import('@/views/ProcessCode'),
  },

  {
    path: '/verify',
    name: 'Verify',
    component: () => import('@/views/Verify'),
  },

  {
    path: '/legal',
    name: 'Legal',
    component: () => import('@/views/Legal'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
})

export default router
