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

let theater = mongoose.model("theaterSchema",theaterSchema);

module.exports = theater