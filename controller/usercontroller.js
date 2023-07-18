const usermodel = require('../model/usermodels.js')

class usercontroller{

    static alluser = async(req , res)=>{


        try {

            const result =  await usermodel.find();
            res.send(result)



           res.status(201).send({status:true, message:"all user", result})

            
        } catch (error) {
            
        }
    
    }

    static create = async(req , res)=>{

        const {name, email} = req.body

        try {

           const newusercreae = new usermodel({
            name, email
           })

           const result = await newusercreae.save();

           res.status(201).send({status:true, message:"user create", result})

            
        } catch (error) {
            
        }
    
    }
}

module.exports = usercontroller