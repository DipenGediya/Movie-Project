const express = require("express");
const globalErrorHandler = require("./controllers/error.controller");
const userRoute = require("./routes/user.route");
const staticRoute = require("./routes/static.route");
const AppError = require("./utils/appError");
const theaterRoute = require("./routes/theater.route");
const movieRoute = require("./routes/movies.route");
const bookingRoute = require("./routes/booking.route");

const app = express();

//for json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use("/api/v1/users", userRoute);
app.use("/api/v1/theaters", theaterRoute);
app.use("/api/v1/movies", movieRoute);
app.use("/api/v1/bookings", bookingRoute);

app.use("/", staticRoute);
app.use("*", (req, res, next) => {
  next(new AppError(`Cann't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
