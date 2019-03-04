import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import Meta from 'vue-meta'

// Routes
import authentication from './router-authentication'
import wms from './router-wms'

Vue.use(Router);
Vue.use(Meta);

const routes = [
    ...authentication,
    ...wms
];

function ConnectRoute(path, view, name, redirect, children) {
    let tmp = {
        name: name || view,
        path,
        component: () => import(`views/${view}.vue`)
    };
    if (redirect) {
        tmp.redirect = redirect;
    }
    if (children) {
        tmp.children = children.map(path => ConnectRoute(path.path, path.view, path.name, path.redirect, path.children));
    }
    return tmp;
}

const router = new Router({
    mode: 'history',
    routes: routes.map(path => ConnectRoute(path.path, path.view, path.name, path.redirect, path.children)).concat([
        {path: '*', redirect: '/authentication'}
    ]),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {selector: to.hash}
        }
        return {x: 0, y: 0}
    }
});

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