<template>
  <div>
    <van-nav-bar
      fixed="fixed"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      title="黑马程序员.vat"
    />
    <div class="news">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-card
          @click="getListdetails(item.id)"
          v-for="item in list"
          :key="item.id"
          :title="item.title"
          :thumb="item.img_url"
        >
          <div slot="num" class="num">点击次数：{{item.click}}</div>
          <div slot="price" class="price">发表时间：{{item.add_time|formatDate}}</div>
        </van-card>
        <van-loading size="24px" type="spinner" color="#1989fa">加载中...</van-loading>
      </van-pull-refresh>
    </div>
     <van-tabbar v-model="active">
               <van-tabbar-item  to="/home">
                    <div class="tubiao">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shouye"></use>
                        </svg>
                        <div>首页</div>
                    </div>
               </van-tabbar-item>
               <van-tabbar-item  to="/classlist">
                    <div class="tubiao">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dingdan"></use>
                        </svg>
                        <div>分类</div>
                    </div>
                </van-tabbar-item>
               <van-tabbar-item @click="isLogin">
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
import { mapGetters } from 'vuex'

import { formatDate } from '../../assets/js/date.js'
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      isLoading: false,
      active: 0,
      fixed: true
    }
  },
  filters: {
    formatDate (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  created () {
    this.getList()
  },

  methods: {
    isLogin () {
      if (!window.sessionStorage.getItem('token')) {
        this.$router.push('/register')
      } else {
        this.$router.push('/user')
      }
    },
    getList () {
      setTimeout(async () => {
        const { data: res } = await this.$http.get('api/getnewslist')
        // console.log(res)
        if (res.status !== 0) {
          return this.$toast('服务器异常')
        }
        this.list = res.message

        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    },
    onRefresh () {
      this.getList()
    },
    onClickLeft () {
      this.$router.push('/home')
    },
    getListdetails (id) {
      this.$router.push('/details/' + id)
      console.log()
    }
  },
  computed: {
    ...mapGetters(['sum'])

  }
}
</script>

<style lang="less" scoped>
.news {
  margin: 50px 0 15px 0;
  .van-card {
    margin: 0px 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #cccccc;
  }
  .van-card__title {
    font-size: 18px;
    // height: 17px;
    font-weight: 900;
    line-height: 40px;
    color: #000;
  }
  .van-card__desc {
    line-height: 0px;
  }
  .num,
  .price {
    color: #1989fa;
    line-height: 40px;
  }

  .van-card__content {
    min-height: 0;
  }
  .van-card__thumb {
    width: 50px;
    height: auto;
  }
  .van-loading {
    text-align: center;
  }
}
</style>
