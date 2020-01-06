<template>
  <div class="saleBox">
    <!-- 顶部信息 -->
    <van-nav-bar title="退换/售后" left-text left-arrow @click-left="onClickLeft">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>

    <!-- 分栏 -->
    <van-tabs v-model="active">
      <van-tab title="售后申请"></van-tab>
      <van-tab title="处理中"></van-tab>
      <van-tab title="售后评价"></van-tab>
      <van-tab title="申请记录"></van-tab>
    </van-tabs>

    <!-- seach -->
    <van-cell-group>
      <van-field v-model="value" right-icon="search" :clearable="true" placeholder="商品名称/商品编号/订单编号/序列号" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: '',
      value: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style style="less" scoped>
.van-nav-bar {
  border-bottom: 1px solid #ccc;
}
.van-tabs {
  border-bottom: 1px solid #ccc;
}
.van-cell-group {
  margin-top: 10px;
  padding: 0 10px;
}
.van-field {
  width: 100%;
  height: 35px;
  border-radius: 30px;
  padding-right: 30px;
  padding-left: 30px;
  background-color: rgb(245, 245, 245);
  flex: 6 1 0%;
  justify-content: flex-start;
  align-items: center;
}
</style>
