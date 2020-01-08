import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'
import './libs/rem'
import './assets/css/global.css'
import './assets/font/iconfont.js'
import store from './store.js'
import './plugins/vant.js'
import './mockjs/index.js'
// 引入预验证
import VccValidate from 'vcc-validate'
// 导入 NProgress 包对应的JS和CSS
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'q8NjyvckoGUEiPYKcvE1xyIDBIjo2rgu'
})
Vue.use(VccValidate)

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios
axios.interceptors.request.use(config => {
  // NProgress.start()
  // Do something before request is sent
  NProgress.start()

  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
axios.interceptors.response.use(config => {
  // console.log(config)
  NProgress.done()
  // 在最后必须 return config
  return config
})
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
