const { Order } = require("../../models/ordersModels");
const { User } = require("../../models/userModels");

const getOrdersHistory = async (req, res, next) => {
    
    console.log(req.body.user.email, 'wwwwwww')
    
    try {
        const orders = await Order.find();
        
        const filteredOrders = orders.filter((order) => order.user.email === req.body.user.email)
        

        const user = await User.findOne({ email: req.body.user.email });
        if (!user) {
            return res.status(404).json({ error: 'Пользователь не найден' });
          }
        
        user.ordersUser = filteredOrders.map((order) => order._id);
        await user.save();
        res.json({
            status: 'success',
            code: 201,
            data: {
              user
            }
          });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}




module.exports = getOrdersHistory