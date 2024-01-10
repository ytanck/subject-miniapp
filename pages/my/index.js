
const {formatTime} = require('../../utils/util.js')

Page({
  data: {
    userInfo: {},
  },
  login() {
    const that=this
    wx.getUserInfo({
      fail(err){
        console.log(err);
      },
      success(res) {
        that.setData({
          userInfo:res.userInfo
        })
        console.log(11,res);
        // wx.showLoading({
        //   title: '授权登录中',
        // })
        
      }
    })
  },
})
