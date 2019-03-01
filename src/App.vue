<template>
    <v-app class="mine-app">
        <v-expand-transition>
            <router-view class="blur"/>
        </v-expand-transition>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        },
        mounted() {
            
        }
    }
</script>

<style lang="stylus">
    @import '~styles/index.styl';
</style>
