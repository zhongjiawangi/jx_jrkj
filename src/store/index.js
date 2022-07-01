import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogVisible: false
  },
  getters: {
  },
  mutations: {
    changeDialog(state) {
      state.dialogVisible = !state.dialogVisible
    }
  },
  actions: {
  },
  modules: {
  }
})
