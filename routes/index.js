let express = require("express");
let adminRoute = require("./admin.route")
let userRoute = require("./user.route")
let moviesRoute = require("./movies.route")
let castRoute = require("./cast.route")
let theaterRoute = require("./theater.route")
let bookingRoute = require("./booking.route")
let routes = express.Router();

routes.use("/admin",adminRoute);
routes.use("/user",userRoute);
routes.use("/movies",moviesRoute);
routes.use("/cast",castRoute);
routes.use("/theater",theaterRoute);
routes.use("/booking",bookingRoute)

module.exports = routes