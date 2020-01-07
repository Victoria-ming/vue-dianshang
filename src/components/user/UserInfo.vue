<template>
  <div class="UserInfoBox">
    <!-- 顶部信息 -->
    <van-nav-bar title="会员中心" left-text left-arrow @click-left="onClickLeft">
      <van-icon name="ellipsis" slot="right" @click="confirm"/>
    </van-nav-bar>

    <!-- 用户信息 -->
    <div class="userInfo">
      <div class="userInfo-content">
        <div class="userPotho">
          <img :src="userInfo.image" alt />
        </div>
        <div class="userMessage">
          <div class="userMessage-top">
            <span>{{userInfo.id}}</span>
            <van-icon name="edit" @click="editUser" />
            <span class="userMessage-jiangpai">
              <i></i>
              {{userInfo.jiangpai}}
            </span>
          </div>
          <div class="userMessage-center">
            <span>用户名： {{userInfo.username}}</span>
          </div>
          <div class="userMessage-bottom">
            <span>京享值{{userInfo.jd}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 导航信息 -->
    <van-grid>
      <van-grid-item icon="bill-o" text="待付款" @click="allOrder(2)" />
      <van-grid-item icon="logistics" text="待收货" @click="allOrder(1)" />
      <van-grid-item icon="after-sale" text="退换/售后" @click="sale" />
      <van-grid-item icon="orders-o" text="全部订单" @click="allOrder(0)" />
    </van-grid>

    <!-- 内容 -->
    <div class="content">
      <div class="content-left">
        <p>5</p>
        <span>我的收藏</span>
      </div>
      <div class="content-right">
        <p>0</p>
        <span>我的足迹</span>
      </div>
    </div>

    <!-- 弹出窗 -->
    <van-dialog v-model="show" title="修改用户信息" show-cancel-button>
      <van-field v-model="userInfo.id" :disabled="true" />
      <van-field v-model="userInfo.username" />
    </van-dialog>

    <van-dialog v-model="show1" title="是否退出" show-cancel-button @confirm="loginout">

    </van-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},

      // 弹出框变量
      show: false,
      show1: false
    }
  },
  // 0待付款， 1待收货  2已完成
  methods: {
    allOrder (index) {
      this.$router.push('/order')
      window.index = index
    },
    // 返回上一页面
    onClickLeft () {
      this.$router.go(-1)
    },
    async getUserinfo () {
      const { data: res } = await this.$http.post('/user')
      // console.log(res)
      this.userInfo = res
    },
    // 修改用户信息
    editUser () {
      this.show = true
    },
    confirm () {
      this.show1 = true
    },
    loginout () {
      window.sessionStorage.clear()
      this.$router.push('/register')
      this.$toast.success('退出成功')
    },
    // 售后路由
    sale () {
      this.$router.push('/sale')
    }
  },
  created () {
    this.getUserinfo()
  }
}
</script>

<style lang="less" scoped>
.UserInfoBox {
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
  border-top: 10px solid rgb(247, 247, 247);
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
.userMessage {
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translate(0, -50%);
}
.userMessage-top {
  span {
    color: #fff;
    margin: 0 5px 0 5px;
  }
}
.userMessage-center {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 5px;
  span {
    margin: 0 5px 0 5px;
  }
}
.userMessage-bottom {
  margin-top: 5px;
  span {
    margin: 0 5px 0 5px;
    display: inline-block;
    max-width: 150px;
    height: 16px;
    line-height: 16px;
    font-size: 10px;
    color: #fff;
    background: #c8483f;
    padding: 0 8px;
    border-radius: 10px;
  }
}
.userMessage-jiangpai {
  position: relative;
  left: 10px;
  margin: 0 5px 0 13px;
  padding: 0 6px 0 10px;
  height: 16px;
  line-height: 16px;
  vertical-align: middle;
  border-radius: 0 12px 12px 0;
  background-color: #c8483f;
  font-size: 10px;
  color: #fff;
  i {
    position: absolute;
    width: 20px;
    height: 20px;
    left: -10px;
    top: 48%;
    margin-top: -10px;
    background: url(//wq.360buyimg.com/fd/base/img/my/icon_vip.png) no-repeat 0
      0;
    background-size: 100px 20px;
    content: '';
  }
}
.content {
  height: 100%;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  background: #fff;
}
.content-left {
  float: left;
  width: 50%;
}
.content-right {
  float: left;
  width: 50%;
}
</style>
