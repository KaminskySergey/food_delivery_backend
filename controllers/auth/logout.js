const { User } = require('../../models/userModels')

const logout = async (req, res) => {
const {_id} = req.user;

console.log(_id, 'heloooooooooooooooooooooooooooooooooooooo')
await User.findByIdAndUpdate(_id, {token: null})
res.status(204).json()
}

module.exports = logout