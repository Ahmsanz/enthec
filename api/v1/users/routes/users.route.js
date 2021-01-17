const express = require('express');
const app = express();

const controller = require('../controllers/users.controller');

app
    .get('/', controller.get)

    .get('/:userId', controller.getOneById)

module.exports = app;