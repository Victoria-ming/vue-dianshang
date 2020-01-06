/* eslint-disable no-undef */
<template>
  <div>
    <van-nav-bar title="黑马程序员.vat" left-text="返回" left-arrow @click-left="hanlde" />
    <div v-if="googslist.lenght === 0">
      <van-image
        round
        width="130px"
        height="130px"
        src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
      />
      <van-row type="flex" justify="space-between" style="margin:20px 0  20px">
        <van-col span="5"></van-col>
        <van-col span="10" style="font-size:20px;color: rgba(0,0,0,.4);text-align: center">购物车空空如也</van-col>
        <van-col span="5"></van-col>
      </van-row>
      <van-button type="info" @click="logout">去逛逛</van-button>
    </div>

    <!-- 下拉刷新 -->
    <van-pull-refresh v-else v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <div class="van-pull-refresh__track" style="transition: all 300ms ease 0s;">
        <div class="van-pull-refresh__head"></div>
        <div style="min-height: 200px;" class="cart">
          <!-- 单元格实现左滑出现删除 -->
          <van-swipe-cell  v-for="(item,i) in googslist" :key="i">
            <!-- card结构 -->
            <van-card :num="item.cou" :price="item.sell_price" :title="item.title"  :thumb="item.thumb_path">
                <div slot="footer">
                    <van-stepper v-model="item.cou" integer
                    @plus="plus(item.cou,item.sell_price)" @minus="minus(item.cou,item.sell_price)"/>
                </div>
            </van-card>

            <template slot="right">
              <van-button class="delete" square type="danger" text="删除" @click="remove(item.id)" />
            </template>
          </van-swipe-cell>
        </div>
      </div>
    </van-pull-refresh>

    <van-submit-bar :loading="loading" :price="price*100" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      checked: '',
      loading: false,
      count: 1,
      isLoading: false,
      googslist: [],
      // 购物车中的总价
      price: 0,
      // 购物车上的数值
      result: 0
    }
  },
  created () {
    this.list()
  },
  computed: {
    ...mapState(['sum', 'shopId', 'ids', 'shopNews'])
  },
  methods: {
    onSubmit () {
      this.loading = !this.loading
    },
    // 点击增加按钮触发
    plus: function (cou, price) {
      this.price += price
      this.result++
      this.$store.commit('change', this.result)
      console.log(this.result)
    },
    // 点击减少按钮触发
    minus: function (cou, price) {
      this.price -= price
      this.result--
      this.$store.commit('change', this.result)
    },
    logout () {
      this.$router.push('/shop')
    },
    hanlde () {
      this.$router.go(-1)
    },
    list () {
      this.googslist = this.shopNews
      this.googslist.forEach(item => {
        console.log(item.cou + '---------------------' + item.sell_price)
        this.price += item.cou * item.sell_price
        this.result += item.cou
      })
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    },

    remove: function (id) {
      const obj = this.googslist.some(item =>
        item.id === id
      )
      this.googslist = this.googslist.splice(obj, 1)
      this.$store.commit('change1', this.googslist)
    }

  }
}
</script>

<style lang="less" scoped>
.van-image--round {
  display: block !important;
  margin: 20px auto;
}
.van-button--info {
  display: block !important;
  margin: 0 auto !important;
  height: 30px !important;
}

.delete {
  height: 200px;
}

.van-button__text {
  display: block;
  line-height: 30px;
  text-align: center;
}
.cart{
  margin-bottom: 50px;
}
</style>
