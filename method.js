let ajax = {
    get(url, callback){
        console.log(`request url:${url}`)
        //let rs = 'hello'
        function doSucess(){
            callback()
        }
        doSucess()
    },

}

module.exports = ajax