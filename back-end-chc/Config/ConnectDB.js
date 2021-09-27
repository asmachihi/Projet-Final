const mongoose = require('mongoose')
require('dotenv').config({path:'./Config/.env'})


const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Base de données connectée')
    } catch (error) {
        console.log('Impossible de se connecter à la base de données')
    }
}


module.exports = connectDB