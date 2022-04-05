const express = require("express")
const signUpController = require("../controller/signUp_Controller")

const route = express.Router()
route.post("/api_signUp", signUpController.post_register)

module.exports = route