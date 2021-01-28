const WXAPI = require('apifm-wxapi')
const CONFIG = require("config.js")

App({
  onLaunch: function(){
    const subDomain = wx.getExtConfigSync().subDomain
    if(subDomain){
      WXAPI.init(subDomain)
    } else {
      WXAPI.init(CONFIG.subDomain)
    }

  },
  globalData: {
    
  }
})