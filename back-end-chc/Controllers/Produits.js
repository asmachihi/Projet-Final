const Produits = require('../src/Produits')
const AdminBro = require('admin-bro');
const Product = require('../src/Produits')



//ajout produit
//utilisation de req.body
//methode POST
exports.ajoutProduit= async(req,res)=>{
   const {nom,img,prix} = req.body
   try {
       const newProduit = await new Produits({
           nom,img,prix
       })
       newProduit.save()
       res.status(200).send({msg:"produit ajouté avec succées",newProduit})
       
   } catch (error) {
       res.status(400).send({msg:"impossible d'ajouter le produit",error})
   }
}

//affichage des produits
//methode GET

exports.getProduits = async(req,res)=>{
    try {
        const produits = await Produits.find()
        res.status(200).send({msg:"La liste des produits",produits})
        
    } catch (error) {
        res.status(400).send({msg:"impossible d'afficher les produits",error})
    }
}

//affichage d'un seul produit
//on va utiliser req.params pour récuperer l'id
//methode GET

exports.getProduit = async(req,res)=>{
    const {ID} = req.params
    try {
        const produit = await Produits.findById({_id:ID})
        res.status(200).send({msg:"Le produit",produit})
        
    } catch (error) {
        res.status(400).send({msg:"impossible d'afficher ce produit",error})
    }
}

//supprimer un produit
//on va utiliser req.params pour récuperer l'id
//method DELETE

exports.deleteProduit = async(req,res)=>{
    const {ID} = req.params
    try {
        const deleteproduit = await Produits.findByIdAndDelete({_id:ID})
        res.status(200).send({msg:"produit supprimé",deleteproduit})

    } catch (error) {
        res.status(400).send({msg:"impossible de supprimer le produit",error})
    }
}


//modification des produits
//on va utiliser req.body pour récuperer les nouveaux valeurs et req.params pour récuperer l'ID
//method PUT

exports.modifProduit = async(req,res) =>{
    const {ID} = req.params
    try {
        const modifproduit = await Produits.findOneAndUpdate(ID,{$set:{...req.body}})
        res.status(200).send({msg:"produit modifié avec succés",modifproduit})
        
    } catch (error) {
        res.status(400).send({msg:"impossible de modifier ce produits",error})
    }
}


exports.ajoutPanier = async (req, res) => {
    const {ID} = req.params
    try {
        const panier =  Produits.findOne({ _id: ID}) 
        res.status(200).send({msg:"produit ajouté au panier",panier})
    } catch (error) {
        res.status(400).send({msg:"impossible d'ajouter ce produits",error})
    }  
}