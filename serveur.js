const express = require('express')
const serveur = express()
const connectDB = require('./Config/connectDB')
const produitRouter = require('./Routes/Produits')
const contactRouter = require('./Routes/Contact')
const clientRouter = require('./Routes/Client')
const panierRouter = require('./Routes/Panier')
const AdminBro = require('admin-bro');
const AdminBroExpressjs = require('admin-bro-expressjs')
const mongooseAdminBro = require('@admin-bro/mongoose');
const AdminBroExpress = require('@admin-bro/express');
const connection = require('./src/db.config');
connection.once('open', ()=>console.log('Database connected Successfully'));
connection.on('error',()=>console.log('Error', err));
const Admin = require('./src/Admin')
const Product = require('./src/Produits')
const Contact = require('./src/Contact')
const Client = require('./src/Client')
const canModifyAdmin = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin'
const {Storage} = require('@google-cloud/storage');
const uploadFeature = require('@admin-bro/upload')
const Produits = require('./src/Produits')
const Panier = require('./src/Panier')



//appel à la connexion de la base de donnée
connectDB()

 //utilisation du JSON pour qu'il soit lisible
serveur.use(express.json())

serveur.use('/uploads', express.static('uploads'));




AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {
  dashboard: {
    component: AdminBro.bundle('./my-dashboard-component')
  },
    resources: [Client,Contact,Panier,Product,
    {
    resource: Admin,  
    options: {
      properties: {
        encryptedPassword: { isVisible: false },
        password: {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          },
        },
      },
      actions: {
        new: {
          before: async (request) => {
            if(request.payload.record.password) {
              request.payload.record = {
                ...request.payload.record,
                encryptedPassword: await bcrypt.hash(request.payload.record.password, 10),
                password: undefined,
              }
            }
            return request
          },
        },
        edit: { isAccessible: canModifyAdmin },
        delete: { isAccessible: canModifyAdmin },
        new: { isAccessible: canModifyAdmin },
      }
    }},
     ]
}


  const adminBro = new AdminBro(AdminBroOptions)
  
  const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      const admin = await Admin.findOne({ email })
        if (admin) {
          if (password === admin.encryptedPassword) {
            return admin
          }
        }
      return false
    },
    cookiePassword: 'session Key',
  }
  )
  

serveur.use(adminBro.options.rootPath, router)




//appel au route produit
serveur.use('/api/produit',produitRouter)

//appel au route contact
serveur.use('/api/contact',contactRouter)

//appel au route client
serveur.use('/api/client',clientRouter)


//appel au route panier
serveur.use('/api/panier',panierRouter)



// création du serveur 

serveur.listen(5000,()=>console.log('serveur connecté au port 5000'))


serveur.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))



if (process.env.NODE_ENV === 'AdminBro') {
  serveur.use(express.static('chc/build'));
  serveur.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'chc', 'build', 'index.html'));
  });}