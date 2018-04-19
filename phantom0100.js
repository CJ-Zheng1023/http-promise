let phantom = require('phantom')
let pInstance = null
let p = null
var t = Date.now();
phantom.create().then((instance) => {
    pInstance = instance
    return instance.createPage()
}).then((page) => {
    p =page
    return page.open('http://www.baidu.com')
}).then((status) => {
    if(status === "success") {
        return p.invokeAsyncMethod('includeJs', 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js')
    }
}).then(function(){
    return p.invokeMethod('evaluate', function(){
        return $('body').html()
        //return document.querySelector('body').innerHTML
    })
}).then(function(html){
    console.log(html)
    t = Date.now() - t
    console.log(t)
    pInstance.exit()
}).catch((e) => {
    console.log(e)
    pInstance.exit()
})