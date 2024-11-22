let express = require("express");
const validate = require("../middleware/validate");
const { bookingValidation } = require("../validation");
const bookingController  = require("../controllers/booking.controller");
let route = express()

route.post("/create",validate(bookingValidation.booking),bookingController.post_booking);
route.get("/get",bookingController.get_booking);
route.delete("/delete/:id",bookingController.delete_booking);
route.put("/update/:id",validate(bookingValidation.booking),bookingController.update_booking);

module.exports = route