const Joi = require("joi");

let movies = {
    body: Joi.object().keys({
        poster: Joi.string().optional().trim(),
        moviesName: Joi.string().required().trim(),
        geners: Joi.string().required().trim(),
        duration: Joi.string().required().trim(),
        disc: Joi.string().required().trim(),
    })
}

module.exports = { movies }