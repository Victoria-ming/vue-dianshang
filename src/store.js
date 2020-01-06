import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

export default new Vuex.Store({
  state: {
    shopId: '',
    // 传入购物车中的id
    ids: [],
    // 购物车上的数值
    sum: 0,
    // 传入购物车的数据对象的集合
    shopNews: []
  },
  mutations: {
    add: function (state, value) {
      state.sum += value
    },
    change: function (state, value) {
      state.sum = value
    },
    addshop: function (state, news) {
      // 加入购物车的商品信息对象加入一个数组中
      state.shopNews.push(news)
      console.log(state.shopNews)
      state.ids.push(news.id)
      console.log(state.ids)
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
