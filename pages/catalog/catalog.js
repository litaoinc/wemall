var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    navList: [],
    categoryList: [],
    categoryGoods: [],
    scrollLeft: 0,
    scrollTop: 0,
    goodsCount: 0,
    scrollHeight: 0
  },
  onLoad: function (options) {
    this.getCatalog();
  },
  getCatalog: function () {
    //CatalogList
    let that = this;
    wx.showLoading({
      title: '加载中...',
    });
    util.request(api.CatalogList).then(function (res) {
        that.setData({
          navList: res.data.items,
          currentCategory: res.data.currentCategory
        });
        wx.hideLoading();
      });
  },
  getCurrentCategory: function (id) {
    let that = this;
    util.request(api.CatalogCurrent+id)
      .then(function (res) {
        that.setData({
          categoryGoods: res.data.items
        });
      });
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
  getList: function () {
    var that = this;
    util.request(api.ApiRootUrl + 'api/catalog/' + that.data.currentCategory.cat_id)
      .then(function (res) {
        that.setData({
          categoryList: res.data,
        });
      });
  },
  switchCate: function (event) {
    var that = this;
    var currentTarget = event.currentTarget.dataset.index;
    this.getCurrentCategory(that.data.navList[currentTarget]._id);
  }
})