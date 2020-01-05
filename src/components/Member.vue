<template>
  <div>
       <van-nav-bar title="会员中心" left-text="返回" left-arrow @click-left='hanlde'/>
       <van-icon name="ellipsis" class="van-icon-ellipsis" />
       <div class="van-hairline--surround">

       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    hanlde () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.van-icon-ellipsis{
    position: absolute;
    top: 4px;
    right:11px;
    color: #fff;
    font-size:40px;
   z-index: 99999;
}
.van-hairline--surround{
    position: relative;
    height: 134px;
    overflow: hidden;
    border-radius: 0 0 400px 400px 0 0 50px 50px!important;
    box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
    background: linear-gradient(90deg, #eb3c3c, #ff7459);
}
</style>
