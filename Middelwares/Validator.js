const { body , validationResult } = require ('express-validator')

exports.registerRules = [
    //le champs nom ne doit pas etre vide
    body ('nom',"nom obligatoire").notEmpty(),
    // il faut respecter la syntaxe du mail
    body ('email',"e-mail invalide").isEmail(),
    // le mot de passe doit avoir au moins 6 characteres
    body ('motdepasse',"votre mot de passe doit contenir au moins 6 caractéres").isLength({min:6})
]

exports.loginRules = [
   
    // il faut respecter la syntaxe du mail
    body ('email',"vos informations sont incorrectes").isEmail(),
    // le mot de passe doit avoir au moins 6 characteres
    body ('motdepasse',"vos informations sont incorrectes").isLength({min:6})
]

exports.Validator = (req,res,next) =>{
    const result = validationResult (req)
    if (!result.isEmpty()){
        return res.status(400).send({errors:result.array()})
    }
    next()
}