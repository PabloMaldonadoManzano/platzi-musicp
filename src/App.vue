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
    </ul>
    <br>
    <input v-model="name"/>
    <input v-model="lastname"/>
    <a v-bind:href="url">Link</a>
    <br>
    <p>{{name}}</p>
    <p>{{lastname}}</p>
    <p>{{fullName}}</p>
    <p>{{edad}}</p>

    <button v-on:click="format">Dar formato</button>
    <p>{{formattedName}}</p>

    <login></login-->
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input is-large" type="text" placeholder="Buscar canciones" v-model="searchQuery"/>
            </div>
            <div class="control">
              <a class="button is-info is-large" @click="search">Buscar</a>
              <a class="button is-danger is-large">&times;</a>
            </div>
          </div>
        </div>
        <div class="container">
          <p>
            <small>{{searchMessage}}</small>
          </p>
        </div>
      </nav>
      <child>

      </child>
      <div class="container results">
        <div class="columns">
          <div class="column" v-for=" t in tracks">
            {{t.name}}-{{t.artists[0].name}}
          </div>
        </div>
      </div>


    </section>

  </div>
</template>

<script>
    import trackService from './services/track.js'

  /*const tracks = [
      {name: 'Dance macabre', artist: 'Ghost'},
      {name: 'Dont go breacking my heart', artist:'Elton john'},
      {name: 'Stranger', artist: 'the rasmus'}
      ];
import Login from './components/login.vue'*/

export default {
  name: 'app',
  data () {
    return {
     /* msg: 'Hola vue!',
      name: '',
      lastname: '',
      person: {
          name: 'Juan'
      },
        showValue: false,
        value: 'Algo',
        items: [1,2,3,4,5],
        url: 'https://platzi.com',
        fechaNacimiento: '29/04/1994',
        formattedName: ''
      */
     searchQuery: '',
     tracks: []
    }
  },
  components:{

  },
  methods:{
      /*format(){
        this.formattedName = this.name.split(' ').join('-').toUpperCase()
      }*/
      search () {
          if (this.searchQuery === ''){return}
          var that = this
          console.log(this.tracks)
          trackService.search(this.searchQuery)
              .then(function(res){
                  return  that.tracks = res.tracks.items
              })
              /*.then(res =>{
                  this.tracks = res.tracks.items
              })*/
          //this.tracks = tracks
      }
  },
  computed:{
      /*fullName () {
          return `${this.name} ${this.lastname}`
      },
      edad () {
          var birthday_arr = this.fechaNacimiento.split("/");
          var fecha = new Date(birthday_arr[2],birthday_arr[1]-1,birthday_arr[0])
          var diff = Date.now() - fecha.getTime()
          var edad =  new Date(diff)
          return Math.abs(edad.getUTCFullYear() - 1970)
      }*/

      searchMessage(){
          return `encontrados: ${this.tracks.length}`
      }
  },
  watch:{
      /*name ( newVal, oldVal) {
          console.log(newVal, oldVal)
      }*/
  }
}
</script>



<style lang="scss">
  @import './scss/main.scss';

  .results{
    margin: 50px
  }

</style>

