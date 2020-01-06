import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

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
    change1: function (state, array) {
      state.shopNews = array
    },
    addshop: function (state, news) {
      // 加入购物车的商品信息对象加入一个数组中
      if (state.shopNews.length < 1) {
        state.shopNews.push(news)
        state.ids.push(news.id)
      } else {
        state.shopNews.forEach(item => {
          if (item.id === news.id) {
            console.log(item)
            return state.shopNews
          } else {
            state.shopNews.push(news)
            state.ids.push(news.id)
          }
        })
      }
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
  },
  plugins: [createPersistedState()]
})
