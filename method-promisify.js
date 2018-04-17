let Promise = require('bluebird')
let method = Promise.promisifyAll(require('./method'))
method.getAsync('http://www.baidu.com').then(function(){
    console.log('hello~~~~~')
    setTimeout(function(){
        console.log('later 3s')
    }, 3000)
})