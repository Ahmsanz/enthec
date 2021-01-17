const express = require('express')
const app = express();

const controller = require('../controllers/app.controller');


app.get('/', controller.get);

module.exports = app;
