<template>
  <div>
    <van-nav-bar
      left-text="返回"
      fixed="fixed"
      left-arrow
      @click-left="onClickLeft"
      title="黑马程序员.vat"
    />
    <div class="details">
      <h4 class="theTitle">{{detailsLIst.title}}</h4>
      <div>
        <span class="time">发表时间：{{detailsLIst.add_time|formatDate}}</span>
        <samp class="click">点击次数：{{detailsLIst.click}}</samp>
      </div>
      <van-divider />
      <div class="content" v-html="detailsLIst.content">{{detailsLIst.content}}</div>
    </div>
    <comments :id="id"></comments>
  </div>
</template>

<script>
import { formatDate } from '../../assets/js/date.js'
import comments from '../comments/comments.vue'
export default {
  data () {
    return {
      detailsLIst: [],
      fixed: true,
      Leave: [],
      id: ''
    }
  },
  created () {
    this.getdetails()
  },
  methods: {
    async getdetails () {
      var id = this.$route.params && this.$route.params.id
      const { data: res } = await this.$http.get('api/getnew/' + id)
      // console.log(res)
      if (res.status !== 0) {
        return this.$toast('服务器异常')
      }
      this.detailsLIst = res.message[0]
      // eslint-disable-next-line no-unused-vars
      var click = res.message[0].click++
      // console.log(click)
    },
    onClickLeft () {
      this.$router.push('/news')
    }
  },
  filters: {
    formatDate (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  components: {
    'comments': comments
  }

}
</script>

<style lang='less' scoped>
.details {
  font-size: 15px;
  margin: 60px 10px 10px;
}
.theTitle {
  font-size: 22px;
  font-weight: 700;
  line-height: 35px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  color: #1989fa;
}
.click,
.time {
  font-size: 13px;
  color: #1989fa;
  margin: 5px;
}
.click {
  float: right;
}
.content {
  font-size: 20px;
  font-weight: 400;
}

</style>
