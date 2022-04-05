const registeredUsers_Model = require("../model/registeredUsers_Model")

const getAllUsers = async (req,res) =>{
    try{
        let allUsers = await registeredUsers_Model.find({})
        res.json(allUsers)
    }catch(e){
        console.log(e.message)
    }
}

module.exports = {
    getAllUsers
}