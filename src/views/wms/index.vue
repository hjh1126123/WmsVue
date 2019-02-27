<template>
    <div class="wms">
        <core-drawer />

        <core-toolbar />

        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-top align-left>
                    <router-view/>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {

            }
        },
        methods: {},
        props: {},
        filters: {},
        components: {},
        computed: {},
        mounted() {
        },
        beforeDestroy() {
        },
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        beforeUpdate() {
        },
        updated() {
        },
        destroyed() {
        }
    }
</script>

<style lang="stylus" scoped>
    .wms {
        width 100%;
        height 100%;
    }

</style>