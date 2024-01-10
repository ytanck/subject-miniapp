// pages/category.js
// import {courseList} from '../../services/categoryData';
import data from '../../data/index'
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectTabIndex: 0, //默认选中项
    courseList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      courseList: data
    });
    app.courseList=data
  },
  selectTab: function (e) {
    // console.log(e);
    var that = this
    var {index} = e.currentTarget.dataset

    that.setData({
      selectTabIndex: index,
    });
  },
  goDetail(e) {
    const {
      index,
      item
    } = e.target.dataset
    console.log(this.data.selectTabIndex,index);
    wx.navigateTo({
      url: `../sub-detail/index?tabIndex=${this.data.selectTabIndex}&subIndex=${index}`,
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