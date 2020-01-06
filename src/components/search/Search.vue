<template>
<div>
  <van-nav-bar title="黑马程序员.vat" left-text="返回" left-arrow right-text="添加" @click-right='hanldeRight' @click-left='hanldeLeft' class="bar"/>

    <form action="/">
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
            <van-tag v-for="(item,index) in historyArr" class="tag" :key="index">{{item}}</van-tag>
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

        <van-tabbar v-model="active">
                <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
                <van-tabbar-item icon="orders-o" to="/classify">分类</van-tabbar-item>
                <van-tabbar-item icon="contact"  to="/userinfo">会员</van-tabbar-item>
                <van-tabbar-item icon="cart-o" :info='sum' to="/cat">购物车</van-tabbar-item>
                <van-tabbar-item icon="search"  to="/search" route>搜索</van-tabbar-item>
        </van-tabbar>
     </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      active: 4,
      value: '',
      searchList: [],
      searchResult: false,
      loading: true,
      history: '',
      historyArr: []
    }
  },
  created () {
    this.getSearch()
  },
  computed: {
    ...mapState(['sum'])
  },
  methods: {
    onSearch (history) {
      this.searchResult = true
      this.historyArr.push(history)
      console.log(this.historyArr)
    },
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
      console.log(res)
      this.searchList = res.message
      console.log(this.searchList)
    },
    async deleteListById (id) {
      console.log(id)
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
   font-size: 12px
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
