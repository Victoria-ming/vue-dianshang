import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

export default new Vuex.Store({
  state: {
    shopId: '',
    // 购物车上的数值
    sum: 0
  },
  mutations: {
    add: function (state, value) {
      state.sum += value
      console.log(state.sum)
    },
    itemId (state, id) {
      state.shopId = id
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {
  }
})
