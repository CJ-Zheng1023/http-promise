let Promise = require('bluebird')
let http = require('http')
let startRequest = (url) => {
    return new Promise((resolve, reject) => {
        http.request(url, (res) => {
            let html = ''
            res.on('data', (chunck) => {
                html += chunck
            })
            res.on('end', () => {
                console.log('url is done')
                resolve(html)
            })
        }).on('error', (e) => {
            console.log(e)
        }).end()
    })
}
startRequest('http://www.baidu.com').then((html) => {
    return html + '!!!!!!!!!!!!!!!!!!'
}).then((data) => {
    console.log(data)
})

