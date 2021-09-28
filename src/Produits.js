const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true    
    },
    prix:{
        type:Number,
        required:true
    },
    categories:{
       required:true,
       type:String
    },
    Remise:{
        type:Number
    },
    Stock:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Product', ProductsSchema)

