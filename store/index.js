import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
const state = {
    token : '',
    //未登录切换header
    toggle : 0,
}

export default () => {
    return new Vuex.Store({
        state,
        getters,
        mutations,
        actions
    })
}
