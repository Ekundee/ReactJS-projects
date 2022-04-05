const registeredUsers_Model = require("../model/registeredUsers_Model")

const post_login = async (req, res) => {
    const {firsname , lastname ,email, password} = req.body;
    try{
        var getuserDetails = await registeredUsers_Model.findOne({Email : email})
        if(getuserDetails == null){
            res.json("No user found")
        }else{
            if(getuserDetails.Password === password){
                res.json("Successful Login")
            }else{
                res.json("Invalid Password")
            }
        }
    }catch(err){
        console.log(err)
        res.json(err)
    }
}

module.exports = {
    post_login
}