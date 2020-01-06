import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'

import Cart from '../components/Cart.vue'
// 会员
import UserInfo from '../components/user/UserInfo.vue'
import Order from '../components/user/Order.vue'
import User from '../components/user/User.vue'
import Sale from '../components/user/Sale.vue'
// 商品
import ShopList from '../components/shop/ShopList.vue'
import ShopItem from '../components/shop/ShopItem.vue'
import Params from '../components/shop/Params.vue'
// 图片
import Piclist from '../components/photo/piclist.vue'
import ItemPic from '../components/photo/itemPic.vue'

// 搜索
import Search from '../components/search/Search.vue'
import Shangpin from '../components/search/shangpin.vue'
import Pinglun from '../components/search/pingLun.vue'

// 新闻
import News from '../components/news/News.vue'
import Details from '../components/news/details.vue'

// 分类
import Classify from '../components/classify/Classify.vue'

// 联系我们
import Contact from '../components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/register' },
  { path: '/register', component: Register },
  { path: '/home',
    component: Home,
    children: [
      { path: '/', redirect: '/welcome' },
      { path: '/welcome', component: Welcome },
      { path: '/shop', component: ShopList },
      { path: '/shopitem', component: ShopItem },
      { path: '/goodsdesc', component: Params },
      { path: '/piclist', component: Piclist },
      { path: '/thumimages', component: ItemPic }
    ] },
  { path: '/search', component: Search },
  { path: '/pingLun', component: Pinglun },
  { path: '/Shangpin', component: Shangpin },
  { path: '/cat', component: Cart },
  { path: '/classify', component: Classify },
  { path: '/news', component: News },
  { path: '/details/:id', component: Details },
  { path: '/contact', component: Contact },

  { path: '/user',
    component: User,
    redirect: '/userinfo',
    children: [
      { path: '/userinfo', component: UserInfo },
      { path: '/order', component: Order },
      { path: '/sale', component: Sale }
    ] }

]

const router = new VueRouter({
  routes
})

export default router
