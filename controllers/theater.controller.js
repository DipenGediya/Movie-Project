const Theater = require("../models/theater.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

let post_theater = catchAsync(async (req, res, next) => {
  let body = req.body;
  let duplicate = await Theater.findOne({ name: body.name });
  if (duplicate) {
    return next(new AppError("Theater already created", 400));
  }
  let theater = await Theater.create(body);
  res.status(201).json({
    message: "theater create success",
    theater,
  });
});

let get_theater = catchAsync(async (req, res, next) => {
  let theater = await Theater.find();
  res.status(200).json({
    message: "Theater get success",
    theater,
  });
});

let delete_theater = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let theater = await Theater.findByIdAndDelete(id);
  res.status(200).json({
    message: "Theater delete success",
    theater,
  });
});

let update_theater = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let body = req.body;
  let theater = await Theater.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "Thater update successfully",
    theater
  });
});
module.exports = { post_theater, get_theater, delete_theater, update_theater };
