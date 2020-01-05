<template>
    <div>
      <router-view/>

      <van-tabbar v-model="active">
               <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
               <van-tabbar-item icon="contact"  to="/member">会员</van-tabbar-item>
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

      active: 0
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

.van-swipe{
    height: 200px;
}
img{
    width: 80px;
    height: 80px;
}
.van-tabbar--fixed {
    height: 60px;
   box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}

</style>
