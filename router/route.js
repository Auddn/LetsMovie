var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('./../public/views/movie', {});
});

router.get('/login', function(req, res) {
    res.render('./../public/views/login', {});
});

router.get('/join', function(req, res) {
    res.render('./../public/views/join', {});
});

router.get('/myPage', function(req, res) {
    res.send('<h1>NOT YET</h1>');
})

module.exports = router;