const mongoose = require("mongoose")

var registeredUsers = new mongoose.Schema({
    FirstName : {
        type : String,
        required: true
    },
    LastName : {
        type : String,
        required: true
    },
    Email : {
        type : String,
        required: true
    },
    Password : {
        type : String,
        required: true
    }
})

var registeredUsersModel = mongoose.model("registeredUsers",registeredUsers)
module.exports = registeredUsersModel;

