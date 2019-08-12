import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 
const state = {
    showFooter: true,
    changableNum
}

const getters = {
    isShow(state){
        return state.showFooter
    },
    getChangableNum(state){
        return state.changableNum
    }

}

const mutations = {
    show(state){
        state.showFooter = true;
    },
    hide(state){
        state.showFooter = false;
    },
    newNum(state,num){
        state.changableNum += num;
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
});
export default store;