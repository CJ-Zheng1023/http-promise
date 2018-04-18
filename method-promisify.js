let Promise = require('bluebird')
let method = Promise.promisifyAll(require('./method'))
method.getAsync('http://www.baidu.com').then((obj) => {
    console.log(obj)
    console.log('hello~~~~~')
    setTimeout(function(){
        console.log('later 3s')
    }, 3000)
}).catch((e) => {
    console.log(e.message)

})
//let fs = require('fs')
//fs.readFile()