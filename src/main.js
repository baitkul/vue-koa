import Vue from 'vue'
import ElementUI from 'element-ui'
import localeRu from 'element-ui/lib/locale/lang/ru-RU'
import 'element-ui/lib/theme-chalk/index.css'
import 'tachyons/css/tachyons.min.css'

// Local imports
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale: localeRu, size: 'small' })

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
