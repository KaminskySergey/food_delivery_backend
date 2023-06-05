
const mongoose = require('mongoose');
// import {productScheme} from '../'

const orderSchema = new mongoose.Schema({
  user: {
    name: { 
      type: String, 
      required: true 
    },
    email: {
      type: String, 
      required: true 
    },
    phone: {
      type: String, 
      required: true 
    },
    address: { 
      type: String, 
      required: true 
    },
    
  },
  cart: [{
    
      productId: {
        type: String,
        required: true,
        
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      avatarURL: {
        type: String,
        required: true,
      },
      favorite: {
      type: Boolean,
      default: false,
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    },
    
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shop',
  }
  
},

);

const Order = mongoose.model('order', orderSchema);

module.exports = {
  Order,
};