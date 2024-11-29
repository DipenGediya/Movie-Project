let express = require("express");
const bookingController = require("../controllers/booking.controller");
const { authController } = require("../controllers");
let route = express();

route.post("/create", authController.protect, bookingController.post_booking);
route.get("/get", bookingController.get_booking);
route.delete("/delete/:id", bookingController.delete_booking);
route.put("/update/:id", bookingController.update_booking);

module.exports = route;
