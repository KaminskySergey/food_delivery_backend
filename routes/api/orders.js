const express = require('express')
const { orders } = require('../../controllers')
const { addValidationOrder } = require('../../middlewares/validationMiddlevares')
// const { authMiddlevares } = require('../../middlewares/autorizationMiddlevares')





const router = express.Router()


router.post('/', addValidationOrder,  orders.getOrdersPost)
router.post('/history',   orders.getOrdersHistory)
router.delete('/clear', orders.getOrdersClear)



module.exports = router