// pages/cart/childCpns/y-cart-list-item/y-cart-list-item.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product: Object
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
    handleCheck() {
      console.log('-----')
      let product = this.data.product
      console.log(app)
      app.changeChecked(product)
    }
  }
})
