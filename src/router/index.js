import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import Meta from 'vue-meta'

// Routes
import authentication from './router-authentication'
import wms from './router-wms'


const routes = [
    ...authentication,
    ...wms
];;

function route (path, view, name, children) {

    let tmp = {
        name: name || view,
        path,
        component: () => import(`views/${view}.vue`)
    };

    if(children){
        children.map(path => route(path.path, path.view, path.name, path.children));
    }

    return tmp;
}

Vue.use(Router);

// Create a new router
const router = new Router({
    mode: 'history',
    routes: routes.map(path => route(path.path, path.view, path.name, path.children)).concat([
        { path: '*', redirect: '/authentication' }
    ]),
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { selector: to.hash }
        }
        return { x: 0, y: 0 }
    }
});

Vue.use(Meta);

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.GOOGLE_ANALYTICS) {
    Vue.use(VueAnalytics, {
        id: process.env.GOOGLE_ANALYTICS,
        router,
        autoTracking: {
            page: process.env.NODE_ENV !== 'development'
        }
    })
}


export default router;
