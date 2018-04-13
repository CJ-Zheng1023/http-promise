let http = require('http')
//let Promise = require('bluebird')
const urlArr = [
    'http://www.baidu.com',
    'http://www.neusoft.com',
    'http://www.hoopchina.com',
    'http://www.163.com'

]

let startRequestAsync = (url) => {
    let p = new Promise((resolve, reject) => {
        http.request(url, (res) => {
            console.log(`${url} start`)
            res.on('data', (chunck) => {

            })
            res.on('end', () => {
                console.log(`${url} is done`)
                resolve()
            })
        }).on('error', () => {
            console.log(`${url} is error`)
        }).end()
    })
    return p
}

/*Promise.map(urlArr, (url) => startRequestAsync(url)
, {concurrency: 2}).then(() => {
    console.log(`all url is done`)
}).catch((e) => {
    console.log(`error:${e.message}`)
})*/


let promises = []
for(let url of urlArr){
    promises.push(startRequestAsync(url))
}
/*Promise.all(promises).then(() => {
    console.log(`all url is done`)
}).catch((e) => {
    console.log(`error is:${e.message}`)
})*/

let shardingPromise = (sharding) => {
    let sp = Promise.all(sharding).then(() => {
        console.log(`all url is done`)
    })
    return Promise.resolve([promises[2], promises[3]])
}
let sp = shardingPromise([promises[0], promises[1]])
sp.then((sharding) => {
    shardingPromise(sharding)
})


