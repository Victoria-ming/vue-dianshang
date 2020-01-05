<template>
  <div class="orderBox">
    <!-- 顶部信息 -->
    <van-nav-bar title="我的订单" left-text left-arrow @click-left="onClickLeft">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>

    <!-- 搜索框 -->
    <van-search placeholder="请输入搜索关键词" />

    <!-- 标签页 -->
    <van-row>
      <van-col span="22">
        <van-grid>
          <van-grid-item text="全部" />
          <van-grid-item text="待付款" />
          <van-grid-item text="待收货" />
          <van-grid-item text="已完成" />
        </van-grid>
      </van-col>
      <van-col span="2">
        <van-dropdown-menu>
          <van-dropdown-item>
            <div>
                <span v-for="(item, index) in TypeList" :key="index">{{item}}</span>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-col>
    </van-row>

    <!-- 商品列表 -->
    <van-cell v-for="item in orderList" :key="item.item_id">
        <div class="singleOrder">
            <div class="singleOrder-head">
                <van-icon name="chat-o" />
                <span class="shopName">{{item.shopName}}></span>
                <span class="sign">已签收 | </span>
                <van-icon class="delete" name="delete" />
            </div>
            <div class="singleOrder-context">
                <div>
                    <img :src="item.item_pic" alt="">
                </div>
                <div>
                    <p>{{item.item_title}}</p>
                </div>
            </div>
            <div class="singleOrder-foot">
                <div>
                    <span class="count">共计{{item.itemCount}}件商品</span>
                    <span class="money">实付金额: ¥{{item.itemCount*item.item_price}}</span>
                </div>
            </div>
            <div class="singleOrder-click">
                <span class="see">看相似</span>
                <span class="pay">再次购买</span>
            </div>
        </div>
    </van-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '全部',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      orderList: [],
      TypeList: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getOrderList () {
      const res = await this.$http.get('/user/orders')
      //   console.log(res)
      this.orderList = res.data.data
      console.log(this.orderList)
    },
    async getTypeList () {
      const { data: res } = await this.$http.get('/user/type')
      //   console.log(res)
      this.TypeList = res
    }
  },
  created () {
    this.getOrderList()
    this.getTypeList()
  }
}
</script>

<style lang="less" scoped>
.orderBox {
    background: rgb(244, 244, 244)
}
.van-cell {
    width: 95%;
    margin: 0 auto;
    padding: 0;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.05);
    font-size: 15px;
}
.singleOrder {
    height: 200px;
}
.singleOrder-head {
    height: 30px;
    line-height: 30px;
    padding: 0 10px 0 10px;
    .shopName {
        margin-left: 8px;
        font-size: 20px;
    }
    .sign {
        margin-left: 210px;
        color: #ccc
    }
    .delete {
        margin-left: 8px
    }
}
.singleOrder-context {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding: 0 10px 0 10px;
    height: 75px;
    img {
        width: 75px;
        height: 75px;
        border-radius: 2px;
    }
    p {
        margin: 10px 0 0 20px;
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 50px;
    }
}
.singleOrder-foot {
    margin-top: 5px;
    padding-bottom: 5px;
    .count {
        margin-left: 190px;
        font-size: 12px;
        color: #ddd;
    }
    .money {
        margin-left: 5px
    }
    border-bottom: 1px solid #ccc;
}
.singleOrder-click {
    margin-top: 10px;
    padding-left: 175px;
    span {
        display: inline-block;
        height: 28px;
        width: 86px;
        text-align: center;
        line-height: 28px;
        font-size: 15px;
        margin-left: 10px;
        border-radius: 5px;
        font-weight: 200;
    }
    .see {
        border: .8px solid #ccc
    }
    .pay {
        color: red;
        border: .8px solid red;
    }
}
.van-dropdown-item {
    div {
        overflow: hidden;
        background: rgb(244, 244, 244);
        padding-bottom: 10px;
    }
    span {
        float: left;
        box-sizing: border-box;
        display: inline-block;
        width: 25%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 15px;
        font-size: 16px;
        text-align: center;
        line-height: 30px;
        margin-left: 6.6%;
        background: #fff;
        margin-top: 10px;
    }
}
</style>
