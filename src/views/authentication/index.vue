<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card dark class="elevation-12" color="transparent">
                        <v-toolbar color="transparent">
                            <v-toolbar-title>WMS登录界面</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-tooltip right>
                                <i></i>
                            </v-tooltip>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field v-model="userId" prepend-icon="person" label="用户名" type="text"
                                              placeholder="请输入用户名"></v-text-field>
                                <v-text-field v-model="userPwd" prepend-icon="lock" label="密码"
                                              placeholder="请输入密码" type="password" autocomplete="new-password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" v-on:click="sumbit">登录</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                userId : '',
                userPwd : ''
            }
        },
        methods: {
            sumbit() {
                this.$router.push('/wms');
            }
        },
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

</style>