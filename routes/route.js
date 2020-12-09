var express = require('express');
var app = express(); 

module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('./html/index.html')
     });
     app.get('/login',function(req,res){
        res.render('./html/login.html');
    });
}