Component({
  data: {
    active: 0,
    list:[
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/images/nav/home-off.png",
        "selectedIconPath": "/images/nav/home-on.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/category/index",
        "iconPath": "../images/nav/fl-off.png",
        "selectedIconPath": "/images/nav/fl-on.png",
        "text": "分类"
      },
      {
        "pagePath": "/pages/coupons/index",
        "iconPath": "/images/nav/coupon-off.png",
        "selectedIconPath": "/images/nav/coupon-on.png",
        "text": "优惠券"
      },
      {
        "pagePath": "/pages/shop-cart/index",
        "iconPath": "/images/nav/cart-off.png",
        "selectedIconPath": "/images/nav/cart-on.png",
        "text": "购物车"
      },
      {
        "pagePath": "/pages/my/index",
        "iconPath": "/images/nav/my-off.png",
        "selectedIconPath": "/images/nav/my-on.png",
        "text": "我的"
      }
    ]
  },
  methods: {
    onChange(e){
      this.setData({
        active: e.detail
      })
      wx.switchTab({
        url: this.data.list[e.detail].pagePath,
      })
    },
    init(){
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      })
    }
  }
})