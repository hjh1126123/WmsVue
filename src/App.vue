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
            return {
                //
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .mine-app {
        width: 100%;
        height: 100%;
        position: relative;
        background: url("~imgs/wms/bg.jpg") no-repeat;
        box-sizing: border-box;
        z-index: 1;
        background-size: cover;

        &:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: inherit;
            filter: blur(15px);
            z-index: 2;
        }

        .blur {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            z-index: 3;

            .toolbar {
                background-color: rgba(0, 0, 0, 0.73)
            }
        }
    }
</style>
