<template>
     <div>
      <van-nav-bar title="黑马程序员.vat" left-text="返回" left-arrow @click-left='hanlde'/>
      <form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<van-row gutter="20" style="">
  <van-col span="8" style="font-size:18px;">搜索历史</van-col>
  <van-col span="8"></van-col>
       <van-icon name="delete"/>
</van-row>
     <van-tabbar v-model="active">
               <van-tabbar-item icon="wap-home"  to="/home">首页</van-tabbar-item>
               <van-tabbar-item icon="contact" to="/member">会员</van-tabbar-item>
               <van-tabbar-item icon="cart-o" info="0" to="/cat">购物车</van-tabbar-item>
               <van-tabbar-item icon="search" name="1">搜索</van-tabbar-item>
    </van-tabbar>
     </div>
</template>

<script>
export default {
  data () {
    return {
      active: '1',
      value: ''
    }
  },
  methods: {
    onSearch () {

    },
    onCancel () {

    },
    hanlde () {
      this.$router.push('/home')
    }
  }
}
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

</style>
