<template>
    <section class="hero is-success">
        <div>
            <div class="hero-head">
                <header class="navbar">
                    <div class="container">
                        <div class="nav-left">
                            <nav class="navbar-item">
                                <strong> 📻 Platzi Music</strong>
                            </nav>
                        </div>
                        <div class="nav-right navbar-menu">
                            <router-link :to="{name: 'search'}" class="navbar-item">Buscar</router-link>
                            <router-link to="about" class="navbar-item">Nosotros</router-link>
                        </div>
                    </div>
                </header>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Platzi Music</h1>
                    <h2 class="subtitle"> canciones que estan Vue-nisimas</h2>
                    <p-m-player></p-m-player>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import PMPlayer from '@/components/Player.vue'

    export default {
        components:{
            PMPlayer: PMPlayer
        }

    }
</script>