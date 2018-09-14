const util = require('../../utils/util.js');
const api = require('../../config/api.js');

const app = getApp();

Page({
  onGotUserInfo: function (e) {
    if (e.detail.userInfo != null) {//用户点击允许授权
      if(!wx.getStorageSync('token')) {
        util.login().then(res => {
          wx.request({
            url: api.ApiRootUrl + 'user/wechat/sign/up',
            data: {
              code: res.code,
            },
            method: 'POST',
            header: {
              'Content-Type': 'application/json',
            },
            success: function (res) {
              console.error(res.data.data.token)
              wx.setStorageSync('token', res.data.data.token)
            }
          })
        })
      }
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})