<template>
    <div class="container" v-if="track && track.id">
        <div class="columns">
            <div class="column is-3 has-text-centered">
                <!--p-m-track :track="track"></p-m-track-->
                <figure class="media-left">
                    <p class="image">
                        <img :src="track.album.images[0].url"/>
                    </p>
                    <p class="button-bar">
                        <a class="button is-primary is-large">
                            <span class="icon" @click="selectTrack">▶️</span>
                        </a>
                    </p>
                </figure>
            </div>
            <div class="column is-8">
                <div class="panel">
                    <div class="panel-heading">
                        <h1 class="title">{{trackTitle}}</h1>
                    </div>
                    <div class="panel-block">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <ul v-for="(v, k) in track">
                                        <li>
                                            <strong>{{k}}:&nbsp;</strong>
                                            <strong>{{v}}</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <nav class="level">
                                <div class="level-left">
                                    <a class="level-item">

                                    </a>
                                </div>
                            </nav>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import trackMixin from '@/mixins/track'
    //import trackService from '@/services/Track'
    //import PMTrack from '@/components/Track.vue'
    import {mapState, mapActions, mapGetters} from 'vuex'

    export default {
        mixins: [trackMixin],
        computed: {
            ...mapState(['track']),
            ...mapGetters(['trackTitle'])
        },
       /* data () {
            return {
                track: { }
            }
        },*/
        components:{
            //PMTrack: PMTrack
        },
        created() {
            const id = this.$route.params.id

            if(!this.track || !this.track.id || this.track.id != id){
                this.getTrackById({id})
                    .then(()=>{
                        console.log('track loaded')
                    })
            }
           /* trackService.getById(id).then(res =>{
                this.track = res
            })*/
        },
        methods: {
            ...mapActions(['getTrackById'])
        }
    }

</script>

<style>

    .button-bar{
        margin-top:  20px;
    }

</style>