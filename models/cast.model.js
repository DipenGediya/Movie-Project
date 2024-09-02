let mongoose = require("mongoose");

let castSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String
    },
    role: {
        type: String
    },
    type: {
        type: String
    }    
})

let cast = mongoose.model("castSchema",castSchema)

module.exports = cast
