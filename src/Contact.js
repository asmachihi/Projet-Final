const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    }, 
    nom_societe: {
        type:String,
        required:true
    },
    num_telephone: {
        type:Number,
        required:true
    },
    message: {
        type:String,
        required:true
    },
});

module.exports = mongoose.model('Contact', ContactSchema)