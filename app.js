const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongosanitize = require("express-mongo-sanitize");
const xss = require('xss-clean')

const globalErrorHandler = require("./controllers/error.controller");
const userRoute = require("./routes/user.route");
const staticRoute = require("./routes/static.route");
const AppError = require("./utils/appError");
const theaterRoute = require("./routes/theater.route");
const movieRoute = require("./routes/movies.route");
const bookingRoute = require("./routes/booking.route");

const app = express();

// set security HTTP headers 
app.use(helmet());

// limit request for same api
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "To many request from this IP, Please try again in a hour!",
});
app.use("/api", limiter); 

// Data sanitization against NoSQL query injection
app.use(mongosanitize())

// Data sanitization against xss(for html code converting string)
app.use(xss())

//for json body
app.use(express.json({limit:'10kb'}));

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
