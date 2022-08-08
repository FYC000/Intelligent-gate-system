// index.js
// 获取应用实例

Page({
  data:{
   // text:"这是一个页面"
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
  }
 })