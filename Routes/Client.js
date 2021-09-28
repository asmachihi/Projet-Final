const express = require ('express')
const { signUp, signIn, ajoutClient, getClients, update_client } = require('../Controllers/Client')
const { isAuth } = require('../Middelwares/isAuth')
const { Validator, registerRules, loginRules } = require('../Middelwares/Validator')
const router = express.Router()



//appel de la fonction signUp
router.post('/signUp',registerRules,Validator,signUp)

//appel de la fonction signIn
router.post('/signIn',loginRules,Validator,signIn)

//verifier l'authentification de l'utilisateur
router.get('/current',isAuth,(req,res)=>res.send({client:req.client}))

//appel de la fonction ajout
router.post('/',ajoutClient)

//appel de la fonction get
router.get('/client',getClients)

//appel de la fonction update
router.put('/:ID',update_client)


module.exports = router