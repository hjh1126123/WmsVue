import {set, toggle} from '@/utils/vuex'

export default {
    setDrawer: set('drawer'),
    setImage: set('image'),
    setColor: set('color'),
    setRouter: set('router'),
    toggleDrawer: toggle('drawer')
}
