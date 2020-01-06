<template>
  <div>
    <!-- 顶部nav -->
    <van-nav-bar @click-left="onClickLeft" left-text="返回" left-arrow fixed title="黑马程序员.vat" />
    <div class="content">
      <div class="title">{{title}}</div>
      <div class="tit">
        <span>发表时间: {{add_time}}</span>
        <span>点击: {{click}}</span>
      </div>
      <!-- 宫格 -->
      <van-grid :gutter="1" :border="false" :column-num="3">
        <van-grid-item v-for="(item,i) in picList" :key="i" @click="yulang(i)">
          <van-image width="100%" height="100%" :src="item.src" lazy-load/>
        </van-grid-item>
      </van-grid>
      <div class="contant_c" v-html="content"></div>
      <div class="publicPL">发表评论</div>
      <div class="button">
      <!-- 评论输入框 -->
      <van-cell-group>
        <van-field
          autofocus
          v-model="addliuyan"
          border
          rows="5"
          autosize
          type="textarea"
          placeholder="请输入留言"
          show-word-limit
        />
      </van-cell-group>

        <!-- 发表按钮 -->
        <van-button type="info" block @click="addPLcontent">发表评论</van-button>
        <!-- 显示评论区 -->
        <van-list>
          <van-cell v-for="(item,i) in pinlunlist" :key="i">
            <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
              <div class="custom-title">第{{i+1}}楼 用户:{{item.user_name}}  发表时间:{{item.add_time.substr(0,10)}}</div>
              <div class="cont">{{item.content}}</div>
            </template>
          </van-cell>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from 'vant'
export default {
  data () {
    return {
      // 缩列图列表
      picList: [],
      // 资讯ID
      id: '',
      // 图片详情说明
      content: '', // 图片说明
      title: '', // 图片标题
      add_time: '', // 添加时间
      click: '', // 点击数量
      height: {
        maxHeight: 100,
        minHeight: 50
      },
      addliuyan: '', // 留言内容
      src: [], // 图片预览路径的数组
      pinlunlist: [] // 评论列表
    }
  },
  methods: {
    // 返回
    onClickLeft () {
      this.$router.go(-1)
    },
    // 获取页面内容
    async getItemPic () {
      this.id = this.$route.query.id
      const { data: res } = await this.$http.get(
        `/api/getthumimages/${this.id}`
      )
      const { data: resItem } = await this.$http.get(
        `/api/getimageInfo/${this.id}`
      )
      if (res.status !== 0) return
      console.log(res)
      this.picList = res.message
      console.log(resItem)
      if (resItem.status !== 0) return
      resItem.message.forEach(e => {
        this.content = e.content
        this.title = e.title
        this.add_time = e.add_time.slice(0, 10)
        this.click = e.click
      })
    },
    // 图片预览
    yulang (i) {
      this.src = []
      this.picList.forEach(item => {
        this.src.push(item.src)
      })
      ImagePreview({
        images: this.src,
        startPosition: i
      })
    },
    // 获取评论
    async getPinLunlist () {
      console.log(this.id)

      const { data: res } = await this.$http.get(
        `/api/getcomments/${this.id}?pageindex=1`
      )
      console.log(res)
      if (res.status !== 0) return
      this.pinlunlist = res.message
    },
    // 发表评论
    async addPLcontent () {
      const params = new URLSearchParams()
      params.append('content', this.addliuyan)
      if (this.addliuyan.trim().length === 0) return this.$toast.fail('内容不能为空!')
      const { data: res } = await this.$http.post(`/api/postcomment/${this.id}`, params)
      if (res.status !== 0) return this.$toast.fail('评论失败')
      this.$toast.success('评论成功!')
      this.addliuyan = ''
      this.getPinLunlist()
    }
  },
  created () {
    this.getItemPic()
    this.getPinLunlist()
  }
}
</script>
<style lang='less' scoped>
.content {
  height: 100%;
  .title {
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    color: #26a2ff;
    margin: 1.2rem 0 15px 0;
  }
  .tit {
    margin: 0 5px 0px;
    padding-bottom: 15px;
    font-size: 16px;
    border-bottom: 1px solid #423e3e;
    display: flex;
    color: #bababa;
    justify-content: space-between;
  }
}
.contant_c {
  font-size: 18px;
  padding: 15px;
}
.publicPL {
  margin: 10px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 1px solid #b6b6b6;
}
.button {
  padding: 0 10px;
  margin-bottom: 60px;
}
.custom-title {
  background-color: #ccc;
  line-height: 2.5;
}
.cont {
 line-height: 2.5;
 padding-left: 10px;
}
.van-field__control {
    border: 1px solid #bbb;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
}

.van-cell-group{
    border: 1px solid #bbb;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
}
/deep/.van-cell {
  padding: 0px!important;
}
.van-list {
  margin-top: 10px;
}
</style>
