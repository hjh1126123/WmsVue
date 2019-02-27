import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const requireModule = require.context('./modules', true, /\.js$/);

const modules = {};
requireModule.keys().forEach(fileName => {
    if (fileName === './index.js') return;

    const name = fileName.replace(/(store-|\.\/|\.js)/g, '');
    console.log(name);
});
console.log(modules);


export default new Vuex.Store({
    modules: modules
})
