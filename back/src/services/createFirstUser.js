const userModel = require("../models/user.model")
const uuidv1 = require('uuid/v1')
exports.checkFirstUserAndCreateIfDontExist = async function () {
    const activationKey = uuidv1()
    const body = {
        email:"admin@mail.com",
        telephone:"541169731342",
        password:"admin",
        role:"admin",
        name:"admin",
        activationKey:activationKey,
        active:true,
        hasCompletedRegistration:true
    }
 
    const user = new userModel(body)
    try{
        let tryUser = await userModel.findOne({telephone:"541169731342"})
        if(!tryUser){
            const savedUser = await user.save()
            return savedUser
        }
       
    }
    catch{
        return null
    }
    
}