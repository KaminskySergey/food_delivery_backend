// const { Product } = require("../../models/productsModels");
const { Shop } = require("../../models/shopsModels");

// SEARCH ID
const getProductShopAll = async (req, res, next) => {
    try {
        const shopId = req.params.shopId;
    console.log(shopId)
        const shop = await Shop.findById(shopId)

        
    
        if (!shop) {
          return res.status(404).json({ error: 'Shop not found' });
        }
        
        const result = shop.products;
        console.log(result, 'rerterterterterterter')
        res.json({
          status: 'succes',
          code: 200,
          data: {
            result
          }
      })
      } catch (error) {
        console.error('Error retrieving products:', error);
        res.status(200).json({ error: 'Failed to retrieve products' });
      }
      
    }


    module.exports = getProductShopAll