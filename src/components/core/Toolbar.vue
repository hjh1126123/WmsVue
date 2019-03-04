<template>
    <v-toolbar
            id="core-toolbar"
            flat
            prominent
            style="background: #eee;"
    >
        <div class="v-toolbar-title">
            <v-toolbar-title
                    class="tertiary--text font-weight-light"
            >
                <v-btn
                        v-if="responsive"
                        class="default v-btn--simple"
                        dark
                        icon
                        @click.stop="onClickBtn"
                >
                    <v-icon>menu</v-icon>
                </v-btn>
                {{ name }}
            </v-toolbar-title>
        </div>

        <v-spacer/>
        <v-toolbar-items>
            <v-flex
                    align-center
                    layout
                    py-2
            >
                <v-text-field
                        v-if="responsiveInput"
                        class="mr-4 mt-2 purple-input"
                        label="搜索功能"
                        hide-details
                        color="purple"
                />
                <router-link
                        v-ripple
                        class="toolbar-items"
                        to="/"
                >
                    <v-icon color="tertiary">search</v-icon>
                </router-link>
                <v-menu
                        bottom
                        left
                        content-class="dropdown-menu"
                        offset-y
                        transition="slide-y-transition">
                    <a v-ripple
                       slot="activator"
                       class="toolbar-items">
                        <v-badge
                                color="error"
                                overlap
                        >
                            <template slot="badge">
                                {{ notifications.length }}
                            </template>
                            <v-icon color="tertiary">notifications</v-icon>
                        </v-badge>
                    </a>
                    <v-card>
                        <v-list dense>
                            <v-list-tile
                                    v-for="notification in notifications"
                                    :key="notification"
                                    @click="onClick"
                            >
                                <v-list-tile-title
                                        v-text="notification"
                                />
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-menu>
                <router-link
                        v-ripple
                        class="toolbar-items"
                        to="/user-profile"
                >
                    <v-icon color="tertiary">person</v-icon>
                </router-link>
            </v-flex>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import {
        mapMutations,
        mapState
    } from 'vuex'

    export default {
        data: () => ({
            notifications: [
                'Mike, John responded to your email',
                'You have 5 new tasks',
                'You\'re now a friend with Andrew',
                'Another Notification',
                'Another One'
            ],
            responsive: false,
            responsiveInput: false
        }),
        computed: {
            ...mapState('route', ['name']),
        },
        mounted() {
            this.onResponsiveInverted();
            window.addEventListener('resize', this.onResponsiveInverted)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResponsiveInverted)
        },
        methods: {
            ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
            onClickBtn() {
                this.setDrawer(!this.$store.state.app.drawer)
            },
            onClick() {
                //
            },
            onResponsiveInverted() {
                if (window.innerWidth < 991) {
                    this.responsive = true;
                    this.responsiveInput = false
                } else {
                    this.responsive = false;
                    this.responsiveInput = true
                }
            }
        }
    }
</script>

<style>
    #core-toolbar a {
        text-decoration: none;
    }
</style>