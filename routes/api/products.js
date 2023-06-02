const express = require('express')
const { products } = require('../../controllers')
const { addValidation } = require('../../middlewares/validationMiddlevares')




const router = express.Router()

router.get('/', products.getProduct)

router.get('/shops/:shopId/products', products.getProductShopAll)
router.post('/shops/:shopId/products/', addValidation, products.getProductShopAdd)

router.post('/shops/:shopId/products/:productId', products.getProductWithShop)





module.exports = router

