const express = require('express')
const { orders } = require('../../controllers')
const { addValidationOrder } = require('../../middlewares/validationMiddlevares')





const router = express.Router()


router.post('/', addValidationOrder,  orders.getOrdersPost)
router.delete('/clear', orders.getOrdersClear)



module.exports = router