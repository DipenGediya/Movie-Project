let express = require("express")
const validate = require("../middleware/validate")
const { theaterValidation } = require("../validation")
const theaterController  = require("../controllers/theater.controller")

let route = express()

route.post("/create",validate(theaterValidation.theater),theaterController.post_theater);
route.get("/get",theaterController.get_theater);
route.delete("/delete/:id",theaterController.delete_theater);
route.put("/update/:id",validate(theaterValidation.theater),theaterController.update_theater)

module.exports = route