import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Rules from '@/views/Rules'
import Login from '@/views/Login'
import ProcessCode from '@/views/ProcessCode'
import Verify from '@/views/Verify'

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
    // component: () => import(/* webpackChunkName: "rules" */ '@/views/Rules'),
    component: Rules,
  },

  {
    path: '/login',
    name: 'Login',
    // component: () => import(/* webpackChunkName: "login" */ '@/views/Login'),
    component: Login,
  },

  {
    path: '/process-code',
    name: 'ProcessCode',
    // component: () => import(/* webpackChunkName: "process-code" */ '@/views/ProcessCode'),
    component: ProcessCode,
  },

  {
    path: '/verify',
    name: 'Verify',
    // component: () => import(/* webpackChunkName: "verify" */ '@/views/Verify'),
    component: Verify,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
