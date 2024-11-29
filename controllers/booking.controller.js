const Booking = require("../models/booking.model");
const Movie = require("../models/movies.model");
const User = require("../models/user.model");
const ApiFeature = require("../utils/apiFeature");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const sendEmail = require("../utils/email");

let post_booking = catchAsync(async (req, res, next) => {
  let body = req.body;
  let duplicate = await Booking.findOne({
    screenNumber: body.screenNumber,
    seatType: body.seatType,
    row: body.row,
    seatNumber: body.seatNumber,
  });
  if (duplicate) {
    return next(new AppError("Seat already booked", 403));
  }
  let booking = await Booking.create(body);
  let movie = await Movie.findById(body.movies);
  let user = await User.findById(req.user.id);

  if (user) {
    let result = await sendEmail(
      user.email,
      "Movie Booking",
      `youe ticket for ${movie.moviesName} is book`
    );
  }
  res.status(201).json({
    message: "Booking Done Successfully",
    booking,
  });
});

let get_booking = catchAsync(async (req, res, next) => {
  const features = new ApiFeature(
    Booking.find().populate("movies theater user"),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .pagination();
  let booking = await features.query;
  res.status(200).json({
    message: "Get booking successfully",
    booking,
  });
});

let delete_booking = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let booking = await bookingService.findByIdAndDelete(id);
  res.status(200).json({
    message: "Booking delete successfully",
    booking,
  });
});

let update_booking = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let body = req.body;
  let booking = await Booking.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "Booking update successfully",
    booking,
  });
});
module.exports = { post_booking, get_booking, delete_booking, update_booking };
