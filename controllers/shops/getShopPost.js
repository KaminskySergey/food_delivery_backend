const { Shop } = require("../../models/shopsModels")

// POST 
const getShopPost = async (req, res, next) => {
    const addItemProduct = await Shop.create({...req.body})
    if(addItemProduct){
  
      return res.status(201).json({ message: addItemProduct, status: "success" })
    } else {
      res.status(404).json({ message: "Not found", status: "errorr" })
    }
  }


  module.exports = getShopPost