import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import './libs/rem'
import './assets/css/global.css'
import store from './store.js'
import './plugins/vant.js'

import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(Vant)

Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
