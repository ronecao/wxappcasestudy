App({
  me: {},
  onLaunch(){
    wx.request({
      url: 'https://www.roneonline.net/db.json',
      success: (response) => {
        Object.assign(this.me,response.data)
      }
    })
  }
})