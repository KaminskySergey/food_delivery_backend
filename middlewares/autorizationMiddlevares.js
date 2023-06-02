const { User } = require('../models/userModels')
const jwt = require('jsonwebtoken');
require("dotenv").config();

const {SECRET_KEY} = process.env;
console.log(SECRET_KEY, 'SECRET_KEYSECRET_KEYSECRET_KEY')
const authMiddlevares = async (req, res, next) => {


    const {authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(" ")
console.log(token, 'tokentokentokentokentokentoken')
try {
    if(bearer !== "Bearer"){
        return res.status(401).json({ message: "Not authorized" })
    }
    
    const {id} = jwt.verify(token, SECRET_KEY)
    console.log(id, 'iddddddddddddddddddddddddddddddddddddddddd')
    const user = await User.findById(id)
    console.log(user, '---------------------------------------')
    if(!user || !user.token){
        console.log(user)
        return res.status(401).json({ message: "Not authorized2" })
    }
    req.user = user
    next()
} catch (error) {
    if(error){
        return res.status(401).json({ message: "Invalid Sugnature" })
    }
    next(error)
}

}


module.exports = {
    authMiddlevares,
}