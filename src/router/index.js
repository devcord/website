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
    meta: {
      title: 'Home',
    },
  },

  {
    path: '/rules',
    name: 'Rules',
    component: () => import('@/views/Rules'),
    meta: {
      title: 'Rules',
    },
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {
      title: 'Login',
    },
  },

  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/Logout'),
    meta: {
      title: 'Logout',
    },
  },

  {
    path: '/process-code',
    name: 'ProcessCode',
    component: () => import('@/views/ProcessCode'),
  },

//   {
//     path: '/verify',
//     name: 'Verify',
//     component: () => import('@/views/Verify'),
//     meta: {
//       title: 'Verify',
//     },
//   },

  // {
  //   path: '/legal',
  //   name: 'Legal',
  //   component: () => import('@/views/Legal'),
  // },
  {
    path: '/bots',
    name: 'BotIndex',
    component: () => import('@/views/bots'),
    meta: {
      title: 'Bots',
    },
  },

  {
    path: '/bots/devmod',
    name: 'Devmod',
    component: () => import('@/views/bots/Devmod'),
    meta: {
      title: 'Devmod',
    },
  },

  {
    path: '*',
    name: '404',
    component: () => import('@/views/404'),
    meta: {
      title: '404',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.title) document.title = `${to.meta.title} - devcord`

  next()
})

export default router
