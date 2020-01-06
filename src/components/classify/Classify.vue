<template>
    <div>

        <van-tabbar v-model="active">
               <van-tabbar-item  to="/home">
                    <div class="tubiao">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shouye"></use>
                        </svg>
                        <div>首页</div>
                    </div>
               </van-tabbar-item>
               <van-tabbar-item  to="/classify">
                    <div class="tubiao">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dingdan"></use>
                        </svg>
                        <div>分类</div>
                    </div>
                </van-tabbar-item>
               <van-tabbar-item   to="/userinfo">
                    <div class="tubiao">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wode"></use>
                        </svg>
                        <div>会员</div>
                    </div>
               </van-tabbar-item>
               <van-tabbar-item icon="cart-o" :info='sum' to="/cat">购物车</van-tabbar-item>
               <van-tabbar-item  to="/search" route>
                    <div class="tubiao">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-chazhao"></use>
                        </svg>
                        <div>搜索</div>
                    </div>
               </van-tabbar-item>
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
