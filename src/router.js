import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ErrorPage from './views/Error.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/*',
      name: '404',
      component: ErrorPage,
    },
  ]
})
