const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

let getAllUser = catchAsync(async (req, res, next) => {
  let users = await User.find();
  res.status(200).json({
    status: "success",
    result: users.length,
    users,
  });
});

let deleteUSer = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let result = await User.findByIdAndDelete(id);
  res.status(200).json({
    message: "delete user success",
    result,
  });
});

let updateUser = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let body = req.body;
  let result = await User.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "user update success",
    result
  });
});
module.exports = { getAllUser, deleteUSer, updateUser };
