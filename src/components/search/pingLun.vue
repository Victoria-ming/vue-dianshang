<template>
    <div>
        <div class='pinglun'>
            <b>发表评论</b>
        </div>
        <van-divider :style="{ borderColor: '#000', padding: '0' }"></van-divider>
        <!-- 评论输入模块 -->
<div class="messageBoard">
    <van-cell-group>
            <van-field
            v-model="message"
            rows="2"
            autosize
            style="border: 1px solid"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
            />
    <van-button type="info" size="large" @click="handle">发布评论</van-button>
    </van-cell-group>
    <!-- 留言显示模块 -->
    <div>
<van-list v-for="(item,index) in list" :key="index">
  <van-cell class="biaotou" >
    <template slot="title">
    <span class="custom-title" >第{{list.length-index}}楼 用户：{{item.user_name}} 发表时间：{{(item.add_time).substr(0,10)}}</span>
  </template>
  </van-cell>
    <van-cell >
    <template slot="title">
    <span class="custom-title">{{item.content}}</span>
  </template>
  </van-cell>
</van-list>

 </div>
</div>

    </div>
</template>
<script>
export default {
  data () {
    return {
      message: '',
      list: []
    }
  },
  methods: {
    async getList () {
      let { data: res } = await this.$ajax.get(`http://www.liulongbin.top:3005/api/getcomments/37?pageindex=1`)
      this.list = res.message
      console.log(res)
    },
    async handle () {
      let { data: res } = await this.$ajax.post(`http://www.liulongbin.top:3005/api/postcomment/37?`, `content=${this.message}`)
      console.log(res)
      this.getList()
    }
  },
  created () {
    this.getList()
  }
}
</script>
<style type='less' scoped>
.pinglun{
    font-size: 20px

}
.messageBoard {

}
.biaotou {
    background-color:#CCCCCC
}
</style>
