import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import actions from './action'
import user from './modules/user'
export default new Vuex.Store({
    getters,
    actions,
    modules:{
        user
    },
    plugins: [createPersistedState()]   
})