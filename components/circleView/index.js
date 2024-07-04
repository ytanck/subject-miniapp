// components/circleView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    examGo(){
      console.log('examGo');
      wx.showModal({
        title: '提示',
        content: '这是一场模拟考试',
        success (res) {
          if (res.confirm) {
            console.log('confirm')
            wx.showToast({
              title: 'star成功！',
            })
          } else if (res.cancel) {
            console.log('cancel')
            wx.showToast({
              title: '喜欢就star咯',
              icon: 'none'
            })
          }
        }
      })
    },
    defaultGo(){
      console.log('defaultGo');
    },
    headerMenu(){
      console.log('headerMenu');
      wx.showToast({
        title: '图标速记',
        icon: 'none'
      })
    },
    randomGo(){
      console.log('randomGo');
    },
    orderGo(){
      console.log('orderGo');
      wx.showModal({
        title: '提示',
        content: '这是一个顺序练习',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    gradeGo(){
      console.log('gradeGo');
    },
    collectGo(){
      console.log('collectGo');
    },
    myQuestion(){
      console.log('myQuestion');
      wx.showToast({
        title: '我的题库',
        icon: 'none'
      })
    }
  }
})
