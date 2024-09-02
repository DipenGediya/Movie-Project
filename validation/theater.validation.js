const Joi = require("joi");

let theater = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        location: Joi.string().required().trim(),
        city: Joi.string().required().trim(),
    })
}

module.exports = {theater}