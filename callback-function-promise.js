let Promise = require('bluebird')
let obj = {}
let func1Promise = (obj) => {
    return  new Promise((resolve, reject) => {
        obj.func1 = 'func1'
        console.log('do func1')
        resolve(obj)
    })
}
let func2Promise = (obj) => {
    return  new Promise((resolve, reject) => {
        obj.func2 = 'func2'
        console.log('do func2')
        resolve(obj)
    })
}
let func3Promise = (obj) => {
    return  new Promise((resolve, reject) => {
        obj.func2 = 'func3'
        console.log('do func3')
        resolve(obj)
    })
}
func1Promise(obj).then((obj) => {
    return func2Promise(obj)
}).then((obj) => {
    return func3Promise(obj)
}).then((obj) => {
    console.log(obj)
    return new Promise((resolve, reject) => {
        return resolve(2)
    })
}).then((val) => {
    return 5 * val
}).then(function(obj){
    console.log(obj)
})