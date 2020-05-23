// pages/category/childCpns/y-menu/y-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categories: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(e) {
      const currentIndex = e.currentTarget.dataset.index
      this.setData({
        currentIndex
      })
      this.triggerEvent('menuClick', {currentIndex}, {})
    }
  }
})
