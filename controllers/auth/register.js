const { User } = require('../../models/userModels')
const bcrypt = require('bcryptjs')





const register = async (req, res, next) => {

const {name, password, email, phone,  address, token} = req.body;

const user = await User.findOne({email})

  if (user) {
    throw new Error("Email is already in use");
  }
    
    const hashPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(15))
    
    await User.create({name, password: hashPassword, email, phone, address })

    res.status(201).json({ message: "Register User", status: "success", 
    data: {
    user: {
        name,
        email,
    },
    token
    
} 
})
}

module.exports = register;