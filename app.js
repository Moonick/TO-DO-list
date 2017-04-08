var express = require('express');
var todoContoller = require('./controllers/todoContoller');
var mongo = require('mongodb');
var monk = require('monk');

//connect to the database
var db = monk('mongodb://test:test123@ds161245.mlab.com:61245/todo-list-database');
var app = express();


//set up template engine
app.set('view engine', 'hbs');
app.use(function(req, res, next) {
    req.db = db;
    next();
})
app.use(express.static('./public'));

todoContoller(app);

//listen to port
app.listen(3000);