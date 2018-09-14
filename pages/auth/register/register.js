var api = require('../../../config/api.js');
var util = require('../../../utils/util.js');
var app = getApp();

Page({
  data: {
    username: '',
    password: '',
    confirmPassword: '',
    code: '',
    loginErrorCount: 0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 页面渲染完成

  },
  onReady: function () {

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
  startRegister: function () {
    var that = this;

    if (that.data.password.length < 3 || that.data.username.length < 3) {
      wx.showModal({
        title: '错误信息',
        content: '用户名和密码不得少于3位',
        showCancel: false
      });
      return false;
    }

    if (that.data.password != that.data.confirmPassword) {
      wx.showModal({
        title: '错误信息',
        content: '确认密码不一致',
        showCancel: false
      });
      return false;
    }

    util.login().then(res=>{
      wx.request({
        url: api.ApiRootUrl + 'user/wechat/sign/up',
        data: {
          code:res.code,
        },
        method:'POST',
        header:{
          'Content-Type':'application/json',
        },
        success:function(res){
          console.error(res.data)
          console.error(res.data.data.token)
          wx.setStorageSync('token', res.data.data.token)
        }
      })
    })
  },
  bindUsernameInput: function (e) {

    this.setData({
      username: e.detail.value
    });
  },
  bindPasswordInput: function (e) {

    this.setData({
      password: e.detail.value
    });
  },
  bindConfirmPasswordInput: function (e) {

    this.setData({
      confirmPassword: e.detail.value
    });
  },
  bindCodeInput: function (e) {

    this.setData({
      code: e.detail.value
    });
  },
  clearInput: function (e) {
    switch (e.currentTarget.id) {
      case 'clear-username':
        this.setData({
          username: ''
        });
        break;
      case 'clear-password':
        this.setData({
          password: ''
        });
        break;
      case 'clear-confirm-password':
        this.setData({
          confirmPassword: ''
        });
        break;
      case 'clear-code':
        this.setData({
          code: ''
        });
        break;
    }
  }
})