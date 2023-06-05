const express = require('express')

const { auth } = require('../../controllers')

const { authValidation, loginValidation } = require('../../middlewares/validationMiddlevares')
const { authMiddlevares } = require('../../middlewares/autorizationMiddlevares')



const router = express.Router()



router.post('/register', authValidation,  auth.register)
router.post('/login', loginValidation,  auth.login)
router.get('/current', authMiddlevares,  auth.current)
router.get('/logout', authMiddlevares,  auth.logout)







module.exports = router