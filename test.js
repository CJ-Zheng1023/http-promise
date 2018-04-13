var http=require('http');
var  Promise = require('bluebird');

function getPageAsync(url) {//使用Promise对象来包装获取到页面的html的方法
    return new Promise(function (resolve,reject) {
        console.log('正在爬取 ' + url + '\n');

        http.get(url,function(res){
            var html = '';
            console.log('111');
            res.on('data',function (data) {
                html += data.toString('utf-8');
            })
            res.on('end',function(){
                console.log('end');
                resolve(html);//把当前的获取到页面的html返回回去（传递下去）
            })

        }).on('error',function (e) {
            reject(e);
            console.log("获取数据出错！");
        })
    })
}

getPageAsync('http://www.neusoft.com');