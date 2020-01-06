<template>
<div>
  <van-nav-bar title="黑马程序员.vat" left-text="返回" left-arrow right-text="添加" @click-right='hanldeRight' @click-left='hanldeLeft' class="bar"/>

<form action="/">
<!-- 输入框 -->
  <van-search
    v-model="history"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch(history)"
    @cancel="onCancel"
    class="search"
  />
</form>
<!-- 搜索历史 -->
<van-row gutter="20" style="" v-if='!searchResult'>
  <van-col span="8" style="font-size:18px;">搜索历史</van-col>
  <van-col span="8"></van-col>
  <van-icon @click="qingkong" name="delete"/>
  <div class="tagDiv" v-if="!(this.historyArr.length==0)">
    <van-tag v-for="(item,index) in historyArr" class="tag" :key="index" @click="xuanran(item)">{{item}}</van-tag>
  </div>
  <div class="lishi" v-else>
    <van-divider>暂无搜索历史</van-divider>
  </div>
</van-row>

<!-- 搜索结果 -->
<div v-if="searchResult">
<van-swipe-cell v-for="item in searchList"  :key="item.id" >
  <van-cell :border="false" :title="item.name" :value="item.ctime | dateFormat"  />
  <template slot="right">
    <van-button square type="danger" text="删除" class="deleteButton" @click="deleteListById(item.id)"/>
  </template>
</van-swipe-cell>
</div>

<!-- 足部 -->
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
      active: 4,
      value: '',
      searchList: [],
      searchResult: false,
      loading: true,
      history: '',
      historyArr: [],
      that: ''
    }
  },
  created () {

  },

  computed: {
    ...mapGetters(['sum'])

  },
  methods: {
    onSearch (history) {
      if (history.trim() === '') {
        this.$toast('请输入搜索内容')
      } else {
        this.getSearch()
        this.searchResult = true
        this.historyArr.push(history)
      }

      // console.log(this.historyArr)
    },
    isLogin () {
      if (!window.sessionStorage.getItem('token')) {
        this.$router.push('/register')
      } else {
        this.$router.push('/user')
      }
    },
    xuanran (item) {
      this.history = item
    },
    // shuru () {
    //   var fn = function () {
    //     var that = this
    //     var timeout = setInterval(() => {
    //       console.log(1)
    //       that.onSearch()
    //     }, 1000)
    //     if (timeout) { clearInterval(timeout) }
    //   }
    //   fn()
    // },
    onCancel () {
      this.searchResult = false
    },
    hanldeLeft () {
      this.$router.push('/home')
    },
    hanldeRight () {
      this.$router.push('/shangpin')
    },
    async getSearch () {
      let { data: res } = await this.$http.get('api/getprodlist')
      // console.log(res)
      this.searchList = res.message
      // console.log(this.searchList)
    },
    async deleteListById (id) {
      // console.log(id)
      this.$dialog.confirm({
        message: '请问是否删除数据'
      }).then(async () => {
        await this.$http.get(`api/delproduct/${id}`)
        this.getSearch()
      }).catch(() => {})
    },
    qingkong () {
      this.historyArr = []
    }
  }
}

document.body.addEventListener('touchmove', function (e) {
  e.preventDefault()
}, { passive: false })

</script>

<style lang="less" scoped>
 .van-search {
     margin-bottom: 10px;
 }
 .van-icon-delete{
     position: absolute;
     top: 110px;
     right: 11px;
     font-size: 20px;
 }
 .deleteButton{
   top:-34px;
   left: 1px;
   font-size: 12px;
 }
 .tagDiv{
   position: absolute;
       top: 92px;
    left: 0px;
   margin-left:10px;
 }
 .tag{
   margin-left: 10px
 }
.lishi{
  position: absolute;
  top: 145px;
  left: 0px;
  font-size: 14px;
  width:100%;
}
</style>
