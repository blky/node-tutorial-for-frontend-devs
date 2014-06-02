var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET Form page. */
router.get('/form', function(req, res) {
    res.render('form', { title: 'Login' })
});

/* GET Validation page. */
router.get('/timeout', function(req, res) {
    x = Math.random();
    console.log(x);
    bool = x < 0.9;
    if (bool) {
        res.render('pass', {xval: x, xbool: bool})
    }
    else {
        // timeout
    }
});

/* GET Validation page. */
router.get('/passfail', function(req, res) {
    x = Math.random();
    console.log(x);
    bool = x < 0.9;
    if (bool) {
        res.render('pass', {xval: x, xbool: bool});
    }
    else {
        res.render('fail', {xval: x, xbool: bool});
    }
});

/* GET Fail page. */
router.get('/fail', function(req, res) {
    res.render('fail');
});

/* GET Pass page. */
router.get('/pass', function(req, res) {
    res.render('pass');
});

/* POST to Add User Service */
router.post('/form', function(req, res) {
    res.location("form");
    res.redirect("form");
});

/* POST to Add User Service */
router.post('/submit', function(req, res) {
    x = Math.random();
    console.log(x);
    bool = x < 0.9;
    if (bool) {
        res.render("pass", {xval: x, xbool: bool, username: req.param('username'), password: req.param('password')});
    }
    else {
        // timeout
    }
});

module.exports = router;