let ajax = {
    get(url, callback){
        console.log(`request url:${url}`)
        let obj = {
            rs: 'rs'
        }
        let flag = true
        if(flag){
            callback(new Error('error!!!!!!!!!'), obj)
        }else{
            callback(null, obj)
        }

    },

}

module.exports = ajax