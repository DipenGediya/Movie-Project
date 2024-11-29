let mongoose = require("mongoose");

let bookingSchema = new mongoose.Schema({
  screenNumber: {
    type: Number,
    required:[true,'Please select screenNumber']
  },
  seatType: {
    type: String,
    required:[true,'Please select seatType']
  },
  row: {
    type: String,
    required:[true,'Please select row']
  },
  seatNumber: {
    type: Number,
    required:[true,'Please select seatNumber']
  },
  price: {
    type: Number,
    required:[true,'Please select price']
  },
  movies: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theater",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

let Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
