var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
	res.render('helloworld', { title: 'Hello, World!' })
});

/* GET Form page. */
router.get('/form', function(req, res) {
    res.render('form', { title: 'Form!' })
});

/* GET Validation page. */
router.get('/validation', function(req, res) {
    res.render('validation', { title: 'Validation', validate: 'Passed!' })
});

/* GET Fail page. */
router.get('/fail', function(req, res) {
    res.render('fail', { title: 'Validation', validate: 'Failed!' })
});

/* GET Pass page. */
router.get('/pass', function(req, res) {
    res.render('pass', { title: 'Validation', validate: 'Passed!' })
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
    if (x < 0.5) {
        res.location("pass");
        res.redirect("pass");
    }
    else {
        res.location("fail");
        res.redirect("fail");
    }
});

module.exports = router;