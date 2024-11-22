let express = require("express");
const Movie = require("../models/movies.model");

let route = express.Router();

route.get("/", async (req, res) => {
  let movies = await Movie.getAllMovies();
  return res.render("index", { movies });
});

module.exports = route;
