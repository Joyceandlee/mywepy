// pages/index/index.js
import {request} from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvList:[],
    page:1,
    pages:7
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const url ="http://169.254.2.2:3000/getmvlist"
    request(url,this.getMvList)
  },
  getMvList(list){
    this.setData({
      mvList:list
    })
  },
  goDetail(e){
    const {name,mv}=e.target.dataset;

    console.log(name,mv)
    wx.navigateTo({
      url:`/pages/detail/index?nm=${name}&url=${mv}`
    })
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