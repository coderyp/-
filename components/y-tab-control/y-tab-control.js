// components/y-tab-control/y-tab-control.js
Component({
  properties: {
    titles: Array
  },
  data: {
    currentIndex: 0
  },
  methods: {
    itemClick(e) {
      let index = e.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      this.triggerEvent("tabClick", {index}, {})
    }
  }
})
