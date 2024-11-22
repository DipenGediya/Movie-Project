let mongoose = require("mongoose");

let theaterSchema = new mongoose.Schema({
    name: {
        type: String
    },
    location:{
        type:String
    },
    city:{
        type:String
    }
})

let Theater = mongoose.model("Theater",theaterSchema);

module.exports = Theater