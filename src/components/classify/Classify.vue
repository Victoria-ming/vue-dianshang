<template>
    <div>

        <van-tabbar v-model="active">
               <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
               <van-tabbar-item icon="orders-o" to="/classify">分类</van-tabbar-item>
               <van-tabbar-item icon="contact"  to="/userinfo">会员</van-tabbar-item>
               <van-tabbar-item icon="cart-o" :info='sum' to="/cat">购物车</van-tabbar-item>
               <van-tabbar-item icon="search"  to="/search" route>搜索</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {

      active: 1
    }
  },
  methods: {

  },
  computed: {
    ...mapState(['sum'])
  }
}
</script>
<style lang="less" scoped>

</style>
