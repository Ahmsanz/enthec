const express = require('express')
const app = express();

const controller = require('../controllers/app.controller');


app
    .get('/', controller.get)

    .get('/:category', controller.getByCategory);

module.exports = app;
