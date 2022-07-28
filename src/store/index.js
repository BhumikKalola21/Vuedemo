import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  gisLogin: false,
  lisLogin: false,
  showResult: {},
}

const mutations = {
  loginMutation(state, payload){
    console.log(payload);
    state.gisLogin = payload.gisLogin;
    state.showResult = payload.showResult;
  }
}

const actions = {
}

const getters = {
  gisLogin(state){
    return state.gisLogin;
  },
  showResult(state){
    return state.showResult;
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store;
