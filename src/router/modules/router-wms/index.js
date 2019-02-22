import home from './modules/wms-home'

export default [
    {
        path: '/wms',
        redirect: '/wms/home',
        component: () => import(/* webpackChunkName: "about" */ 'views/wms/index.vue'),
        children: [
            ...home
        ]
    }
]