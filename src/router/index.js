import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'

import Search from '../components/Search.vue'
import Cat from '../components/Cat.vue'
import Member from '../components/Member.vue'
import ShopList from '../components/shop/ShopList.vue'
import ShopItem from '../components/shop/ShopItem.vue'
import Params from '../components/shop/Params.vue'

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
      { path: '/goodsdesc', component: Params }
    ] },
  { path: '/search', component: Search },
  { path: '/cat', component: Cat },
  { path: '/member', component: Member }

]

const router = new VueRouter({
  routes
})

export default router
