var page = require('webpage').create();
var t = Date.now();
page.open('https://nba.hupu.com/', (status) => {
    console.log("Status: " + status);
    if(status === "success") {
        page.render('example.png');
    }
    t = Date.now() - t
    console.log(t)
    phantom.exit();
});
