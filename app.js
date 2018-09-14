var util = require('./utils/util.js');
var api = require('./config/api.js');
var user = require('./services/user.js');

App({
  onLaunch: function () {
    //获取用户的登录信息
    user.checkLogin().then(res => {
      console.log('app login')
      this.globalData.userInfo = wx.getStorageSync('userInfo');
      this.globalData.token = wx.getStorageSync('token');
    }).catch(() => {

    });
  },
  userInfo: {
    nickName:'',
    imageUrl:'',
    authorize:undefined,
  },
  globalData: {
    userInfo: {
      nickname: 'Hi,游客',
      username: '点击去登录',
      avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViOTYzNDJjYzRlZDc1MjM4OTZmZTJjYiIsImlhdCI6MTUzNjczNDk3NSwiZXhwIjoxNTM2NzM4NTc1fQ.NFf-QbSXGC_Idll9sCzLeBPPL_O2N8PSmWX5lBRnPBw',
  }
})

//"appid":"wxe79b05f970cb64b1"
//"secret":"392c345340435c9e9c2aa8443a6d6665"