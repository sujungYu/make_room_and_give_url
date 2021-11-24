import Vue from 'vue'
import Vuex from 'vuex'

import SigModule from './SigModule'


Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {

    sig: SigModule,

  },
  state: {
    loading: false,
    error: null,
    onlineUsers: []
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setOnlineUsers (state, payload) {
      state.onlineUsers = payload
    }
  },
  actions: {
    // loadOnlineUsers ({commit}) {
    //   firebase.database().ref('presence').on('value', function (snapshot) {
    //     let result = []
    //     result[0] = snapshot.numChildren()
    //     result[1] = snapshot.val()
    //     commit('setOnlineUsers', result)
    //   })
    // },
    // clearError ({commit}) {
    //   commit('clearError')
    // }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    onlineUsers (state) {
      return state.onlineUsers
    }
  }
})