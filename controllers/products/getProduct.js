const { Product } = require('../../models/productsModels')
console.log(Product)

    // READ
const getProduct = async (req, res, next) => {
    // const {_id} = req.shop
    console.log(req.body)
    const result = await Product.find()
    res.json({
        status: 'succes',
        code: 200,
        data: {
            result
        }
    })
    // const {page = 1, limit = 10, favorite = true} = req.query
    // const skip = (page - 1) * limit;
    // const getListAll = await Product.find({owner: _id, favorite }, "", {skip, limit: Number(limit)}).populate('owner', "email subscription")
    // res.status(200).json({ message: getListAll, status: "success" })
    
  }


  module.exports = getProduct