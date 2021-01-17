const express = require('express');
const app = express();

const controller = require('../controllers/users.controller');

app
    /**
     * @api {GET} /users/
     * @apiDescription retrieves the users from Go REST.
     * @apiVersion 1.0.0
     * @apiGroup users
     * @apiSuccess (200) retrieves an array of users
     * @apiFailure (400) no users returned
     */
    .get('/', controller.get)

    /**
     * @api {GET} /users/
     * @apiDescription retrieves a single user and his/her posts.
     * @apiVersion 1.0.0
     * @apiGroup users
     * @apiSuccess (200) retrieves a single user and the posts authored by him/her
     * @apiFailure (400) no user returned
     */
    .get('/:userId', controller.getOneById)

module.exports = app;