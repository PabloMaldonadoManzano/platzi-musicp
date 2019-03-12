<template>
    <div class="content">
        <p class="is-128x128">
            <img v-if="track && track.album" v-bind:src="track.album.images[0].url">
        </p>
        <p>
            <strong>{{track.name}}</strong>
            <small>[{{track.duration_ms | ms-to-mm }}]</small>
        </p>
        <p>
            <audio controls v-bind:src="track.preview_url">

            </audio>
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                track: {}
            }
        },
        created () {
            this.$bus.$on('set-track',(track) => {
                this.track = track
            })
        }
    }
</script>

<style scoped>
    img{
        width: 124px;
        border-radius: 50%;
    }
</style>