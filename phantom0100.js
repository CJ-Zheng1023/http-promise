let phantom = require('phantom')
let sitePage = null
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
        console.log('start render')
        p.render('example.png');
        p.evaluate(function(){
            console.log(document.title)
            //t = Date.now() - t
            //console.log(t)
            //pInstance.exit()
        })
        /*p.includeJs('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js', function(){
            p.evaluate(function(){
                console.log(document.title)
                //let html = $('body').html()
                //console.log(html)
                t = Date.now() - t
                console.log(t)
                pInstance.exit()
            })
        })*/
    }else{
        console.log('error')
        throw new Error('url is error')
        pInstance.exit()
    }
}).catch((e) => {
    console.log(e)
    pInstance.exit()
})