const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    avatarURL: {
      type: String,
      require: true,
    },
    
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'shop',
    },
    
  })


  const Product = mongoose.model('product', productScheme)

  module.exports = {
    Product,
    productScheme,
  };


