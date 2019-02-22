export default {
    state: {
        token: ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        login({commit}, userInfo) {
            let token = '暂时还没定呢';
            //异步请求.....
            //..回调
            commit('setToken', token);
        }
    }
}