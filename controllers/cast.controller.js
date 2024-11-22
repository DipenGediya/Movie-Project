const Cast = require("../models/cast.model");
const catchAsync = require("../utils/catchAsync");
const uploadImage = require("../utils/cloudinary");

const post_cast = catchAsync(async (req, res, next) => {
  let body = req.body;
  let { path, originalname } = req.file;

  let duplicate = await Cast.findOne({ name: body.name });
  if (duplicate) {
    return next(new AppError("Member already exist", 400));
  }

  let cloud = await uploadImage(path, originalname);
  let newBody = {
    ...body,
    image: cloud.url,
  };

  let cast = await Cast.create(newBody);
  res.status(201).json({
    message: "Member Create successfully",
    cast,
  });
});

const get_cast = catchAsync(async (req, res, next) => {
  let cast = await Cast.find();
  res.status(200).json({
    message: "get cast member success",
    cast,
  });
});

const delete_cast = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let cast = await Cast.findByIdAndDelete(id);

  res.status(200).json({
    message: "delete cast member success",
    cast,
  });
});

const update_cast = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let body = req.body;
  let { path } = req.file;
  let newBody = {
    ...body,
    image: path,
  };
  let cast = await Cast.findByIdAndUpdate(id, newBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "update cast member success",
    cast
  });
});
module.exports = { post_cast, get_cast, delete_cast, update_cast };
