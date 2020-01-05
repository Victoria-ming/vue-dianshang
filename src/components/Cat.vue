<template>
    <div>
    <van-nav-bar title="黑马程序员.vat" left-text="返回" left-arrow @click-left='hanlde'/> 
    <van-image
  round
  width="130px"
  height="130px"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
    <van-row type="flex" justify="space-between" style="margin:20px 0  20px">
                   <van-col span="5"></van-col>
                   <van-col span="10" style="font-size:20px;color: rgba(0,0,0,.4);text-align: center">购物车空空如也</van-col>
                   <van-col span="5"></van-col>
        </van-row> 
<van-button type="info">去逛逛</van-button>   
<van-submit-bar
:loading= "loading"
  :price="0"
  button-text="提交订单"
  @submit="onSubmit"
 
/>
    </div>
 
</template>

<script>
export default {
data(){
    return{
        checked:'',
        loading:false
    }
},
methods:{
    onSubmit(){
       this.loading =  !this.loading
    },
    hanlde(){
     this.$router.push('/home')
    }
}
}
</script>

<style lang="less" scoped>
.van-image--round {
display: block !important;
   margin: 20px auto;
}
.van-button--info {
    display: block !important;
    margin: 0 auto!important;
     height:30px!important;
}
.van-button__text {
display: block;
   line-height: 30px;
   text-align: center; 
}
</style>