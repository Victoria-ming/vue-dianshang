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
    // 传入购物车的数据对象的集合
    shopNews: []
  },
  mutations: {
    add: function (state, value) {
      state.sum += value
    },
    change: function (state, id, type) {
      if (type === 'plus') {
        state.shopNews.forEach(item => {
          if (item.id === id) {
            item.cou++
          }
        })
      } else if (type === 'minus') {
        state.shopNews.forEach(item => {
          if (item.id === id) {
            item.cou--
          }
        })
      }
    },
    remove: function (state, id) {
      const index = state.shopNews.findIndex(item => item.id === id)
      state.shopNews.splice(index, 1)
    },
    addshop: function (state, news) {
      // 加入购物车的商品信息对象加入一个数组中
      var flag = state.shopNews.some(item => {
        return item.id === news.id
      })
      if (flag) {
        var index = state.shopNews.findIndex(item => item.id === news.id)
        state.shopNews[index].cou += news.cou
      } else {
        state.shopNews.push(news)
      }
    },
    itemId (state, id) {
      state.shopId = id
    }
  },
  actions: {

  },
  getters: {
    // 购物车上的数值
    sum (state) {
      var all = 0
      state.shopNews.forEach(item => {
        all += item.cou
      })
      return all
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
