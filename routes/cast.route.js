let express = require("express");
const upload = require("../middleware/upload");
const { castController } = require("../controllers");
const validate = require("../middleware/validate");
const { castValidation } = require("../validation");
const { isLoging } = require("../middleware/auth");

let route = express();

route.post("/create", upload.single("image"), validate(castValidation.cast), castController.post_cast);
route.get("/get", isLoging, castController.get_cast);
route.delete("/delete/:id", castController.delete_cast);
route.put("/update/:id", upload.single("image"), validate(castValidation.cast), castController.update_cast)


module.exports = route