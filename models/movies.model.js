let mongoose = require("mongoose");

let moviesSchema = new mongoose.Schema({
    poster: {
        type: String,
        required:[true,'A movie must have poster']
    },
    moviesName: {
        type: String,
        required:[true,'A movie must have name']
    },
    geners: {
        type: String,
        required:[true,'A movie must have geners']
    },
    duration: {
        type: String,
        required:[true,'A movie must have duration']
    },
    disc: {
        type: String,
        required:[true,'A movie must have discription']
    },
    price:{
        type:Number,
        required:[true,'A movie must have price']
    }
})
let Movie = mongoose.model("Movie", moviesSchema);
module.exports = Movie