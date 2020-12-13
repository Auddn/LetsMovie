var express = require('express'); // express 객체
var session = require('express-session');
var router = express.Router(); // 라우터 객체

router.get('/', function(req, res) {
    res.render('./../public/views/movie', {});
});

router.get('/movieBook', function(req, res) {
    res.render('./../public/views/movieBook', {});
});

router.get('/movieTeacher', function(req, res) {
    res.render('./../public/views/movieTeacher', {});
})

module.exports = router;