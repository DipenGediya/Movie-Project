let express = require("express");
const { userController, authController } = require("../controllers");

let route = express();

route.post("/signup", authController.signup);
route.post("/login", authController.login);
route.get(
  "/get",
  authController.protect,
  authController.restrictTo("admin"),
  userController.getAllUser
);
route.post("/forgotPassword", authController.forgotPassword);
route.patch("/resetPassword/:token", authController.resetPassword);
route.patch('/updatePassword',authController.protect,authController.updatePassword)

route.delete("/delete/:id", userController.deleteUSer);
route.put("/update/:id", userController.updateUser);

module.exports = route;
