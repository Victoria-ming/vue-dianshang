<template>
    <div>
      <van-nav-bar title="黑马程序员.vat" left-text="返回" left-arrow @click-left='hanldeLeft'/>
      <div>
      <van-cell-group>
  <van-field v-model="shopName" placeholder="请输入商品名称" />
    </van-cell-group>
<van-button type="info" class="buttonClass" @click="addShop">添加商品</van-button>
</div>
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
      shopName: '',
      active: ''
    }
  },
  methods: {
    hanldeLeft () {
      this.$router.push('/Search')
    },
    async addShop () {
      var data = this.shopName
      let res = await this.$http.post('api/addproduct', `name=${data}`)

      console.log(res.data.status, data)
      if (res.data.status === 1) {
        this.$notify({ type: 'danger', message: '添加失败', duration: 500 })
      } else {
        this.$notify({ type: 'success', message: '添加成功', duration: 500 })
        this.shopName = ''
      }
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
 .buttonClass{
     width: 96%;
     margin-top:20px;
     margin-left:2%;
     background-color: #1989FA;
 }

</style>
