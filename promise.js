let Promise = require('bluebird')

let cook = () => {
    console.log('start cook')
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('end cook')
            resolve('rice')
        }, 500)
    })
    return p
}
let eat = (what) => {
    console.log(`start eat ${what}`)
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('end eat')
            resolve('plate')
        }, 500)
    })
    return p
}
let wash = (what) => {
    console.log(`start wash ${what}`)
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('end wash')
            resolve('done')
        }, 500)
    })
    return p
}
cook().then((what) => {
    return eat(what)
}).then((what) => {
    return wash(what)
}).then((what) => {
    console.log(what)
})