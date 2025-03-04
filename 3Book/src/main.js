import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

import store from './store/index'

import VueEvents from './plugins/events'
Vue.use(VueEvents)

import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  store,
  router,
  el: '#app',
  template: `
    <div id="app">
      <transition name="fade"  mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  `,
  components: { App }
})
    
