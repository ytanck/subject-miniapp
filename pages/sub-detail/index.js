// pages/subDetail.js

const app = getApp();
var str = `## 测试文案：你不知道的 CSS 伪元素
CSS 伪元素是一项强大的功能，它允许您为所选元素的特定部分设置样式，而无需额外的 JavaScript 代码。 

### 1. ::selection 伪元素
::selection 伪元素以用户选择的文本部分为目标。它提供了一种将样式应用于所选文本并自定义其外观的方法1。 
|表头1|表头2|表头3|
|----|-----|----|
|11|12|13|
|21|22|23|

例子：
\`\`\`js
var a=1
\`\`\`

CSS 伪元素为元素的特定部分设置样式和增强网页的视觉吸引力提供了广泛的可能性。`

Page({

  /**
   * 页面的初始数据
   */
  data: {
    md: str,
    curItem: {},
    article: {},
    isShowAnalysis: false,
    index: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      tabIndex,
      subIndex
    } = options
    const {
      questions
    } = app.courseList[tabIndex]

    this.setData({
      curItem: questions[subIndex],
      index: {
        tabIndex,
        subIndex
      }
    })
    // this.parseToMarkDown(str)
    this.parseToMarkDown(questions[subIndex].content || 'xxx')
  },
  parseToMarkDown(content) {

    let result = app.towxml(content, 'markdown', {
      theme: 'light', // 主题dark，默认`light`
      events: { // 为元素绑定的事件方法
        tap: (e) => {
          console.log('tap', e);
          const {
            data
          } = e.target.dataset
          if (data && data.tag == 'img') {
            wx.previewImage({
              // current:'',
              urls: [data.attrs.src] // 需要预览的图片http链接列表
            })
          }
        }
      }
    });
    // 更新解析数据
    this.setData({
      article: result,
      // isLoading: false
    }, () => {
      wx.hideLoading()
    });
  },
  showAnalysis() {
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      isShowAnalysis: !this.data.isShowAnalysis
    }, () => {
      wx.hideLoading()
    })
  },
  preSub() {
    const {
      tabIndex,
      subIndex
    } = this.data.index
    console.log(tabIndex, subIndex);
    const {
      questions
    } = app.courseList[tabIndex]
    this.setData({
      curItem:questions[subIndex],
      index: {
        subIndex: subIndex + 1
      }
    })
  },
  nextSub() {
    const {
      tabIndex,
      subIndex
    } = this.data.index
    const {
      questions
    } = app.courseList[tabIndex]
    console.log(tabIndex,this.data.index);
    this.setData({
      curItem:questions[subIndex+1],
      index: {
        tabIndex:tabIndex,
        subIndex: subIndex + 1
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})