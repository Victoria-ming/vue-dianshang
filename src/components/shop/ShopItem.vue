<template>
    <div>
        <van-nav-bar title="黑马程序员.vant" left-text="返回" left-arrow @click-left="onClickLeft"/>

        <div class="one">
          <!-- 轮播图 -->
            <div class="swiper">
                <van-swipe :autoplay="2000" indicator-color="blue">
                  <van-swipe-item   v-for="(image, index) in images" :key="index">
                      <img :src="image.src" style="height: auto;width: 200px;"/>
                  </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 添加 -->
            <div class="goodInfo">
                <div class="goodInfo-title">
                  {{this.shopitem.title}}
                </div>
                <p>
                  市场价：<span>￥{{this.shopitem.market_price}}</span>
                  销售价: <em>￥{{this.shopitem.sell_price}}</em>
                </p>
                <div class="count">
                    <span>购买数量：</span>
                    <van-stepper v-model="value" integer />
                </div>
                <div class="btns">
                  <van-button type="info">立即购买</van-button>
                  <van-button type="danger" @click="addCar">加入购物车</van-button>
                </div>

            </div>
            <!-- 参数 -->

            <div class="goodParams">
                <div class="title">商品参数</div>
                <div class="body">
                  <p>商品货号：{{this.shopitem.goods_no}}</p>
                  <p>库存情况：{{this.shopitem.stock_quantity}}</p>
                  <p>上架时间：{{this.shopitem.add_time | dateFormat}}</p>
                </div>
                <div class="btns">
                  <van-button plain type="info" size="large" @click="jieshao(paramsId)">图文介绍</van-button>
                  <van-button plain type="danger" size="large">商品评论</van-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function () {
    return {
      // 商品的详情参数
      shopitem: [],
      // 轮播图图片的地址
      images: [],
      // 购买数量中的数值
      value: 1,
      // 当前图片的id值，可以传入到图文介绍和购物车中
      paramsId: 0,
      // 购物车商品的信息
      shopNew: {}

    }
  },
  created () {
    this.getShopItem()
  },
  computed: {
    ...mapState(['sum', 'shopId'])
  },
  methods: {
    getShopItem: async function () {
      var url = window.location.href
      var id = url.split('?')[1]
      let { data: res } = await this.$http.get(`/api/goods/getinfo/` + id)
      // console.log(res)
      this.shopitem = res.message[0]
      console.log(this.shopitem)
      this.paramsId = res.message[0].id
      console.log(this.paramsId)
      this.showShop()
    },
    showShop: async function () {
      let{ data: res } = await this.$http.get(`/api/getthumimages/` + this.paramsId)
      console.log(res.message)
      this.images = res.message
    },

    onClickLeft () {
      this.$router.go(-1)
    },
    // 下拉更新数据
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    },
    // 加入购物车
    addCar: async function () {
      // this.$store.commit('add', this.value)
      // 获取购物车中商品的数据
      const { data: res } = await this.$http.get(`/api/goods/getshopcarlist/` + this.paramsId)
      // console.log(res.message[0])
      res.message[0].cou = this.value
      // 获取商品加入购物车时存入的数量
      this.shopNew = {
        cou: res.message[0].cou,
        id: res.message[0].id,
        sell_price: res.message[0].sell_price,
        thumb_path: res.message[0].thumb_path,
        title: res.message[0].title
      }
      console.log(this.shopNew)
      this.$store.commit('add', this.value)
      this.$store.commit('addshop', this.shopNew)
      this.$toast.success('成功加入')
    },
    // 商品介绍
    jieshao: function (id) {
      console.log(this.paramsId)
      this.$router.push('/goodsdesc?' + this.paramsId)
    }
  }
}
</script>

<style lang="less" scoped>
.one{
  padding: .15625rem
}
.swiper{
    height: 230px;
    border: 1px solid #ccc;
    border-radius: 3px;
}
.van-swipe{
    height: 200px;
    position: relative;
    overflow: hidden;
    img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
    }
}
.goodInfo{
    margin-top: 10px;
    padding: 15px;
    border-radius: 3px;
    border: 1px solid #ccc;
    .goodInfo-title{
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    }
     p {
          font-size: 14px;
          margin-top: 15px;
          margin-bottom: 10px;
          margin-left: 10px;
          color: #8f8f94;
              span{
              text-decoration: line-through;
              margin: 0 10px;
          }
              em{
                font-weight: 700;
                font-size: 16px;
                color: red;
                font-style: normal;
            }
      }
}
      .count{
        padding: 10px;
        span{
            font-size: 14px;
            color: #8f8f94;
        }
       .van-stepper{
           display: inline-block;
           vertical-align: middle;
           margin-left: 10px;
       }
    }
.van-button{
  margin-right: 10px;
  border-radius: 5px;
}
.goodParams{
    margin-top: 10px;
    padding: 15px;
    border-radius: 3px;
    border: 1px solid #ccc;
        .title{
        font-size: 17px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }
        .body{
        border-bottom: 1px solid #ccc;
        padding: 15px;
        p {
            font-size: 14px !important;
            margin: 10px 0;
            color: #8f8f94;
        }
    }
       .btns{
        margin-top: 10px;
        margin-bottom:50px;
    }
}

</style>
