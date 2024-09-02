let mongoose = require("mongoose");

let bookingSchema = new mongoose.Schema({
    screenNumber: {
        type: Number
    },
    seatType: {
        type: String
    },
    row: {
        type: String
    },
    seatNumber: {
        type: Number
    },
    price:{
        type:Number
    },
    movies:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"moviesSchema"
    },
    theater:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"theaterSchema"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema"
    }
})

let booking = mongoose.model("bookingSchema",bookingSchema);

module.exports = booking;