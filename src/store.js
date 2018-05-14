import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const apiUrl = '/api/books'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [{ id: 1, title: 'Test', author: 'Pushkin', description: 'tttt', date: Date.now() }]
  },

  getters: {
    list: state => state.list
  },

  mutations: {
    SET_LIST(state, payload) {
      state.list = payload.data
    }
  },

  actions: {
    getList({ commit }) {
      return axios.get(apiUrl)
        .then(res => commit('SET_LIST', res))
    },

    create(context, data) {
      return axios.create(`${apiUrl}`, data)
    },

    update(context, { id, data }) {
      return axios.put(`${apiUrl}/${id}`, data)
    },

    destroy(context, id) {
      return axios.delete(`${apiUrl}/${id}`)
    }
  },
})
