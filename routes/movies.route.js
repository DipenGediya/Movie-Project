let express = require("express");
const { moviesController, authController } = require("../controllers");
const upload = require("../middleware/upload");

let route = express.Router();

route.post("/create", upload.single("poster"), moviesController.postMovies);
route.get("/get", authController.protect, moviesController.getAllMovies);
route.delete("/delete/:id", moviesController.deleteMovies);
route.put(
  "/update/:id",
  upload.single("poster"),
  moviesController.updateMovies
);

module.exports = route;
