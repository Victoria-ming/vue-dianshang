<template>
    <div>
        <van-nav-bar  title="黑马程序员.vat"/>
        <van-swipe :autoplay="2000" indicator-color="white">
                <van-swipe-item   v-for="(image, index) in images" :key="index">
                    <img :src="image.url" style="height: auto;width: 100%;"/>
                </van-swipe-item>
        </van-swipe>
        <van-grid :border="false" :column-num="3">
                <van-grid-item to="/news">
                    <img src="../../public/img/menu1.png" alt="">
                    <van-grid-item text="新闻资讯" />
                </van-grid-item>
                <van-grid-item to="/piclist">
                <img src="../../public/img/menu2.png" alt="">
                    <van-grid-item text="图片分享" />
                </van-grid-item>
            <van-grid-item to="/shop">
                    <img src="../../public/img/menu3.png" alt="">
                    <van-grid-item text="商品购买" />
            </van-grid-item>
                <van-grid-item>
                    <img src="../../public/img/menu4.png" alt="">
                    <van-grid-item text="留言反馈" />
            </van-grid-item>
                <van-grid-item>
                    <img src="../../public/img/menu5.png" alt="">
                    <van-grid-item text="视频专区" />
            </van-grid-item>
                <van-grid-item to="/contact">
                    <img src="../../public/img/menu6.png" alt="">
                    <van-grid-item text="联系我们" />
            </van-grid-item>
        </van-grid>

    </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        { id: 1, url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d16ad85ec333155f31b230b72990970c.jpg' },
        { id: 2, url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/834aa0b760ac08575f01ddb630363611.jpg' },
        { id: 3, url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d16ad85ec333155f31b230b72990970c.jpg' },
        { id: 4, url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/834aa0b760ac08575f01ddb630363611.jpg' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.van-swipe{
    height: 200px;
}
img{
    width: 80px;
    height: 80px;
}
.van-tabbar--fixed {
    height: 60px;
   box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
</style>
