const { Product } = require("../../models/productsModels");
const { Shop } = require("../../models/shopsModels");

// SEARCH ID
const getProductShopAdd = async (req, res, next) => {
    try {
        const shopId = req.params.shopId;
        const { name, price, description, quantity, favorite, avatarURL } = req.body;
    
        const shop = await Shop.findById(shopId);
    
        if (!shop) {
          return res.status(404).json({ error: 'Shop not found' });
        }
    
        const product = new Product({
          name,
          price,
          description,
          quantity,
          favorite,
          avatarURL,
          owner: shopId,
        });
    
        await product.save();
    
        shop.products.push(product);
        await shop.save();
    
        res.json({
          status: 'succes',
          code: 200,
          data: {
            product
          }
      })
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
      
    }


    module.exports = getProductShopAdd