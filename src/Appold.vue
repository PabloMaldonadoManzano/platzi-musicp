<template>
  <div id="app">
    <PMHeader></PMHeader>
    <router-view></router-view>
    <p-m-footer></p-m-footer>
  </div>

</template>

<script>
    import PMFooter from '@/components/layout/footer.vue'
    import PMHeader from '@/components/layout/header.vue'


export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    PMFooter: PMFooter,
    PMHeader: PMHeader
  }

}
</script>



<style lang="scss">
  @import './scss/main.scss';
  .is-active{
    border: 3px #23d160 solid;
  }
</style>

