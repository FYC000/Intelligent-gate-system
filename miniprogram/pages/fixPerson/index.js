// pages/fixPerson/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tip:'',
    userName:'',
    gender:'',
    idcd:'',
    telenumber:'',
    time1:'',
    address:''
  },
  formBindsubmit:function(e){
    if(e.detail.value.userName.length!=2&&e.detail.value.userName.length!=3){
     this.setData({
      tip:'提示：姓名不能为空或者输入错误！',
      userName:'',
     })
    }
    else if(e.detail.value.idcd.length!=18){
     this.setData({
      tip:'提示：身份证号不能为空或者输入错误！',
      idcd:''
     })
    }
    else if(e.detail.value.telenumber.length!=11){
     this.setData({
       tip:'提示：手机号不能为空或输入错误！',
       telenumber:'',
       rel:''
      })
    }
    else{
     this.setData({
      tip:'预约成功',
      userName:e.detail.value.userName,
      gender:e.detail.value.gender,
      idcd:e.detail.value.idcd,
      telenumber:e.detail.value.telenumber,
      address:e.detail.value.address,
      time1:e.detail.value.time1
     })
     wx.setStorageSync('key', e.detail.value);
    }
   },
   formReset:function(){
    this.setData({
     tip:'',
     userName:'',
     idcd:'',
     telenumber:'',
     time1:'',
     gender:'',
     address:''
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */

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