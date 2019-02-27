import Vue from 'vue'
import App from './Appold.vue'
import childComponent from './components/childComponent.vue'

Vue.component('child', childComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
