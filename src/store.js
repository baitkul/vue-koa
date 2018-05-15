import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Qs from 'qs'
import moment from 'moment'

const api = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3030}/api/books`,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  timeout: 1000,
  paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'brackets' }),
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    total: 0,
  },

  getters: {
    list: state => state.list,
    total: state => state.total
  },

  mutations: {
    SET_LIST(state, payload) {
      // console.log(payload.data)
      state.list = payload.data.books
      state.total = payload.data.total
    }
  },

  actions: {
    getList({ commit }) {
      return api.get()
        .then(res => commit('SET_LIST', res))
        .catch(console.err) // eslint-disable-line no-console
    },

    create(context, payload) {
      return api.post('', payload)
        .catch(console.err) // eslint-disable-line no-console
    },

    update(context, payload) {
      const { id } = payload
      if (payload.date) payload.date = moment(payload.date).format('YYYY-MM-DD')
      delete payload.id
      return api.put(`/${id}`, payload)
        .catch(console.err) // eslint-disable-line no-console
    },

    destroy(context, id) {
      return api.delete(`/${id}`)
        .catch(console.err) // eslint-disable-line no-console
    },

    filter({ commit }, params) {
      return api.get('', { params })
        .then(res => commit('SET_LIST', res))
        .catch(console.err) // eslint-disable-line no-console
    },
  },
})
