const Panier = require("../src/Panier")
const Produits = require('../src/Produits')

//ajout produit
//utilisation de req.body
//methode POST
exports.ajoutPanier= async(req,res)=>{
    const {nom,imageUrl,prix,quantite} = req.body
    const {ID} = req.params
    try {
        // if (ID === Produits._id){
        const newPanier = await new Panier({
            nom,imageUrl,prix,quantite
        })
        newPanier.save()
        res.status(200).send({msg:"Commande validé avec succées",newPanier})
     
        // else{
        //     res.status(300).send({msg:"impossible d'ajouter ce produits au panier"})
        // }
       
        
    } catch (error) {
        res.status(400).send({msg:"impossible de valider votre commande",error})
    }
 }
 
 //affichage des produits
 //methode GET
 
 exports.getPaniers= async(req,res)=>{
     try {
         const paniers = await Panier.find()
         res.status(200).send({msg:"La liste des commandes",paniers})
         
     } catch (error) {
         res.status(400).send({msg:"impossible d'afficher les commandes",error})
     }
 }