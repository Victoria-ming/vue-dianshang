const Mock = require('mockjs')// mockjs 导入依赖模块
Mock.mock('http://www.liulongbin.top:3005/user/orders', 'get', function () {
  return {
    data: [
      {
        'item_title': 'LOVO家纺 罗莱生活出品 春秋冬被子被芯舒适透气保暖盖被双人四季被褥 艺享200*230cm',
        'item_price': 168,
        'item_id': 1,
        'item_skuid': '1795010',
        'item_pic': 'http://img10.360buyimg.com/N5/jfs/t3190/292/2370132188/219019/3f7a675c/57e0ce48N3ab1bbc2.jpg',
        'shopIdFlag': '',
        'state': 1,
        'dateSubmit': '2016-09-12 13:30:55',
        shopName: '京东',
        shopIcon: 'icon_jd',
        itemCount: 1
      },
      {
        'item_title': 'LOVO家纺 罗莱生活出品 春秋冬被子被芯舒适透气保暖盖被双人四季被褥 艺享200*230cm',
        'item_price': 168,
        'item_id': 2,
        'item_skuid': '1795010',
        'item_pic': 'http://img10.360buyimg.com/N5/jfs/t3190/292/2370132188/219019/3f7a675c/57e0ce48N3ab1bbc2.jpg',
        'shopIdFlag': '',
        'state': 1,
        'dateSubmit': '2016-09-12 13:30:55',
        shopName: '京东',
        shopIcon: 'icon_jd',
        itemCount: 2
      },
      {
        'item_title': 'LOVO家纺 罗莱生活出品 春秋冬被子被芯舒适透气保暖盖被双人四季被褥 艺享200*230cm',
        'item_price': 168,
        'item_id': 3,
        'item_skuid': '1795010',
        'item_pic': 'http://img10.360buyimg.com/N5/jfs/t3190/292/2370132188/219019/3f7a675c/57e0ce48N3ab1bbc2.jpg',
        'shopIdFlag': '',
        'state': 2,
        'dateSubmit': '2016-09-12 13:30:55',
        shopName: '京东',
        shopIcon: 'icon_jd',
        itemCount: 3
      }
    ]
  }
})
Mock.mock('http://www.liulongbin.top:3005/user/type', 'get', function () {
  return ['话费充值', '流量充值', '加油卡充值', '游戏充值', '我的电影票', '我的火车票', '我的机票', '我的酒店', '医药服务', '本地生活服务', '全新整车', '彩票订单', '度假', '常购清单', '回收站']
})
Mock.mock('http://www.liulongbin.top:3005/user', 'post', function () {
  return {
    id: 'jd_4fd90e635963',
    username: 'admin',
    password: '1234567',
    image: 'https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png',
    jd: 999,
    jiangpai: '铜牌',
    data: 200,
    jpimage: 'http://wq.360buyimg.com/fd/base/img/my/icon_vip.png'
  }
})
// 分类的tab栏数据接口
Mock.mock('http://www.liulongbin.top:3005/Tabttitle', 'get', {
  status: 0,
  message: '成功',
  'data|20': [{ // 随机生成20条数据
    'id': '@increment(1)', // 左侧tab栏ID号
    title: '@cword( 2, 4 )' // 左侧tab栏名称
  }]

})

Mock.mock(/\/item\/content/, 'get', function (options) {
  console.log(options)

  return Mock.mock({
    status: 0,
    message: '成功',
    'data|3-5': [{
      'id': '@increment(41)', // 左侧tab栏ID号,从41
      title: '@cword( 2, 4 )',
      'children|6-12': [{
        id: '@increment(5087)',
        // img_url: '@image(90x90)',
        img_url: 'https://img14.360buyimg.com/focus/s140x140_jfs/t14695/63/288523646/4107/7aa3924f/5a28d3f4Nb4c85cf1.jpg',
        pic_name: '@ctitle(2,4)'
      }]
    }]
  })
})
// 产生vedio随机数据
Mock.mock('http://www.liulongbin.top:3005/vedioTitle', 'get', function () {
  return Mock.mock({
    'data|6': [{
      id: '@id()',
      title: '@title'
    }]
  })
})

Mock.mock('http://www.liulongbin.top:3005/vedio', 'get', function (id) {
  return Mock.mock({
    'data|10': [{
      id: '@id()',
      url: 'http://m.360buyimg.com/ceco/jfs/t1/100750/30/9159/38883/5e0aeaffE4cfa2aad/f798c6f46fd28487.jpg!q70.jpg',
      acthor: '@name',
      title: '富士拍出你的美，照出你的魅力',
      acthorImg: 'http://m.360buyimg.com/mobilecms/jfs/t1/93415/31/6666/24145/5df6dcc3E389916c6/264907cd165c5ed1.jpg!q70.jpg',
      goodNum: Math.ceil(Math.random() * 100 + 1),
      vedio: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/0457174d264399704027615233/v.f30.mp4?dockingId=cf1d2990-3aea-421d-8500-92776b858b15&amp;storageSource=3'
    }]
  })
})

Mock.mock('http://www.liulongbin.top:3005/carouselItems', 'get', function () {
  return {
    data: [
      {
        id: 1,
        imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e45bcdea59448cd82360662a331409fc.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        title: ''
      },
      {
        id: 2,
        imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a38b1d56409913d5dc869023ade36d94.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        title: ''
      },
      {
        id: 3,
        imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/718043ed2dacdb7d19c52f8f2f413f12.jpg?w=2452&h=920',
        title: ''
      },
      {
        id: 4,
        imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        title: ''
      }
    ]
  }
})
Mock.mock('http://www.liulongbin.top:3005/1', 'get', function () {
  return {
    data: [
      {
        id: 1,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/mingfuqi1011.jpg'
      },
      {
        id: 2,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/464x261-w20-20191126.jpg'
      },
      {
        id: 3,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/111919xilie3.jpg'
      }
    ]
  }
})
Mock.mock('http://www.liulongbin.top:3005/2', 'get', function () {
  return {
    data: [
      {
        id: 1,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-q900-1.png'
      },
      {
        id: 2,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-q900-1.png'
      },
      {
        id: 3,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-q900-1.png'
      }
    ]
  }
})
Mock.mock('http://www.liulongbin.top:3005/3', 'get', function () {
  return {
    data: [
      {
        id: 1,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262-188-1-20190923.png'
      },
      {
        id: 2,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262-188-1-20190923.png'
      },
      {
        id: 3,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262-188-1-20190923.png'
      }
    ]
  }
})
Mock.mock('http://www.liulongbin.top:3005/4', 'get', function () {
  return {
    data: [
      {
        id: 1,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-A70s-1.png'
      },
      {
        id: 2,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-A70s-1.png'
      },
      {
        id: 3,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-A70s-1.png'
      }
    ]
  }
})
Mock.mock('http://www.liulongbin.top:3005/4', 'get', function () {
  return {
    data: [
      {
        id: 1,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-A70s-1.png'
      },
      {
        id: 2,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-A70s-1.png'
      },
      {
        id: 3,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-A70s-1.png'
      }
    ]
  }
})
Mock.mock('http://www.liulongbin.top:3005/5', 'get', function () {
  return {
    data: [
      {
        id: 1,
        title: '手机',
        imgUrl: 'https://images.samsung.com/is/image/samsung/cn-samsung-w20-sm-w2020zwachc-thumb-198650508?$PF_PRD_PNG$'
      },
      {
        id: 2,
        title: '冰箱',
        imgUrl: 'https://images.samsung.com/is/image/samsung/cn-ref-sbs-rs5000-rs63r5597b4-rs63r5597b4-sc-black-thumb-155370877?$PF_PRD_PNG$'
      },
      {
        id: 3,
        title: '电视',
        imgUrl: 'https://images.samsung.com/is/image/samsung/cn-qled-q900-qa85q900rcjxxz-qa85q900rcjxxz-thumb-Black-171680194?$PF_PRD_PNG$'

      },
      {
        id: 4,
        title: '洗衣机',
        imgUrl: 'https://images.samsung.com/is/image/samsung/cn-front-loader-wd90n74gnoo-wd90n74gnoo-sc-fronttitaniumgray-thumb-94070902?$PF_PRD_PNG$'

      },
      {
        id: 5,
        title: '平板',
        imgUrl: 'https://images.samsung.com/is/image/samsung/cn-galaxy-tab-s6-sm-t860nzaachn-frontgray-thumb-184571402?$PF_PRD_PNG$'

      },
      {
        id: 6,
        title: '笔记本',
        imgUrl: 'https://images.samsung.com/is/image/samsung/cn-notebook-9-np950qcg-x01cn-np950qcg-x01cn-frontblue-thumb-199973870?$PF_PRD_PNG$'

      },
      {
        id: 7,
        title: '净化器',
        imgUrl: 'https://images.samsung.com/is/image/samsung/cn-air-purifier-k7586wf-kj720f-k7586wf-gold-thumb-68368731?$PF_PRD_PNG$'

      },
      {
        id: 8,
        title: '空调',
        imgUrl: 'https://images.samsung.com/is/image/samsung/cn-boracay-ar18msfhdwknsc-ar18msfhdwknsc-front-thumb-108289230?$PF_PRD_PNG$'
      }
    ]
  }
})
Mock.mock('http://www.liulongbin.top:3005/6', 'get', function () {
  return {
    data: [
      {
        id: 1,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-A90-20191023-1.png'
      },
      {
        id: 2,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-A90-20191023-1.png'
      },
      {
        id: 3,
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/homepage/2019/262x188-A90-20191023-1.png'
      }
    ]
  }
})
Mock.mock('http://www.liulongbin.top:3005/7', 'get', function () {
  return {
    data: [
      {
        id: 1,
        caption: '黑马商城购购购',
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/offer/2019/eventbanner-pc-fold-fuwu.jpg?$ORIGIN_JPG$'
      },
      {
        id: 2,
        caption: '黑马星时代惠享换新机',
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/offer/eventbanner-pc-1231huanxin.jpg?$ORIGIN_JPG$'
      },
      {
        id: 3,
        caption: '黑马年货节让货先回家',
        imgUrl: 'https://images.samsung.com/is/image/samsung/p5/cn/offer/0102-eventbanner-pc-nianhuojie.jpg?$ORIGIN_JPG$'
      }
    ]
  }
})
