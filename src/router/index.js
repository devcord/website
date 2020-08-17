import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
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
    path: '/process-code',
    name: 'ProcessCode',
    component: () => import('@/views/ProcessCode'),
  },

  {
    path: '/verify',
    name: 'Verify',
    component: () => import('@/views/Verify'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
