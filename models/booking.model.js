let mongoose = require("mongoose");

let bookingSchema = new mongoose.Schema({
  screenNumber: {
    type: Number,
  },
  seatType: {
    type: String,
  },
  row: {
    type: String,
  },
  seatNumber: {
    type: Number,
  },
  price: {
    type: Number,
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
