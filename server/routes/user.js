var express = require('express');

var User = require('../models/user');
var crud = require('../helpers/crud');

var controllers = crud(User);

var routes = express.Router();

routes.route('/')
    .post(controllers.create)
    .get(controllers.list);

routes.route('/:id')
    .get(controllers.read)
    .put(controllers.update)
    .delete(controllers.delete);

module.exports = routes;
