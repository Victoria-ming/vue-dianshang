<template>
    <div>
       <van-nav-bar title="黑马程序员.vant" left-text="返回" left-arrow @click-left="onClickLeft"/>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">

        <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad" >
            <van-cell v-for="(item, index) in shoplist" :key="index" @click="showShop(item.id)">
                <van-image  :src="item.img_url" lazy-load/>
                <p>{{item.title}}</p>
                <div class="bottom_box">
                    <div>
                        <span class="one">￥{{item.market_price}}</span>
                        <s>￥{{item.sell_price}}</s>
                    </div>
                    <div class="hot">
                        <span>热卖中</span>
                        <span>剩{{item.stock_quantity}}件</span>
                    </div>
                </div>
                <!-- 使用 title 插槽来自定义标题 -->
            </van-cell>
        </van-list>
        </van-pull-refresh>

    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {

  data: function () {
    return {
      shoplist: [],
      isLoading: false,
      loading: false,
      finished: false
    }
  },
  created () {
    this.getShopList()
  },
  computed: {
    ...mapState(['sum', 'shopId'])

  },
  methods: {

    getShopList: async function (context) {
      let { data: res } = await this.$http.get('/api/getgoods?pageindex=1')
      console.log(res)
      this.shoplist = res.message
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
    // 上拉更新数据
    onLoad () {
      // 异步更新数据
      // setTimeout(() => {
      //    for (let i = 0; i < 10; i++) {
      //      this.shoplist.push(this.shoplist.length + 1)
      //    }
      //    // 加载状态结束
      //    this.loading = false
      //    // 数据全部加载完成
      //    if (this.list.length >= 40) {
      //      this.finished = true
      //    }
      //   }, 500)
    },
    showShop (id) {
      console.log(id)
      this.$store.commit('itemId', id)
      this.$router.push('/shopitem?' + id)
    }
  }
}

</script>
<style lang="less" scoped>
.van-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: .078125rem .15625rem;
        .van-cell {
        position: relative;
        display: flex;
        box-sizing: border-box;
        overflow: hidden;
        color: #323233;
        font-size: .21875rem;
        line-height: .375rem;
        background-color: #fff;
        width: 48%;
        border: 1px solid #ccc;
        margin: .15625rem 0;
        padding: 0;
        align-content: space-between;
            .van-image {

            position: relative;
            display: inline-block;
            padding: .15625rem;
            min-height: 2.8125rem;
        };
        p{
            font-size: .21875rem;
            color: #000;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            line-clamp: 2;
            padding: .0625rem .15625rem;
            height: .765625rem;
        }
    }
}
.bottom_box{
    box-sizing: border-box;
    width: 100%;
    background: #eee;
    padding: .078125rem;
        &:first-child {
        text-align: left;
        padding: .46875rem;

    };
        &:nth-child(2) {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            padding: 0 10px;
        }
        .one{
            font-size: 16px;
            color: red;
            margin-right: 15px;
        }
        s {
             text-decoration: line-through;
        }
}
        .hot{
        display: flex;
        justify-content: space-between

        }
</style>
