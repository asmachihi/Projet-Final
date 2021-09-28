const express = require('express')
const { ajoutProduit, getProduits, deleteProduit, modifProduit, getProduit,ajoutPanier } = require('../Controllers/Produits')
const router = express.Router()


//appel de la fonction ajoutProduits
router.post('/',ajoutProduit)

//appel de la fonction getProduits
router.get('/',getProduits)

//appel de la fonction getProduit
router.get('/:ID',getProduit)

//appel de la fonction deleteProduit
router.delete('/:ID',deleteProduit)

//appel de la fonction modifProduit
router.put('/:ID',modifProduit)

module.exports = router