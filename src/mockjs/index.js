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
    password: '123456',
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
