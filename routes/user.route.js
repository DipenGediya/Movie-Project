let express = require("express");
const { userController } = require("../controllers");
let validate = require("../middleware/validate");
const { userValidation } = require("../validation");
const { isLoging } = require("../middleware/auth");

let route = express();

route.post("/create", validate(userValidation.user), userController.postUser);
route.post("/login", userController.login)
route.get("/get", userController.getAllUser);
route.delete("/delete/:id", userController.deleteUSer);
route.put("/update/:id", validate(userValidation.user), userController.updateUser)

module.exports = route