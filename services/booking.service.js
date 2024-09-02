const { bookingSchema } = require("../models")

let post_booking = (body) => {
    return bookingSchema.create(body)
}

let findBookingByseatNumberAndRow = (screenNumber, seatType, row, seatNumber) => {
    return bookingSchema.findOne({ screenNumber, seatType, row, seatNumber })
}

let get_booking = () => {
    return bookingSchema.find().populate(["movies", "user", "theater"]);
}

let findByIdAndDelete = (id) => {
    return bookingSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return bookingSchema.findByIdAndUpdate(id, body)
}
module.exports = { post_booking, findBookingByseatNumberAndRow, get_booking, findByIdAndDelete, findByIdAndUpdate }