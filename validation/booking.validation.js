const Joi = require("joi");

let booking = {
    body: Joi.object().keys({
        screenNumber: Joi.number().integer().required(),
        seatType: Joi.string().required().trim(),
        row: Joi.string().required().trim(),
        seatNumber: Joi.number().integer().required(),
        price: Joi.number().positive().required(),
        movies: Joi.string().required().trim(),
        theater: Joi.string().required().trim(),
        user: Joi.string().required().trim(),
        
    })
}

module.exports = {booking}