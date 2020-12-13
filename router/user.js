var express = require('express');
var session = require('express-session');
var mysql = require('mysql');
var router = express.Router();

router.use(express.urlencoded({ extended: false }));

var conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'gyjd4404',
    database: 'mydb'
}); 
conn.connect();

router.get('/login', function(req, res) {
    console.log()
    res.render('./../public/views/login', {});
});

router.post('/login', function(req, res) {
    var id = req.body.username;
    var pw = req.body.password;
    var sql = 'SELECT * FROM users WHERE idUsers = ?';

    conn.query(sql, [id], function(err, results, fields) {
        if(err) throw err;

        if(results.length > 0) {
            if(results[0].pwUsers == pw){
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        } else {
            console.log(results);
            res.redirect('/login');
        }
    });
});

router.get('/join', function(req, res) {
    res.render('./../public/views/join', {});
});

router.post('/join', function(req, res) {
    var id = req.body.username;
    var pw = req.body.password;
    var pwch = req.body.passwordCheck;
    var name = req.body.name;
    var birth = req.body.birth;
    var pnum = req.body.birth;
    // var sql = 'INSERT INTO users (idUsers, pwUsers, nameUsers, birthUsers, hpUsers) VALUES (?, ?, ?, ?, ?)';
    var idCheckSql = 'SELECT * FROM users WHERE idUsers = ?';

    if(pw != pwch) {
        router.redirect('/join');
    } else {
        conn.query(idCheckSql, [id], function(err, results, fields) {
            if(err) throw err;

            if(results.length != 0) {
                console.log('Duplicate ID', results);
                res.redirect('/join');
            } else {
                conn.query('INSERT INTO users (idUsers, pwUsers, nameUsers, birthUsers, hpUsers) VALUES ("' + id + '","' + pw + '","' + name + '","' + birth + '","' + pnum + '")', function(err, results, fields) {
                    if(err) throw err;
                    console.log('insert to (id: ' + id + ' pw: ' + pw + ')');
                    res.redirect('/login');
                });
            }
        });
    }

});

router.get('/myPage', function(req, res) {
    res.render('./../public/views/myPage', {});
});

router.post('/myPage', function (req, res) {
    res.redirect('/login');
});

module.exports = router;