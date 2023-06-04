const express = require('express')

const { auth } = require('../../controllers')
console.log(auth, 'shopsshopsshopsshops')
const { authValidation, loginValidation } = require('../../middlewares/validationMiddlevares')
const { authMiddlevares } = require('../../middlewares/autorizationMiddlevares')

console.log(authValidation, 'eeeeeeeeeeeeeeeeee')

const router = express.Router()



router.post('/register', authValidation,  auth.register)
router.post('/login', loginValidation,  auth.login)
router.get('/current', authMiddlevares,  auth.current)
router.get('/logout', authMiddlevares,  auth.logout)







module.exports = router