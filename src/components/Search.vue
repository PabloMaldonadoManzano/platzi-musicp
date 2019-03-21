<template>
    <main>
        <transition name="move">
            <p-m-notification v-show="showNotification">
                <p slot="body">
                    no se encontraron resultados
                </p>
            </p-m-notification>
        </transition>
        <transition name="move">
            <p-m-loader v-show="isLoading"></p-m-loader>
        </transition>

        <section class="section" v-show="!isLoading">
            <nav class="nav has-shadow">
                <div class="container">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input class="input is-large" type="text" placeholder="Buscar canciones" v-model="searchQuery"
                            v-on:keyup.enter="search"/>
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
                <h1 slot="title">Titulo slot</h1>
                <div slot="body">
                    <p>
                        hola
                    </p>
                    <p>
                        adios
                    </p>
                </div>
            </child>

            <div class="container results">
                <div class="columns is-multiline">
                    <div class="column is-one-quarter" v-for=" t in tracks">
                        <p-m-track v-blur="t.preview_url"
                                v-bind:class="{'is-active': t.id === selectedTrack}"
                                v-bind:track="t" v-on:select="setSelectedTrack">

                        </p-m-track>
                        <!--{{--t.nam}}-{{t.artists[0].name--}}-->

                    </div>
                </div>
            </div>


        </section>


    </main>

</template>

<script>
    import trackService from '@/services/track.js'
    import PMTrack from '@/components/Track.vue'
    import PMNotification from '@/components/shared/Notification.vue'
    import PMLoader from '@/components/shared/loader.vue'

    export default {
        name: 'app',
        data () {
            return {
                searchQuery: '',
                tracks: [],
                isLoading: false,
                selectedTrack: '',
                showNotification: false
            }
        },
        components:{
            PMTrack: PMTrack,
            PMLoader: PMLoader,
            PMNotification: PMNotification
        },
        methods:{

            search () {
                if (this.searchQuery === ''){return}
                var that = this
                this.isLoading = true
                console.log(this.tracks)
                trackService.search(this.searchQuery)
                    .then(function(res){
                        that.showNotification = res.tracks.total === 0
                        that.isLoading = false
                        return  that.tracks = res.tracks.items

                    })
            },

            setSelectedTrack (id) {
                this.selectedTrack = id
            }
        },
        computed:{

            searchMessage(){
                return `encontrados: ${this.tracks.length}`
            }
        },
        watch:{

            showNotification () {
                var that = this
                if (this.showNotification){
                    setTimeout(function (){
                        that.showNotification = false;
                    },3000);
                }
            }
        }
    }
</script>



<style lang="scss">
    .is-active{
        border: 3px #23d160 solid;
    }
</style>

