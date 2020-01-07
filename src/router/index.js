import Vue from 'vue'
import VueRouter from 'vue-router'
const Register = () => import(/* webpackChunkName:"Register_Home_Welcome" */ '../components/Register.vue')
const Home = () => import(/* webpackChunkName:"Register_Home_Welcome" */ '../components/Home.vue')
const Welcome = () => import(/* webpackChunkName:"Register_Home_Welcome" */ '../components/Welcome.vue')

const UserInfo = () => import(/* webpackChunkName:"UserInfo_Order_User_Sale" */ '../components/user/UserInfo.vue')
const Order = () => import(/* webpackChunkName:"UserInfo_Order_User_Sale" */ '../components/user/Order.vue')
const User = () => import(/* webpackChunkName:"UserInfo_Order_User_Sale" */ '../components/user/User.vue')
const Sale = () => import(/* webpackChunkName:"UserInfo_Order_User_Sale" */ '../components/user/Sale.vue')
const Cart = () => import(/* webpackChunkName:"Cart_ShopList_ShopItem_Params_Pinlun" */ '../components/Cart.vue')

const ShopList = () => import(/* webpackChunkName:"Cart_ShopList_ShopItem_Params_Pinlun" */ '../components/shop/ShopList.vue')
const ShopItem = () => import(/* webpackChunkName:"Cart_ShopList_ShopItem_Params_Pinlun" */ '../components/shop/ShopItem.vue')
const Params = () => import(/* webpackChunkName:"Cart_ShopList_ShopItem_Params_Pinlun" */ '../components/shop/Params.vue')
const Pinlun = () => import(/* webpackChunkName:"Cart_ShopList_ShopItem_Params_Pinlun" */ '../components/shop/pinlun.vue')
const Piclist = () => import(/* webpackChunkName:"Piclist_ItemPic" */ '../components/photo/piclist.vue')
const ItemPic = () => import(/* webpackChunkName:"Piclist_ItemPic" */ '../components/photo/itemPic.vue')
const Search = () => import(/* webpackChunkName:"Search_Shangpin_Pinglun" */ '../components/search/Search.vue')
const Shangpin = () => import(/* webpackChunkName:"Search_Shangpin_Pinglun" */ '../components/search/shangpin.vue')
const Pinglun = () => import(/* webpackChunkName:"Search_Shangpin_Pinglun" */ '../components/search/pingLun.vue')
const News = () => import(/* webpackChunkName:"News_Details" */ '../components/news/News.vue')
const Details = () => import(/* webpackChunkName:"News_Details" */ '../components/news/details.vue')
const Contact = () => import(/* webpackChunkName:"Contact" */ '../components/Contact.vue')
const Vedio = () => import(/* webpackChunkName:"Vedio" */ '../components/Vedio.vue')
const Classify = () => import(/* webpackChunkName:"Classify" */ '../components/class/ClassList.vue')

// import Register from '../components/Register.vue'
// import Home from '../components/Home.vue'
// import Welcome from '../components/Welcome.vue'

// import Cart from '../components/Cart.vue'
// // 会员
// import UserInfo from '../components/user/UserInfo.vue'
// import Order from '../components/user/Order.vue'
// import User from '../components/user/User.vue'
// import Sale from '../components/user/Sale.vue'
// // 商品
// import ShopList from '../components/shop/ShopList.vue'
// import ShopItem from '../components/shop/ShopItem.vue'
// import Params from '../components/shop/Params.vue'
// import Pinlun from '../components/shop/pinlun.vue'

// // 图片
// import Piclist from '../components/photo/piclist.vue'
// import ItemPic from '../components/photo/itemPic.vue'

// // 搜索
// import Search from '../components/search/Search.vue'
// import Shangpin from '../components/search/shangpin.vue'
// import Pinglun from '../components/search/pingLun.vue'

// // 新闻
// import News from '../components/news/News.vue'
// import Details from '../components/news/details.vue'

// // 分类
// import Classify from '../components/class/ClassList.vue'

// // 联系我们
// import Contact from '../components/Contact.vue'

// // 视频专区
// import Vedio from '../components/Vedio.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
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
      { path: '/thumimages', component: ItemPic },
      { path: '/pinlun', component: Pinlun },
      { path: '/vedio', component: Vedio }

    ] },
  { path: '/search', component: Search },
  { path: '/pingLun', component: Pinglun },
  { path: '/Shangpin', component: Shangpin },
  { path: '/cat', component: Cart },
  { path: '/classlist', component: Classify },
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

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  const tokenStr = window.sessionStorage.getItem('token')
  if (tokenStr) {
    return next()
  } else {
    if (to.path === '/userinfo' || to.path === '/order' || to.path === '/sale' || to.path === '/cat') {
      return next('/register')
    }
    next()
  }
})
export default router
