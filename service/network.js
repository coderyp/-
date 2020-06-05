import {
  baseURL,
  timeout
} from './config.js'
export default function(options) {
  wx.showLoading({
    title: '数据加载中ing',
  })
  return new Promise( (resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      data: options.data || {},
      timeout: timeout,
      method: options.method || 'get',
      success: resolve,
      fail: reject,
      complete() {
        wx.hideLoading()
      }
    })
  })
}