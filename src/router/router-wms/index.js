import home from './wms-home'

export default [
    {
        path: '/wms',
        redirect: '/wms/home',
        view: 'wms/index',
        children: [
            ...home
        ]
    }
]