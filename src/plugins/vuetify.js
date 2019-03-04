import Vue from 'vue'
import Vuetify, {
    VApp,
    VNavigationDrawer,
    VToolbar,
    VFadeTransition,
    VList,
    VTooltip
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

// 谷歌 material
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.use(Vuetify, {
    theme: {
        primary: '#4caf50',
        secondary: '#4caf50',
        tertiary: '#495057',
        accent: '#82B1FF',
        error: '#f55a4e',
        info: '#00d3ee',
        success: '#5cb860',
        warning: '#ffa21a'
    },
    components: {
        VApp,
        VNavigationDrawer,
        VList,
        VToolbar,
        VFadeTransition,
        VTooltip
    },
    directives: {
        Ripple
    }
});
