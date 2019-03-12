import Vue from 'vue'
import App from './Appold.vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
import childComponent from './components/childComponent.vue'

//instalando un filtro

import msToMm from '@/components/filters/ms-to-mm'

import EventBus from '@/plugins/event-bus'

Vue.component('child', childComponent)

Vue.use(EventBus)
Vue.use(VueRouter)
Vue.use(msToMm)

const router = new VueRouter(
    {
        routes: routes,
        mode: 'history'
    })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
