const { User } = require('../../models/userModels')
const bcrypt = require('bcryptjs')




// console.log(sendEmail)
const register = async (req, res, next) => {

const {name, password, email, phone,  address} = req.body;

const user = await User.findOne({email})

if(user){
    return res.status(409).json({ message: "Email in use" })
    
}   

    
    const hashPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(15))
    
    await User.create({name, password: hashPassword, email, phone, address })

    res.status(201).json({ message: "Register User", status: "success", data: {
    user: {
        name,
        email,
        
    }
} })
}

module.exports = register;