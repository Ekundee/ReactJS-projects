const express = require("express")
const getUsers_controller= require("../controller/getUsers_controller")

let route = express.Router()
route.get("/api_getUsers",getUsers_controller.getAllUsers)

module.exports = route