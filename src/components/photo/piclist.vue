<template>
  <div>
    <!-- 顶部nav -->
    <van-nav-bar @click-left="onClickLeft" left-text="返回" left-arrow fixed title="黑马程序员.vat" />
    <div class="content">
      <!-- tab标签页 -->
      <van-tabs v-model="active" @click="picList">
        <van-tab :title="item.title" v-for="item in titlelist" :key="item.id">
          <!-- 图片列表 -->
          <ul class="ul">
            <li class="pic" v-for="(item,i) in piclist"  :key="i" @click="thumimages(item.id)">
              <van-image lazy-load width="100%"  height="250px" radius="8" :src="item.img_url" />
              <div class="titlebox">
                <div>{{item.title}}</div>
                <div class="van-multi-ellipsis--l3">{{item.zhaiyao}}</div>
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 控制tabs选中某一个的索引
      active: 0,
      // 获取来的图片标题列表
      titlelist: [],
      piclist: [], // 所有图片列表的数据
      index: 0
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    // 获取图片分类数据
    async getimgcategory () {
      const { data: res } = await this.$http.get('/api/getimgcategory')
      if (res.status !== 0) return
      const o = {
        title: '全部',
        id: 0
      }
      res.message.unshift(o)
      this.titlelist = res.message
      console.log(res)
    },
    // 点击tabs标题,获取对应的图片列表数据
    picList (index) {
      var id = this.titlelist[index].id
      this.getList(id)
    },
    // 获取图片列表
    async getList (id) {
      const { data: res } = await this.$http.get(`/api/getimages/${id}`)
      if (res.status !== 0) return
      this.piclist = res.message
    },
    thumimages (id) {
      this.$router.push({ path: '/thumimages', query: { id: id } })
    }
  },
  created () {
    // 获取图片分类数据
    this.getimgcategory()
    this.getList(0)
  }
}
</script>
<style lang='less' scoped>
.content {
  margin-top: 0.8rem;
  .van-tab {
    font-size: 14px !important;
  }
  .pic {
    position: relative;
    margin: 10px 15px;
    .titlebox {
      position: absolute;
      width: 100%;
      bottom: 5px;
      height: 80px;
      background-color: rgba(0, 0, 0, 0.5);
      overflow: hidden;
      text-overflow: ellipsis;
      div {
        margin: 4px;
        font-size: 12px;
        color: #fff;
      }
    }
  }
  .ul {
    margin-bottom: 58px;
  }
}
.van-image {
  vertical-align: bottom;
}
.van-field__control {
    border: 1px solid #bbb;
    padding: 10px;
    box-sizing: border-box;
}
</style>
