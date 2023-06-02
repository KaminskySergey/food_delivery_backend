const express = require('express')

const { shops } = require('../../controllers')
console.log(shops, 'shopsshopsshopsshops')
const { addValidationShop } = require('../../middlewares/validationMiddlevares')



const router = express.Router()



router.get('/', shops.getShop)
router.post('/', addValidationShop, shops.getShopPost)






module.exports = router