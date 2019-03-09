import Vue from 'vue'
import App from './Appold.vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
import childComponent from './components/childComponent.vue'

import EventBus from '@/plugins/event-bus'

Vue.component('child', childComponent)

Vue.use(EventBus)
Vue.use(VueRouter)

const router = new VueRouter({routes: routes})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
