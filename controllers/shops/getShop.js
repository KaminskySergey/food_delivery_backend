const { Shop } = require('../../models/shopsModels')
console.log(Shop)

    // READ
const getShop = async (req, res, next) => {
    
    const result = await Shop.find({})
    res.json({
        status: 'succes',
        code: 200,
        data: {
            result
        }
    })
    
}


module.exports = getShop