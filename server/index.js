var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes');

mongoose.connect('mongodb://localhost/crebit');

var app = new express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/users', routes.user);

app.listen(3000);
console.log('Listening on port: 3000');
