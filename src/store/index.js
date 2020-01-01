import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  addCount: function () {
    state.count += 1
  },
  reduceCount: function () {
    state.count -= 1
  }
}

const actions = {
  addCountSync: function (context) {
    context.commit('addCount')
  },
  reduceCountSync: function (context) {
    context.commit('reduceCount')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})