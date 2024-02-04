
const {formatTime} = require('../../utils/util.js')
const app = getApp();
// const defaultAvatarUrl = 'http://gyjx-web.oss-cn-beijing.aliyuncs.com/upload/common/202411/header.png'
Page({
  data: {
    userInfo: {},
    // userInfo: {
    //   avatarUrl: defaultAvatarUrl,
    //   nickName: '',
    // },
  },
  onLoad(){
    console.log('my-page-onLoad');
    var userInfo = app.globalData.userInfo||wx.getStorageSync('userInfo')
    if(userInfo){
      this.setData({
        userInfo
      }) 
    }
  },
  login() {
    console.log('login');
    // const that=this
    // wx.getUserInfo({
    //   fail(err){
    //     console.log('err',err);
    //   },
    //   success(res) {
    //     that.setData({
    //       userInfo:res.userInfo
    //     })
    //     console.log('success',res);
    //   }
    // })
    // 跳转去登录==>
    wx.navigateTo({ url: '/pages/login/index' });
  },
  // onChooseAvatar(e) {
  //   console.log(1,e);
  //   const { avatarUrl } = e.detail
  //   this.setData({
  //     "userInfo.avatarUrl": avatarUrl,
  //   })
  // },
  // onInputChange(e) {
  //   const nickName = e.detail.value
  //   this.setData({
  //     "userInfo.nickName": nickName
  //   })
  // },
})
