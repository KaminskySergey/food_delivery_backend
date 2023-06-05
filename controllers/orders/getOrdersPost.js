const { Order } = require("../../models/ordersModels");
const { Product } = require("../../models/productsModels");


const getOrdersPost = async (req, res, next) => {
  try {
    const { user, cart, totalPrice } = req.body;
    

    let total = 0;
    let owner
    const getTotalPrice = async () => {
      let rawTotalPrice = 0;

      for (const item of cart) {
        const product = await Product.findById(item.productId).populate("owner");
        
        if (!product) {
          return res.status(400).json({ error: "Продукт не найден." });
        }

        if (item.quantity > product.quantity) {
          return res.status(400).json({ error: "Количество продукта в корзине превышает доступное количество." });
        }

        rawTotalPrice += product.price * item.quantity;

        owner = product.owner
      }
      total = parseFloat(rawTotalPrice.toFixed(2));
    };
    await getTotalPrice();

    if (totalPrice !== total) {
      return res.status(400).json({ error: "Сумма товаров в корзине не соответствует ожидаемой сумме." });
    }
    
    const order = await Order.create({ user, cart, totalPrice, shop: owner});
    
    
    for (const item of cart) {
      const product = await Product.findById(item.productId);
      if (product) {
        product.quantity -= item.quantity;
        await product.save();
      }
      
    }

    
    res.json({
      status: 'success',
      code: 201,
      data: {
        order
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = getOrdersPost