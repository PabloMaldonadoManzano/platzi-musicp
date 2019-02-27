<template>
    <div id="app">


        <section class="section">
           <div class="content">

           </div>



        </section>


    </div>
</template>

<script>

    export default {
        name: 'app',
        data () {
            return {
                person:{
                    name: 'Pablo'
                }
            }
        },
        created () {
            //Se utiliza para optener info de APi'S y cargarla en memoria para mostrarla al estar montada
            console.log('created ... ')
        },
        mounted () {
            console.log('mounted ... ')
        }
    }
</script>



<style lang="scss">
    @import './scss/main.scss';

    .results{
        margin: 50px
    }

</style>

