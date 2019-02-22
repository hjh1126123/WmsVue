import Vue from 'vue'
import Router from 'vue-router'

import authentication from './modules/router-authentication'
import wms from './modules/router-wms'

Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/authentication'
        },
        ...authentication,
        ...wms
    ]
})
