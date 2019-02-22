<template>
    <v-content dark>
        <div class="wms">
            <v-container fluid fill-height class="container elevation-10">
                <v-navigation-drawer dark clipped class="transparent" v-model="drawer">
                    <v-toolbar flat class="transparent">
                        <v-list class="pa-0">
                            <v-list-tile avatar>
                                <v-list-tile-avatar>
                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550754679159&di=d0720e1e7bbe6683833ca5858b4b2a58&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F04%2F20151104153720_KBrwV.jpeg">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title>网站管理系统</v-list-tile-title>
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

            </v-container>
        </div>
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
                drawer: null
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

        .container {
            background-color rgba(0, 0, 0, 0.5);
        }
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