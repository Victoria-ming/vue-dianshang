<template>
  <div>
    <div class="top">
      <van-button icon="arrow-left" @click="goback" />
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div id="map"></div>
    <div id="r-result"></div>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  name: 'Map',
  data () {
    return {
      value: '',
      myKeys: ['黑马程序员']
    }
  },
  methods: {
    onSearch () {
      if (this.value.trim().length === 0) {
        return this.$toast.fail('请输入内容')
      } else {
        var arr = []
        arr.push(this.value)
        this.myKeys = arr
        this.createMap(this.myKeys)
        this.value = ''
      }
    },
    createMap (e) {
      // 百度地图API功能
      var map = new BMap.Map('map') // 创建Map实例
      // map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 13)
      var myKeys = e
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map, panel: 'r-result' },
        pageCapacity: 5
      })
      local.searchInBounds(myKeys, map.getBounds())

      var point = new BMap.Point(116.331398, 39.897445)
      map.centerAndZoom(point, 13)

      var geolocation = new BMap.Geolocation()
      // 开启SDK辅助定位
      geolocation.enableSDKLocation()
      geolocation.getCurrentPosition(function (r) {
        // eslint-disable-next-line no-undef
        if (this.getStatus() === BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point)
          map.addOverlay(mk)
          map.panTo(r.point)
        }
      })
    },
    goback () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.createMap(this.myKeys)
  }
}
</script>

<style scoped lang="less">
body,
html,
#map {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: '微软雅黑';
}
#map {
  height: 400px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
#r-result {
  width: 100%;
  border:0!important;
}
.top {
  height: 38px;
  display: flex;
  justify-content: space-between;
}
.van-search {
  flex: 1;
  padding-left:0;
}
.van-button {
  border: none;
  height: 100%;
}
</style>
