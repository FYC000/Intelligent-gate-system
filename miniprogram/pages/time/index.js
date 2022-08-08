// pages/time/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time1:'',
    tip:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var people=wx.getStorageSync('key');
    this.setData({
      time1:people.time1,
    })
  },
  formBindsubmit:function(e){
    var tim=wx.getStorageSync('key');
    tim.time1='',
    wx.setStorageSync('key', tim);
    this.setData({
      tip:'退订成功'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})