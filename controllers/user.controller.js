const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

let getAllUser = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json({
      status: "success",
      result: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

let deleteUSer = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let result = await User.findByIdAndDelete(id);
  res.status(200).json({
    message: "delete user success",
    result,
  });
});

let updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let body = req.body;
    let result = await userService.findByIdAndUpdate(id, body);
    let newBody = {
      id,
      ...body,
    };
    res.status(200).json({
      message: "user update success",
      newBody,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
module.exports = { getAllUser, deleteUSer, updateUser };
