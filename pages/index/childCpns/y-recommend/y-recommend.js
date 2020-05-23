// pages/index/childCpns/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },
  data: {
    imgLoadFlag: false
  },
  methods: {
    imgLoad() {
      if (!this.data.imgLoadFlag) {
        this.triggerEvent('imgLoad', {}, {})
        this.data.imgLoadFlag = true
      }      
    }
  }
})
