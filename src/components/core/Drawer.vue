<template>
    <v-navigation-drawer
            id="app-drawer"
            v-model="inputValue"
            app
            dark
            floating
            persistent
            mobile-break-point="991"
            width="260"
    >
        <v-img
                :src="image"
                height="100%"
        >
            <v-layout
                    class="fill-height"
                    tag="v-list"
                    column
            >
                <v-list-tile avatar>
                    <v-list-tile-avatar
                            color="white"
                    >
                        <v-img
                                :src="logo"
                                height="34"
                                contain
                        />
                    </v-list-tile-avatar>
                    <v-list-tile-title class="title">
                        Vuetify MD
                    </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile
                        v-if="responsive"
                >
                    <v-text-field
                            class="purple-input search-input"
                            label="Search..."
                            color="purple"
                    />
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile>
                <v-list-group
                        prepend-icon="account_circle"
                        value="true"
                >
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title>Users</v-list-tile-title>
                        </v-list-tile>
                    </template>
                    <v-list-group
                            no-action
                            sub-group
                            value="true"
                    >
                        <template v-slot:activator>
                            <v-list-tile>
                                <v-list-tile-title>Admin</v-list-tile-title>
                            </v-list-tile>
                        </template>

                        <v-list-tile
                                v-for="(admin, i) in admins"
                                :key="i"
                                @click="">
                            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon v-text="admin[1]"></v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
                    <v-list-group
                            sub-group
                            no-action
                    >
                        <template v-slot:activator>
                            <v-list-tile>
                                <v-list-tile-title>Actions</v-list-tile-title>
                            </v-list-tile>
                        </template>
                        <v-list-tile
                                v-for="(crud, i) in cruds"
                                :key="i"
                                @click=""
                        >
                            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon v-text="crud[1]"></v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
                </v-list-group>
                <!--<v-list-tile-->
                <!--v-for="(link, i) in links"-->
                <!--:key="i"-->
                <!--:to="link.to"-->
                <!--:active-class="color"-->
                <!--avatar-->
                <!--class="v-list-item"-->
                <!--&gt;-->
                <!--<v-list-tile-action>-->
                <!--<v-icon>{{ link.icon }}</v-icon>-->
                <!--</v-list-tile-action>-->
                <!--<v-list-tile-title-->
                <!--v-text="link.text"-->
                <!--/>-->
                <!--</v-list-tile>-->
            </v-layout>
        </v-img>
    </v-navigation-drawer>
</template>

<script>
    import {
        mapMutations,
        mapState
    } from 'vuex'

    export default {
        data: () => ({
            logo: 'https://demos.creative-tim.com/vuetify-material-dashboard/img/vuetifylogo.png',
            links: [
                {
                    icon: 'home',
                    text: '主页'
                }
            ],
            admins: [
                ['Management', 'people_outline'],
                ['Settings', 'settings']
            ],
            cruds: [
                ['Create', 'add'],
                ['Read', 'insert_drive_file'],
                ['Update', 'update'],
                ['Delete', 'delete']
            ],
            responsive: false
        }),
        computed: {
            ...mapState('app', ['image', 'color']),
            inputValue: {
                get() {
                    return this.$store.state.app.drawer
                },
                set(val) {
                    this.setDrawer(val)
                }
            },
            items() {
                return this.$t('Layout.View.items')
            }
        },
        mounted() {
            console.log(this.$router);

            this.onResponsiveInverted();
            window.addEventListener('resize', this.onResponsiveInverted)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResponsiveInverted)
        },
        methods: {
            ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
            onResponsiveInverted() {
                if (window.innerWidth < 991) {
                    this.responsive = true
                } else {
                    this.responsive = false
                }
            }
        }
    }
</script>

<style lang="stylus">
    #app-drawer {
        .v-list__tile {
            border-radius: 4px;

            &--buy {
                margin-top: auto;
                margin-bottom: 17px;
            }
        }

        .v-image__image--contain {
            top: 9px;
            height: 60%;
        }

        .search-input {
            margin-bottom: 30px !important;
            padding-left: 15px;
            padding-right: 15px;
        }
    }
</style>
