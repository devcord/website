import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  el: 'body',
  router, 
  store, 
  render (h) {
    return h(App)
  },
})
