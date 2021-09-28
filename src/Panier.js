
const mongoose = require('mongoose')

const PanierSchema = new mongoose.Schema({
   
        nom: { type: String, },
        quantite: { type: Number, },
        imageUrl: { type: String, },
        prix: { type: Number, },
        produit: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        }
    
});

module.exports = mongoose.model('Panier', PanierSchema)

