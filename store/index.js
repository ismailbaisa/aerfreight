import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const state = {
    loadedCargo: [],
    user: '',
};


export default {
    state,
    mutations,
    actions,
    getters
}