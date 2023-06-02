

const getOrdersClear = async (req, res) => {
    try {
        const { cart } = req.body;
        console.log(cart, 'qqqqqqqqqqqqqq')
        cart.splice(0)
    res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = getOrdersClear