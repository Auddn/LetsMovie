//#region 원시 코드
// var http = require('http');
// var fs = require('fs');
// var qs = require('querystring');
// var url = require('url');

// var server = http.createServer(function(req, res){
//     console.log(req.url);
    
//     var parsedUrl = url.parse(req.url);
//     console.log('parsedUrl : ', parsedUrl);

//     var _qs = qs.parse(parsedUrl.query);
//     console.log('qs : ', _qs);

//     if(req.url == '/'){
//         fs.readFile('./html/index.html', (err, data)=>{
//             res.end(data);
//         })
//     }else if(req.url == '/login'){
//         fs.readFile('./html/login.html', (err, data)=>{
//             res.end(data);
//         })
//     }else if(req.url == '/signup'){
//         res.end('<h1>Sign Up Page</h1>');
//     }
// }).listen(8080, function(){
//     console.log('Listen to 8080...');
// });
//#endregion
var express = require('express');
var app = express();
var route = require('./routes/route')(app);

app.set('views', __dirname + './views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8080, function() {
    console.log('listen to 8080...');
})