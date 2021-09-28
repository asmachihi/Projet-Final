const express = require('express')
const { ajoutContact } = require('../Controllers/Contact')
const router = express.Router()



router.post('/',ajoutContact)

module.exports = router