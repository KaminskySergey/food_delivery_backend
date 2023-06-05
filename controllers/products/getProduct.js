const { Product } = require('../../models/productsModels')


    // READ
const getProduct = async (req, res, next) => {

    const result = await Product.find()
    res.json({
        status: 'succes',
        code: 200,
        data: {
            result
        }
    })
    
  }


  module.exports = getProduct