export default [
    {
        path: '/authentication',
        component: () => import(/* webpackChunkName: "about" */ 'views/authentication/index.vue')
    }
]