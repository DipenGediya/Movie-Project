let express = require("express");
const { userController, authController } = require("../controllers");

let route = express();

route.post("/signup", authController.signup);
route.post("/login", authController.login);
route.get(
  "/get",
  authController.protect,
  // authController.restrictTo("admin"),
  userController.getAllUser
);
route.post("/forgotPassword", authController.forgotPassword);
route.patch("/resetPassword/:token", authController.resetPassword);
route.patch('/updatePassword',authController.protect,authController.updatePassword)

route.delete("/deleteMe/:id", userController.deleteMe);
route.patch("/updateMe/:id", userController.updateMe);

module.exports = route;
