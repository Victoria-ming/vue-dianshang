<template>
  <div class="UserInfoBox">
    <!-- 顶部信息 -->
    <van-nav-bar title="会员中心" left-text left-arrow @click-left="onClickLeft">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>

    <!-- 用户信息 -->
    <div class="userInfo">
      <div class="userInfo-content">
        <div class="userPotho">
          <img :src="userInfo.image" alt="">
        </div>
        <div class="userMessage"></div>
      </div>
    </div>

    <!-- 导航信息 -->
    <van-grid>
      <van-grid-item icon="bill-o" text="待付款" @click="allOrder"/>
      <van-grid-item icon="logistics" text="待收货" @click="allOrder"/>
      <van-grid-item icon="after-sale" text="退换/售后" />
      <van-grid-item icon="orders-o" text="全部订单" @click="allOrder" />
    </van-grid>

    <!-- 内容 -->
    <van-tabs line-height="0">
      <van-tab title="我的收藏">内容 1</van-tab>
      <van-tab title="我的足迹">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    allOrder () {
      this.$router.push('/order')
    },
    // 返回上一页面
    onClickLeft () {
      this.$router.go(-1)
    },
    async getUserinfo () {
      const { data: res } = await this.$http.post('/user')
      // console.log(res)
      this.userInfo = res
    }
  },
  created () {
    this.getUserinfo()
  }
}
</script>

<style lang="less" scoped>
.userBox {
  background: rgb(247, 247, 247);
  height: 100%;
}

.userInfo {
  height: 134px;
  background: rgb(247, 247, 247);
}
.van-grid {
  margin-top: 10px;
}
.van-tabs {
  border-top: 10px solid rgb(247, 247, 247)
}
.userInfo-content {
  position: relative;
  height: 100%;
  background: linear-gradient(90deg, #eb3c3c, #ff7459);
  border-radius: 0 0 20% 20%;
  .userPotho {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
    // transform: (0, -50%);
    height: 60px;
    width: 60px;
    img {
      height: 100%;
    }
  }
}
</style>
