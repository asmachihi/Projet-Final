const Contact = require('../src/Contact')


//affichage des contacts
exports.getContacts = async(req,res)=>{
    try {
        const contacts = await Contact.find()
        res.status(200).send({msg:"La liste des produits",contacts})
        
    } catch (error) {
        res.status(400).send({msg:"impossible d'afficher les produits",error})
    }
}



//ajout d'un contact
exports.ajoutContact= async(req,res)=>{
    const {nom,email,nom_societe,num_telephone,message} = req.body
    try {
        const newContact = await new Contact({
            nom,email,nom_societe,num_telephone,message
        })
        newContact.save()
        res.status(200).send({msg:"produit ajouté avec succées",newContact})
        
    } catch (error) {
        res.status(400).send({msg:"impossible d'ajouter le produit",error})
    }
 }