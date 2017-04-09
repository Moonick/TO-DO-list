var express = require('express');
var todoContoller = require('./controllers/todoContoller');
var mongo = require('mongodb');
var monk = require('monk');

// var expressValidator = require('express-validator');
// var expressSession = require('express-session');

//connect to the database
var db = monk('mongodb://test:test123@ds161245.mlab.com:61245/todo-list-database');
var app = express();


//set up template engine
app.set('view engine', 'hbs');
app.use(function(req, res, next) {
    req.db = db;
    next();
});

// app.use(expressValidator());
// app.use(expressSession({ secret: '1234', saveUninitialized: false, resave: false }));

// function requireLogin(req, res, next) {
//     if (!req.expressSession.username) {
//         res.redirect('/login');
//     } else {
//         next();
//     }
// };
app.use(express.static('./public'));

todoContoller(app);

//listen to port
app.listen(process.env.PORT || 3000);