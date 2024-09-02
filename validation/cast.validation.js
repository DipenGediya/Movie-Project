const Joi = require("joi");

let cast = {
    body: Joi.object().keys({
        image: Joi.string().optional().trim(),
        name: Joi.string().required().trim(),
        role: Joi.string().required().trim(),
        type: Joi.string().required().trim(),
    })
}

module.exports = {cast}