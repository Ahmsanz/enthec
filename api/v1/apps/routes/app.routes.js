const express = require('express')
const app = express();

const controller = require('../controllers/app.controller');


app
    /**
     * @api {GET} /find/
     * @apiDescription retrieves the apps from Google Play Store
     * @apiVersion 1.0.0
     * @apiGroup apps
     * @apiSuccess (200) retrieves an array of five apps
     * @apiFailure (400) no apps returned
     */
    .get('/', controller.get)

    /**
     * @api {GET} /find/:category
     * @apiDescription retrieves the apps from Google Play Store from the given category
     * @apiVersion 1.0.0
     * @apiGroup apps
     * @apiSuccess (200) retrieves an array of five apps
     * @apiFailure (400) no apps returned
     */
    .get('/:category', controller.getByCategory);

module.exports = app;
