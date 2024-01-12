
const {formatTime} = require('../../utils/util.js')
const defaultAvatarUrl = 'http://gyjx-web.oss-cn-beijing.aliyuncs.com/upload/common/202411/header.png'
Page({
  data: {
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
  },
  onLoad(){
    console.log('onLoad');
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
  onChooseAvatar(e) {
    console.log(1,e);
    const { avatarUrl } = e.detail
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    this.setData({
      "userInfo.nickName": nickName
    })
  },
})
