var express = require('express');
var app = express();
var session = require('express-session');
var fs = require('fs');
var userRouter = require('./router/user');
var movieRouter = require('./router/movie');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.use(userRouter);
app.use(movieRouter);

var server = app.listen(8080, function() {
    console.log('listen to 8080...');
})