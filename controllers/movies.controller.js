const Movie = require("../models/movies.model");
const catchAsync = require("../utils/catchAsync");
const uploadImage = require("../utils/cloudinary");

let postMovies = catchAsync(async (req, res, next) => {
  let body = req.body;
  let { path, originalname } = req.file;
  let cloud = await uploadImage(path, originalname);
  let newBody = {
    ...body,
    poster: cloud.url,
  };
  let result = await Movie.create(newBody);
  res.status(201).json({
    message: "movies create success",
    result,
  });

  // res.redirect("/");
});

let getAllMovies = catchAsync(async (req, res, next) => {
  console.log(req.query);
  const queryObj = { ...req.query };
  const excludingFields = ["page", "sort", "limit", "fields"];
  excludingFields.forEach((val) => {
    delete queryObj[val];
  });

  let movies = await Movie.find(queryObj);
  res.status(200).json({
    message: "get movies success",
    result: movies.length,
    movies,
  });
});

let deleteMovies = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let result = await Movie.findByIdAndDelete(id);
  res.status(200).json({
    message: "delete movies success",
    result,
  });
});

let updateMovies = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let body = req.body;
  let { path, originalname } = req.file;
  let cloud = await uploadImage(path, originalname);
  let newBody = {
    ...body,
    poster: cloud.url,
  };
  let result = await Movie.findByIdAndUpdate(id, newBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "update movies success",
    result,
  });
});

module.exports = { postMovies, getAllMovies, deleteMovies, updateMovies };
