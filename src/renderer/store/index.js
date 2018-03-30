import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const state = {
  isLogin: 0
}

const mutations = {
  changeLogin(state,status){
    state.isLogin = status;
  },
  loginOut(state,status){
    console.log(state.isLogin);
    state.isLogin = status;
  }
}

const actions = {
  loginAction({commit}){
    commit('changeLogin',1);
  },
  outAction({commit}){
    commit('loginOut',0);
  }
}

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  state,
  actions,
  mutations
})
