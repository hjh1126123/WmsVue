import Vue from 'vue'

import './components'
import './plugins'

import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import store from './store'

import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

sync(store, router);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

