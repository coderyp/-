// pages/detail/detail.js
let app = getApp()
const TOP_INSTANCE = app.globalData.TOP_INSTANCE

import { getDetail,
  getRecommends,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo,
  commentInfo
} from '../../service/detail.js'

Page({
  data: {
    iid: '',
    topImages: [],
    BaseInfo: {},
    shopInfo: {},
    detailInfo: {},
    paramInfo: {},
    commentInfo: {},
    recommends: [],
    showBackTop: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.iid = options.iid    
    getDetail(options.iid).then(res => {
      const data = res.data.result
      let topImages = data.itemInfo.topImages
      this.setData({
        topImages
      })
      const BaseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
      const shopInfo = new ShopInfo(data.shopInfo)
      /// 4.获取detailInfo信息
      const detailInfo = data.detailInfo;

      // 5.创建ParamInfo对象
      const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule);
      let commentInfo = {}
      if (data.rate && data.rate.cRate > 0) {
        commentInfo = data.rate.list[0]
      }      
      this.setData({
        BaseInfo,
        shopInfo,
        detailInfo,
        paramInfo,
        commentInfo
      })
    })
    getRecommends().then(res => {
      // console.log(res)
      const recommends = res.data.data.list
      this.setData({
        recommends
      })
    })
  },
  onPageScroll(options) {
    let scrollTop = options.scrollTop
    let flag = scrollTop >= TOP_INSTANCE
    if (flag !== this.data.showBackTop) {
      this.setData({
        showBackTop: flag
      })
    }      
  },
  backHandle() {
    console.log('回到顶部')
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  addCart() {
    const obj = {}
    let data = this.data
    obj.title = data.BaseInfo.title
    obj.imgURL = data.topImages[0]
    obj.price = data.BaseInfo.realPrice
    obj.desc = data.BaseInfo.desc;
    obj.iid = data.iid
    app.addToCart(obj)
    wx.showToast({
      title: '加入成功',
      icon: 'success'
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})