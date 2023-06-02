const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
      },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
    phone: {
        type: String,
        required: true
    },
    ordersUser: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'order' 
    }],
      token: {
        type: String,
        default: null,
      },
      avatarURL: {
        type: String,
        require: false,
      },
      address: {
        type: String,
        default: "",
      },
})

const User = mongoose.model('user', userScheme)

module.exports = {
    User,
}