const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({

    nom: {
      type: String,
      required: true,
    },  
    prénom: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
   motdepasse:{
      type:String,
      required: true
    },
    nom_societe:{
      type:String,
      required: true
    },
    num_telephone:{
      type:Number,
      required: true
    }

  });
  
module.exports = mongoose.model('Client',ClientSchema);