import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3030/api/books',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  timeout: 1000,
})

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
      return api.get()
        .then(res => commit('SET_LIST', res))
        .catch(console.err)
    },

    create(context, data) {
      return api.create('', data)
        .catch(console.err)
    },

    update(context, { id, data }) {
      return api.put(`/${id}`, data)
        .catch(console.err)
    },

    destroy(context, id) {
      return api.delete(`/${id}`)
        .catch(console.err)
    }
  },
})
