let Promise = require('bluebird')
let http = require('http')

let startRequest = (url) => {
    let p = new Promise((resolve, reject) => {
        let req = http.request(url, (res) => {
            resolve(res)
        })
    req.on('error', (e) => {
        reject(e);
})
    req.end()
})
    return p
}
startRequest('http://www.neusoft.com').then((res) => {
    console.log(`in resolve`)
res.on('end', () => {
    console.log(`请求结束!`)
})
}).catch((e) => {
    console.log(`遇到问题${e.message}`)
})