const express = require('express');
const UsersController = require('./controllers/UsersController');

const routes = express.Router();

routes.post('/user', UsersController.store);

module.exports = routes;