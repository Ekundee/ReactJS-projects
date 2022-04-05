const express = require('express');
const signin_controller = require('../controller/signIn_Controller');

const route = express.Router()
route.post("/api_signin", signin_controller.post_login)

module.exports = route