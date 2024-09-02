let mongoose = require("mongoose");

let moviesSchema = new mongoose.Schema({
    poster: {
        type: String,
    },
    moviesName: {
        type: String,
    },
    geners: {
        type: String,
    },
    duration: {
        type: String,
    },
    disc: {
        type: String,
    }
})
let movies = mongoose.model("moviesSchema", moviesSchema);
module.exports = movies