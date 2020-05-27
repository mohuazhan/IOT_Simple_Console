// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false
  },

  SwitchChange1: function (e) {
    // console.log('switch 发生 change 事件，携带值为', e.detail.value)
    if (e.detail.value == true) {
      // 设置select为true弹出<view class="show_details"...
      this.setData({ select: !this.data.select })
      // 定义循环定时任务：每2秒钟发送一次请求
      var timer = setInterval ( () => {
        wx.request({
          url: 'https://www.jianshu.com/shakespeare/v2/notes/f3e3fe861965/audio',
          method: 'GET',
          success: (res) => {
            console.log(res.data);
            var array = res.data;
            this.setData({ data: array['exists'] });
          }
        })
      }, 2000)  //代表2秒钟发送一次请求
      // 循环执行定时任务
      this.setData({ interval: timer })
    } else {
      this.setData({ select: false })
      // 关闭循环定时任务
      clearInterval(this.data.interval);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})