// pages/start/start.js

const WXAPI = require('apifm-wxapi')
import Toast from '@vant/weapp/toast/toast'

const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    banners: [],
    swiperMaxNumber: 0,
    swiperCurrent: 0
  },

  goToIndex: function(e){
    console.log('goToIndex')
  },

  imgClick: function(e) {
    if(this.data.swiperCurrent != this.data.swiperMaxNumber - 1){
      Toast('左滑进入');
    }
  },

  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const _this = this
    WXAPI.banners({
      type: 'app'
    }).then(function (res){
      if(res.code == 0){
        _this.setData({
          banners: res.data,
          swiperMaxNumber: res.data.length
        })
      }
    })

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})