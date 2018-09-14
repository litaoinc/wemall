const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
  data: {
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    banner: [],
    channel: []
  },
  onShareAppMessage: function () {
    return {
      title: 'Wemall',
      desc: '我的商城',
      path: '/pages/index/index'
    }
  },

  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl).then(function (res) {
      if (!res.errno) {
        res.data.items.forEach(function(val,index){
          val.images[0].path = api.RootUrl + val.images[0].path
        })
        that.setData({
          newGoods: res.data.items,
          hotGoods: res.data.items,
          topics: res.data.items,
          brand: res.data.items,
          banner: res.data.items,
          channel: res.data.channel
        });
      }
    });
  },
  onLoad: function (options) {
    this.getIndexData();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})
