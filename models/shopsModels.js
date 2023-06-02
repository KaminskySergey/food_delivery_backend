const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: { 
    type: String, 
    // required: [true , 'Set name for shop']
  },
  location: { 
    type: String, 
    required: true 
  },
  avatar: {
    type: String,
    required: true,
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }]
})


const Shop = mongoose.model('shop', shopSchema);

module.exports = {
    Shop,
} 