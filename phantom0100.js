let phantom = require('phantom')
let $ = require('cheerio')
let pInstance = null
let p = null
var t = Date.now();
phantom.create().then((instance) => {
    pInstance = instance
    return instance.createPage()
}).then((page) => {
    p =page
    return page.open('http://www.hoopchina.com')
}).then((status) => {
    if(status === "success") {
        return p.invokeMethod('evaluate', function(){
            return document.querySelector('body').innerHTML
        })
    }
}).then((html) => {
    console.log($(html).find('.playerNum').html())
    t = Date.now() - t
    console.log(t)
    pInstance.exit()
}).catch((e) => {
    console.log(e)
    pInstance.exit()
})