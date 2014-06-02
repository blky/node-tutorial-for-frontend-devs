var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var auth = require('http-auth');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var basic = auth.basic({
        realm: "Login"
    }, function (username, password, callback) { // Custom authentication method.
        callback(username === "username" && password === "password");
    }
);

app.use(auth.connect(basic));

app.use('/', routes);


// // Creating new HTTP server.
// var server = http.createServer(basic, function(req, res) {
//     // res.end("Welcome to private area - " + req.user + "!");
//     app.use('/', routes);
// });

var server = http.createServer(app);

server.listen(3000);

console.log("Server is listening on port 3000");

module.exports = app;
