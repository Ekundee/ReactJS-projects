const registeredUsers_Model = require("../model/registeredUsers_Model")

const post_register = async (req,res) => {
    try{
        const {firstname, lastname, email, password} = req.body;
        const checkForDuplicate = await registeredUsers_Model.findOne({Email : email})
        if(checkForDuplicate == null){
            var userinfo = new registeredUsers_Model({
                FirstName : firstname,
                LastName : lastname,
                Email : email,
                Password : password
            })
            userinfo.save()
            res.json("User registered successfully")
        }else{
            res.json("User already exists")
        }
    }catch(err){
        console.log(err)
        res.json("User not registered")
    }
}

module.exports = {post_register};
 
