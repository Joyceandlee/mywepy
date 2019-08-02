const request=(url,fn)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url:url,
            success(res){
              if(res.data.code===1){
                let data = res.data.results
                data.filter((item, index) => {
                  item.imgUrl = `http://169.254.2.2:3000/${item.imgUrl}`
                })
                fn(data)
              }
                resolve(res.data)
            },
            fail(err){
                reject(err)
            }
        })
    })
}
module.exports.request=request