let mongoose = require("mongoose");

let adminSchema = new mongoose.Schema({
    email:{
        type :String,
    },
    password:{
        type:String,
    }
})

let admin = mongoose.model("adminSchema",adminSchema)

module.exports = admin