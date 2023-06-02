const Joi = require('joi');


module.exports = {
    addValidation: (req, res, next) => {
        const schema = Joi.object({
            id: Joi.string(),
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.string().required(),
            quantity: Joi.number().required(),
            favorite: Joi.boolean().valid(true, false),
            avatarURL: Joi.string().required(),
            owner: Joi.string(),
    })


    const validationResult = schema.validate(req.body);
    if(validationResult.error){
        return res.status(400).json({ status: validationResult.error.details, message: 'Oo1ps!'})
    }
    next()
},
addValidationShop: (req, res, next) => {
    const schema = Joi.object({
        id: Joi.string(),
        name: Joi.string().required(),
        location: Joi.string(),
        avatar: Joi.string(),
    })
    const validationResultShop = schema.validate(req.body);
        if(validationResultShop.error){
            return res.status(400).json({ status: validationResultShop.error.details, message: 'Oops! Not Status'})
        }
        next()
},
addValidationOrder: (req, res, next) => {
    const schema = Joi.object({
        user: Joi.object({
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          phone: Joi.string().required(),
          address: Joi.string().required(),
        }).required(),
        cart: Joi.array().items(
          Joi.object({
            productId: Joi.string(),
            name: Joi.string().required(),
            price: Joi.string().required(),
            quantity: Joi.number().required(),
            avatarURL: Joi.string().required(),
            favorite: Joi.bool().required(),
            owner: Joi.string(),
          })
        ).required(),
        totalPrice: Joi.number().required(),
      });
      
    const validationResultOrder = schema.validate(req.body);
        if(validationResultOrder.error){
            return res.status(400).json({ status: validationResultOrder.error.details, message: 'Oops! Not Status'})
        }
        next()
},
authValidation: (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        address: Joi.string().required(),
        token: Joi.string()
    })

    const validationResultFavorite = schema.validate(req.body);
    if(validationResultFavorite.error){
        return res.status(400).json({ status: validationResultFavorite.error.details, message: 'Oops! Not Status'})
    }
    next()
},

loginValidation: (req, res, next) => {
    const schema = Joi.object({
        password: Joi.string().required(),
        email: Joi.string().required(),
    })

    const validationResultFavorite = schema.validate(req.body);
    if(validationResultFavorite.error){
        return res.status(400).json({ status: validationResultFavorite.error.details, message: 'Oops! Not Status'})
    }
    next()
},

}