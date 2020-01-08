<template>
  <div class="mapBox">
    <div class="top">
      <van-nav-bar title="地图" left-text left-arrow @click-left="onClickLeft"></van-nav-bar>
    </div>
    <div class="mapBox">
      <div class="seach">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <baidu-map class="map" :center="center" :zoom="zoom">
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 10, height: 80}"></bm-navigation>
        <bm-local-search :keyword="keyword" :auto-viewport="true" :location="center" :forceLocal="true" :autoViewport="true" :selectFirstResult="true" :pageCapacity="4"></bm-local-search>
      </baidu-map>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      center: '成都',
      zoom: 13,
      value: '',
      positionList: [],
      keyword: '黑马'
    }
  },
  methods: {
    handler ({ BMap, map }) {
      // console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    onClickLeft () {
      this.$router.go(-1)
    },
    onSearch () {
      this.keyword = this.value
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">

.map {
  width: 100%;
  height: 400px;
}
.mapBox {
  position: relative;
}
.seach {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
}
.van-search {
  background: rgba(255, 255, 255, 0) !important;
}
.cityList {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  background: red;
}
.foot {
  height: 290px;
  overflow: auto;
  p {
    margin: 0;
    padding: 0;
  }
  .title {
    height: .42rem;
    font-size: .32rem;
    color: #000;
    line-height: .42rem;
    font-weight: 400;
  }
  .address {
    font-size: 12px;
  }
}
</style>
