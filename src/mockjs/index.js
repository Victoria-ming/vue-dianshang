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
    username: 'jd_4fd90e635963',
    image: 'https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png',
    jd: 999,
    jiangpai: '铜牌',
    jpimage: 'http://wq.360buyimg.com/fd/base/img/my/icon_vip.png'
  }
})
