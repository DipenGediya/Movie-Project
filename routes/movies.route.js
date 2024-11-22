let express = require("express");
const { moviesController, authController } = require("../controllers");
const upload = require("../middleware/upload");
const validate = require("../middleware/validate");
const { moviesValidation } = require("../validation");

let route = express.Router();

route.post(
  "/create",
  upload.single("poster"),
  validate(moviesValidation.movies),
  moviesController.postMovies
);
route.get("/get", authController.protect, moviesController.getAllMovies);
route.delete("/delete/:id", moviesController.deleteMovies);
route.put(
  "/update/:id",
  upload.single("poster"),
  validate(moviesValidation.movies),
  moviesController.updateMovies
);

module.exports = route;
