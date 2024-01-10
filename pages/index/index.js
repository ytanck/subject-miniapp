// index.js
import {fetchHome} from '../../services/home';

Page({
  data: {
    imgSrcs: [],
    tabList: [],
    nav:[],
    ad:[],
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  onLoad: function (options) {
    this.init();
  },

  // 事件处理函数
  onPullDownRefresh:function() {
    this.init();
  },

  init: function () {
    this.loadHomePage();
  },

  loadHomePage: function () {
    wx.stopPullDownRefresh();
    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({
      swiper,
      nav,
      ad
    }) => {
      this.setData({
        imgSrcs: swiper,
        nav:nav,
        ad:ad,
        pageLoading: false,
      });
      
    });
  },
  navToSearchPage: function () {
    // wx.navigateTo({ url: '/pages/goods/search/index' });
    console.log('navToSearchPage');
  },
  navToActivityDetail: function ({
    detail
  }) {
    const {
      index: promotionID = 0
    } = detail || {};
    console.log('detail');
  },

})