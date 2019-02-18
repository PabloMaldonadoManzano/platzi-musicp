<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h1>{{msg}}</h1>
    <p>{{1 + 1}}</p>
    <p>{{'Hola' + 'Mundo'}}</p>
    <p>{{person.name}}</p>
    <p>{{person.name.toUpperCase()}}</p>
    <p>{{JSON.stringify(person)}}</p>
    <p>{{true ? 'true':'false'}}</p>
    <p v-show="showValue">{{value}}</p>
    <p v-if="showValue">{{value}}</p>
    <p v-else-if="true">{{"algo mas"}}</p>
    <p v-else>{{"Es false"}}</p>
    <ul>
      <li v-for="i in items" v-bind:key="i">{{i}}</li>
    </ul-->
    <br>
    <input v-model="name"/>
    <input v-model="lastname"/>
    <!--a v-bind:href="url">Link</a-->
    <br>
    <p>{{name}}</p>
    <p>{{lastname}}</p>
    <p>{{fullName}}</p>
    <!--login></login-->
  </div>
</template>

<script>
//import Login from './components/login.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola vue!',
      name: '',
      lastname: '',
      person: {
          name: 'Juan'
      },
        showValue: false,
        value: 'Algo',
        items: [1,2,3,4,5],
        url: 'https://platzi.com'

    }
  },
  components:{

  },
  computed:{
      fullName () {
          return `${this.name} ${this.lastname}`
      }
  }
}
</script>



<style lang="scss">
  @import './scss/main.scss';
</style>

