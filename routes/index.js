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


/* POST to Add User Service */
router.post('/submit', function(req, res) {
    // If it worked, set the header so the address bar doesn't still say /adduser
    res.location("validation");
    // And forward to success page
    res.redirect("validation");
});

module.exports = router;