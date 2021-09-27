const express = require('express')
const { ajoutPanier, getPaniers } = require('../Controllers/Panier')
const router = express.Router()


//appel de la fonction ajoutCommande
router.post('/',ajoutPanier)

//appel de la fonction getCommandes
router.get('/',getPaniers)


module.exports = router