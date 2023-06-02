const { Shop } = require("../../models/shopsModels");
const { Product } = require("../../models/productsModels");

// SEARCH ID
const getProductWithShop = async (req, res, next) => {
    try {
        const shopId = req.params.shopId;
        const productId = req.params.productId;
    
        const shop = await Shop.findById(shopId);
        const product = await Product.findById(productId);
    
        if (!shop || !product) {
          return res.status(404).json({ error: 'Shop or product not found' });
        }
    
        shop.products.push(product);
        await shop.save();
    
        res.json({
          status: 'succes',
          code: 200,
          data: {
            shop
          }
      })
      } catch (error) {
        res.status(500).json({ error: 'Failed to add product to shop' });
      }
      
    }


    module.exports = getProductWithShop