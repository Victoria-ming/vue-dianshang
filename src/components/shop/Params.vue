<template>
    <div>
        <van-nav-bar title="黑马程序员.vant" left-text="返回" left-arrow @click-left="onClickLeft"/>
        <div>
            <h4>{{this.paramslist.title}}</h4>
            <hr>
            <div class="content" v-html="content">

            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function () {
    return {
      paramslist: [],
      // id: '',
      content: ''
    }
  },
  created () {
    this.getParamsList()
  },
  computed: {
    ...mapState(['sum', 'shopId'])

  },
  methods: {
    getParamsList: async function () {
      var url = window.location.href
      var id = url.split('?')[1]
      // this.id = this.shopId
      let { data: res } = await this.$http.get(`/api/goods/getdesc/` + id)
      console.log(res)
      this.paramslist = res.message[0]
      this.content = res.message[0].content
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
h4{
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
}
.content{
    padding: 0 5px;
    font-size: 16px !important;
.gomeImgLoad{
    width: 100% !important;
}
}
</style>
