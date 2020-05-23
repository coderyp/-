// pages/index/index.js
let app = getApp()
const TOP_INSTANCE = app.globalData.TOP_INSTANCE
import { getMultiData, getGoods } from '../../service/index.js'
const type = ['pop', 'new', 'sell']


Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: { page: 0, list: [] },
      sell: { page: 0, list: [] },
      'new': { page: 0, list: [] }
    },
    currentType: 'pop',
    isShowBackTop: false,
    isTabFixed: false
  },
  onLoad: function (options) {
    this._getMultiData()
    // 请求商品信息
    this._getGoods('new')
    this._getGoods('pop')
    this._getGoods('sell')
    
  },
  // --------------网络请求方法--------------
  _getMultiData() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list.map(item => {
        return item.image
      })
      const recommends = res.data.data.recommend.list
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoods(type) {
    let page = this.data.goods[type].page + 1
    getGoods(type, page).then(res => {
      let oldGoods = this.data.goods[type].list
      let list = res.data.data.list
      oldGoods.push(...list)

      // 将数据设置到data中的goods中
      let typeKey = `goods.${type}.list`
      let pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldGoods,
        [pageKey]: page
      })
    }, err => console.log('请求失败'))
  },
  //----------- 普通方法------------
  tabClick(e) {
    let index = e.detail.index
    this.setData({
      currentType: type[index]
    })
  },
  backHandle() {
    console.log('回到顶部')
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  recommendImgLoad() {
    this.createSelectorQuery().select('#tabControl').
      boundingClientRect().exec(res => this.data.top = res[0].top)

  },
  onPullDownRefresh() {
    console.log('刷新ing')
  },
  onReachBottom() {
    this._getGoods(this.data.currentType)
    console.log('到底了，请求更多数据')
  },
  onPageScroll(options) {
    let scrollTop = options.scrollTop
    let showBackTopFlag = scrollTop >= TOP_INSTANCE
    if (this.data.isShowBackTop !== showBackTopFlag) {
      this.setData({
        isShowBackTop: showBackTopFlag
      })
    }
    let showTabFlag = scrollTop >= this.data.top
    if (this.data.isTabFixed !== showTabFlag) {
      this.setData({
        isTabFixed: showTabFlag
      })
    }
  },
})