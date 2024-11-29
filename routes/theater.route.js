let express = require("express");

const theaterController = require("../controllers/theater.controller");

let route = express();

route.post("/create", theaterController.post_theater);
route.get("/get", theaterController.get_theater);
route.delete("/delete/:id", theaterController.delete_theater);
route.put("/update/:id", theaterController.update_theater);

module.exports = route;
