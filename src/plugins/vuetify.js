import Vue from 'vue'
import Vuetify, {
    VApp, // required
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VFadeTransition
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'
import zhHans from 'vuetify/es5/locale/zh-Hans'


Vue.use(Vuetify, {
    // theme: {
    //     primary: '#ccc7ff',
    //     secondary: '#689ab7',
    //     accent: '#2196F3',
    //     error: '#FF5252',
    //     info: '#2196F3',
    //     success: '#4CAF50',
    //     warning: '#FFC107',
    // },
    customProperties: true,
    iconfont: 'md',
    lang: {
        locales: {zhHans},
        current: 'zh-Hans'
    },
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VToolbar,
        VFadeTransition
    },
    directives: {
        Ripple
    }
});
