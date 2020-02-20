<template>
  <div>
    <!-- 顶部信息 -->
    <van-nav-bar title="视频专区" left-text left-arrow @click-left="onClickLeft">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>

    <!-- 内容 -->
    <van-tabs @click="changeVedio">
      <div class="forYou">为你推荐</div>
      <van-tab v-for="(item, index) in vedioTitle" :title="item.title" :key="index" :name="item.id">
        <div class="vedioBox">
          <div class="vedioInfo" v-for="(item, index) in vedios" :key="index">
            <div class="vedioInfo-heade">
              <img :src="item.url" alt />
              <div class="acthorInfo">
                <img :src="item.acthorImg" alt />
                <span>{{item.acthor}}</span>
              </div>
              <van-icon name="good-job-o" class="good" @click="addGood(item.id)" />
              <b class="goodNum">{{item.goodNum}}</b>
              <van-icon name="play-circle" class="play" @click="play(item.id)" />
            </div>
            <div class="vedioInfo-foot">
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <!-- 视频组件 -->
    <van-dialog v-model="show" :closeOnClickOverlay="true" :showConfirmButton="false" @closed="closeDialog">
      <div style="z-index: 1;">
        <video
          x-webkit-airplay="true"
          playsinline
          webkit-playsinline="true"
          preload="auto"
          id="jd-video"
          class="video-js jd-video"
          style="top: 40%;"
          :src="vedioUrl"
          controls="controls"
        ></video>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vedioTitle: [],
      vedios: [],
      show: false,
      vedioUrl: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    // 获取title页面数据
    async getVedioTitleList () {
      const { data: res } = await this.$http.get('/vedioTitle')
      //   console.log(res)
      this.vedioTitle = res.data
    },
    async getVediosList () {
      const { data: res } = await this.$http.get('/vedio')
      console.log(res)
      this.vedios = res.data
    },
    addGood (id) {
      let index = this.vedios.findIndex(item => item.id === id)
      this.vedios[index].goodNum++
    },
    play (id) {
      this.show = true
      var item = this.vedios.filter(item => item.id === id)
      this.vedioUrl = item[0].vedio
    },
    closeDialog () {
      var vedio = document.querySelector('video')
      vedio.pause()
      this.vedioUrl = ''
    },
    changeVedio (name) {
      console.log(name)
      this.getVediosList()
    }
  },
  created () {
    this.getVedioTitleList()
    this.getVediosList()
  }
}
</script>

<style lang="less" scoped>
.van-tabs {
  margin-top: 10px;
}
.forYou {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  font-weight: 300;
  margin: 1% 0 0;
  text-align: center;
  color: #5e5e5e;
  line-height: 16px;
  margin-top: 10px;
  border-top: 1px solid #5e5e5e;
  padding-top: 10px;
}
.vedioBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 10px 0 10px;
}
.vedioInfo {
  margin-top: 20px;
  width: 50%;
}
.vedioInfo-heade {
  position: relative;
  margin: 0 auto;
  width: 170px;
  height: 245px;
  border-radius: 5px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
  .acthorInfo {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 25px;
    line-height: 100%;
    > img {
      width: 25px;
      vertical-align: middle;
      border-radius: 50%;
      margin: 17px 10px 0 10px;
    }
    > span {
      display: inline-block;
      font-size: 10px;
      color: #fff;
    }
  }
  .good {
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: #fff;
    font-size: 16px;
  }
  .goodNum {
    position: absolute;
    bottom: 7px;
    left: 35px;
    color: #fff;
    font-size: 16px;
  }
  .play {
    position: absolute;
    bottom: 7px;
    right: 15px;
    color: #ccc;
    font-size: 16px;
  }
}
.vedioInfo-foot {
  font-size: 18px;
  margin: 5px 0 0 10px;
  p {
    margin: 0;
    padding-bottom: 0;
  }
}
.van-dialog {
  // width: 100%;
  // height: 200px;
  div {
    .jd-video {
      display: block;
      width: 370px;
      height: 400px;
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>
