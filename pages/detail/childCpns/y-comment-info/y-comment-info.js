// pages/detail/childCpns/y-comment-info/y-comment-info.js
const { formatTime } = require('../../../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    comment: {
      type: Object, 
      observer: function (newVal, oldVal) {
        var that = this;
        console.log(newVal, oldVal)
        const timestamp = formatTime(this.data.comment.created * 1000)
        this.setData({
          timestamp
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    timestamp: undefined
  },
  lifetimes: {
    attached() {
      // const timestamp = formatTime(this.data.comment.created)
      
    }
  },
  methods: {

  }
})
