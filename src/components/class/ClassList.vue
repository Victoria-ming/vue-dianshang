<template>
  <div>
    <!-- 顶部搜索框 -->
    <div class="nav_top">
      <van-icon name="arrow-left" size="18px" @click="goback" />
      <van-search @focus="search" v-model="value" placeholder="惠普游戏本" show-action shape="round" @search="onSearch">
      </van-search>
    </div>

    <div class="container">
      <!-- 左侧tab栏 -->
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            active-color
            :title="item.title"
            v-for="item in tabslist"
            :key="item.id"
            @click="Rightlist(item.id)"
          />
        </van-sidebar>
      </div>
      <!-- 右侧内容区 -->
      <div class="right">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list v-for="item in rightConent" :key="item.id">
            <!-- 标题 -->
            <van-cell :title="item.title" />
            <!-- 宫格图片 -->
            <van-grid :column-num="3">
              <van-grid-item v-for="t in item.children" :key="t.id">
                <van-image :src="t.img_url" lazy-load />
                <span class="pic_title">{{t.pic_name}}</span>
              </van-grid-item>
            </van-grid>
          </van-list>
        </van-pull-refresh>
      </div>
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

export default {
  data () {
    return {
      active: 1,
      tabslist: [], // 左侧tab栏的数据
      value: '', // 搜索框的数据绑定
      activeKey: '', // 侧边栏id
      // 右侧内容区
      rightConent: [],
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['sum'])

  },
  methods: {
    isLogin () {
      if (!window.sessionStorage.getItem('token')) {
        this.$router.push('/register')
      } else {
        this.$router.push('/user')
      }
    },
    // 顶部搜索
    onSearch () {},
    goback () {
      this.$router.go(-1)
    },
    async gettabstitle () {
      const { data: res } = await this.$http.get('/Tabttitle')
      if (res.status !== 0) return
      this.tabslist = res.data
      console.log(res)
    },
    // 点击tab事件
    Rightlist (id) {
      this.getRightlist(id)
    },
    // 获取右侧的页面列表
    async getRightlist (id) {
      if (!id) {
        id = 1
      }
      const { data: res } = await this.$http.get(`/item/content/${id}`)
      console.log(res)
      if (res.status !== 0) return
      this.rightConent = res.data
    },
    onRefresh () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    // 输入框获得焦点事件
    search () {
      this.$router.push('/search')
    }
  },
  created () {
    // 获取左侧tab标题
    this.gettabstitle()
    // 获取有侧对用内容
    this.getRightlist()
  }
}
</script>
<style lang='less' scoped>
.nav_top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0 10px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid #aaa;
  background-color: #fff;
  .van-search {
    flex: 1;
    //   padding-left: 25px;
  }
}
.van-col--6 {
  margin-top: 55px;
}
.van-col--18 {
  box-sizing: border-box;
  margin-top: 55px;
  margin-bottom: 60px;
}
/deep/.van-sidebar-item--select {
  color: #323233;
  font-weight: 500;
  background-color: #fff;
  border: none;
}
/deep/[data-v-6eb384ff] .van-sidebar-item--select {
  color: #e93b3d;
  font-weight: 500;
  background-color: #fff;
  border: none;
}
.van-sidebar-item {
  font-size: 16px;
  padding-top: 15px;
  padding-right: 5px;
  padding-bottom: 15px;
}
.van-cell {
  font-size: 16px;
  font-weight: 700;
}
.van-image {
  width: 100%;
  height: 100%;
}
.pic_title {
  font-size: 14px;
}
.container {
  position: relative;
  top: 55px;
  // margin-top: 55px;
  height: 620px;
  width: 100%;
  display: flex;
  .left {
    flex: 30%;
    overflow: auto;
  }
  .right {
    flex: 70%;
    overflow: auto;
  }
  .left::-webkit-scrollbar {
    display: none;
  }
  .right::-webkit-scrollbar {
    display: none;
  }
}
</style>
