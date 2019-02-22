import Vue from 'vue'
import App from './App.vue'
import childComponent from './components/childComponent.vue'

Vue.component('child', childComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
