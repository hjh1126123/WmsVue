<template>
    <v-content dark class="wms">
        <v-container fluid fill-height>
            <v-navigation-drawer dark clipped class="transparent hidden-md-and-down" v-model="drawer" :mini-variant="mini">
                <v-toolbar flat class="transparent">
                    <v-list class="pa-0">
                        <v-list-tile avatar>
                            <v-list-tile-avatar>
                                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg">
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>个人信息</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <v-list dense>
                    <template v-for="(item, i) in items">
                        <v-layout
                                v-if="item.heading"
                                :key="i"
                                row
                                align-center>
                            <v-flex xs6>
                                <v-subheader v-if="item.heading">
                                    {{ item.heading }}
                                </v-subheader>
                            </v-flex>
                            <v-flex xs6 class="text-xs-right">
                                <v-btn small flat>edit</v-btn>
                            </v-flex>
                        </v-layout>
                        <v-divider
                                v-else-if="item.divider"
                                :key="i"
                                dark
                                class="my-3"
                        ></v-divider>
                        <v-list-tile
                                v-else
                                :key="i"
                                @click=""
                        >
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-navigation-drawer>

            <v-layout justify-top align-left>
                <router-view/>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                items: [
                    {divider: true},
                    {icon: 'home', text: '主页'},
                    {icon: 'web', text: '页面配置'},
                    {icon: 'account_box', text: '用户管理'},
                    {icon: 'library_books', text: '文章管理'},
                    {divider: true},
                    {icon: 'help', text: '帮助文档'},
                    {icon: 'settings', text: '后台配置'}
                ],
                drawer: null,
                mini: false
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

    @media only screen and (max-width: 480px) {
        .wms {
            padding 11.25px;
        }
    }

    @media only screen and (min-width: 480px) and (max-width: 768px) {
        .wms {
            padding 22.5px;
        }
    }

    @media only screen and (min-width: 768px) {
        .wms {
            padding 45px;
        }
    }

</style>