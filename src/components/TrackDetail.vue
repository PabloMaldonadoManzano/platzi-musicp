<template>
    <div class="container">
        <div class="columns">
            <div class="column is-5 is-offset-4">
                <p-m-track :track="track"></p-m-track>
            </div>
        </div>
    </div>
</template>

<script>

    import trackService from '@/services/Track'
    import PMTrack from '@/components/Track.vue'
    export default {
        data () {
            return {
                track: { }
            }
        },
        components:{
            PMTrack: PMTrack
        },
        created() {
            const id = this.$route.params.id
            trackService.getById(id).then(res =>{
                this.track = res
            })
        }
    }

</script>

<style>

</style>