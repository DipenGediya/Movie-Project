let express = require("express");
const { moviesService } = require("../services");

let route = express.Router();

route.get("/", async (req, res) => {
    let movies = await moviesService.getAllMovies();
    return res.render("index",{movies})
})

module.exports = route