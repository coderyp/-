// components/y-goods-item/y-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object, 
      value: {}
    }
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
    itemClickHandle() {
      let iid = this.data.item.iid || this.data.item.item_id
      // data.data.list[6].item_id
      wx.navigateTo({
        url: '/pages/detail/detail?iid='+iid,
      })
    }
  }
})
