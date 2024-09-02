let express = require("express");
const { adminController } = require("../controllers");
const validate = require("../middleware/validate");
const { adminValidation } = require("../validation");
const { isLoging } = require("../middleware/auth");

let route = express.Router();

route.post("/create",validate(adminValidation.admin),adminController.postAdmin);
route.post("/login",adminController.login)
route.get("/get",isLoging,adminController.getAllAdmin);
route.delete("/delete/:id",adminController.deleteAdmin);
route.put("/update/:id",adminController.updateAdmin)

module.exports = route