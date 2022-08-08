//index.js
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../image/G1.jpg"
        },
        {
          "id": 2,
          "imgurl": "../../image/G2.jpg"
        },
        {
          "id": 3,
          "imgurl": "../../image/G3.jpg"
        },
      
      ]
    }; 
    that.setData({
      lunboData: data.datas
    })
  }
})
