export default [
    {
        path: '/wms/home',
        component: () => import(/* webpackChunkName: "about" */ 'views/wms/home/index.vue')
    }
]