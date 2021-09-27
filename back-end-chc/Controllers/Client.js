const Client = require('../src/Client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//affichage des clients
exports.getClients = async(req,res)=>{
    try {
        const clients = await Client.find()
        res.status(200).send({msg:"La liste des produits",clients})
        
    } catch (error) {
        res.status(400).send({msg:"impossible d'afficher les produits",error})
    }
}



//ajout d'un nouveau client
exports.ajoutClient= async(req,res)=>{
    const {nom,email,nom_societe,num_telephone,motdepasse} = req.body
    try {
        const findClient= await Client.findOne({email})
        if(findClient){
            return res.status(400).send({errors:[{msg:"email existe déjà"}]})
        }
        const newClient = await new Client({
            nom,email,nom_societe,num_telephone,motdepasse
        })
        newClient.save()
        res.status(200).send({msg:"produit ajouté avec succées",newClient})
        
    } catch (error) {
        res.status(400).send({msg:"impossible d'ajouter le produit",error})
    }
 }

 //updateClient
 exports.update_client= async(req,res)=>{
    try {
        const{ID}= req.params
        const putclient = await Client.findByIdAndUpdate({_id:ID},{$set:{...req.body}})
        res.status(200).send({msg:"Client modifié avec succées",putclient})
    } catch (error) {
        res.status(500).send({msg:"Impossible de modifier cet élément dans la base de données"})
    }
}



 exports.signUp = async(req,res) =>{

    //on va utiliser req.body pour avoir un acces au données enregistrer 
   const {nom,email,motdepasse,nom_societe,num_telephone} = req.body
    try {
        // on cherche l'existance dans mail dans la base de données
        const findClient = await Client.findOne({email})

        //s'il exist on doit quitter
        if (findClient){
            return res.status(400).send({errors:[{msg:"Client existe déjà"}]})
        }

        // on va créer un nouvelle utilisateur
        const client = new Client ({
            nom,email,motdepasse,nom_societe,num_telephone
        })

        //on va crypté le mot de passe à l'aide du package 'bcrypt'
        const salt = 10
        const hash = await bcrypt.hash(motdepasse,salt)
        client.motdepasse = hash

        // on enregistre les nouveaux données
        await client.save()

        // on récupere l'id de payload
        const payload ={
            id : client._id 
        }
         // on crée le token avec la fonction prédefinie 'sign()'
        const token = jwt.sign(payload,process.env.secretKey,{expiresIn : "12h"})


        // on affiche le message OK et on attribut le nouvel utilisateur 'user' et on rajoute le 'token' afin de crypté le mp
        res.status(200).send({msg:"Client enregistré avec succées",client,token})



    } catch (error) {
        res.status(400).send({errors:[{msg:"Impossible de s'inscrire"}]})
    }
}

exports.signIn = async(req,res) =>{

     // on doit récuperer le mail et le mot de passe de req body 
    const {email,motdepasse} = req.body

    try {

         // on va chercher l'existance du mail
     const client = await Client.findOne({email})
    //  console.log(client)
        // test sur l'existance de l'utilisateur avec mail si non on retourne
     if (!client){
         return res.status(400).send({errors:[{msg:"Client introuvable !"}]})
     }
     // on va comparer le mot de passe entrer avec le mot de passe enregistrer dans la base de données 
     const match = await bcrypt.compare(motdepasse,client.motdepasse)

     // test sur l'existance de l'utilisateur avec mot de passe si non on retourne
     if (!match){
         return res.status(400).send({errors:[{msg:"Client introuvable !"}]})
     }
     
     // on recupere l'id générer automatiquement dans la base de données
     const payload ={
         id: client._id
     }
      
    const token = jwt.sign(payload,process.env.secretKey,{expiresIn :'12h'})
    res.status(200).send({msg: "Client connecté",client,token}) 
    } 
    catch (error) {
        res.status(400).send({errors:[{msg:"Impossible de se connecter"}]})
    }
}