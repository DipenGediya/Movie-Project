const Joi = require("joi")

let admin = {
    body:Joi.object().keys({
        email:Joi.string().required().trim(),
        password:Joi.string().required().trim()
    })
}

module.exports = {admin};