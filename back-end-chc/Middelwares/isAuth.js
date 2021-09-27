const jwt = require('jsonwebtoken')
const User = require('../src/Client')

exports.isAuth = async(req,res,next) =>{

    const token = req.headers["authorization"]

    try {
        if (!token){
            return res.status(400).sen({errors:[{msg:"Vous n'etes pas autorisé"}]})
        }
      const decoded = jwt.verify(token,process.env.secretKey)  
      const client = await Client.findById(decoded.id)
      if (!client){
          return res.status(400).send({errors:[{msg:"Vous n'etes pas autorisé"}]})
      }
      req.client = client
      next()

    } catch (error) {
       res.status(500).send({errors:[{msg:"You are not authorizated"}]}) 
    }

}