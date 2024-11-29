const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const filterObj = (obj, ...allowedFields) => {
  let newObj = {};
  Object.keys(obj).forEach((field) => {
    if (allowedFields.includes(field)) newObj[field] = obj[field];
  });
  return newObj;
};

let getAllUser = catchAsync(async (req, res, next) => {
  let users = await User.find();
  res.status(200).json({
    status: "success",
    result: users.length,
    users,
  });
});

let deleteMe = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let result = await User.findByIdAndUpdate(id, { active: false });
  res.status(200).json({
    message: "delete user success",
    result,
  });
});

let updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password update. Please use /updatePassword",
        400
      )
    );
  }

  const filterBody = filterObj(req.body, "name", "email");

  let updatedUser = await User.findByIdAndUpdate(req.params.id, filterBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "user update success",
    updatedUser,
  });
});
module.exports = { getAllUser, deleteMe, updateMe };
