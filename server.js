require("dotenv").config();
let express = require("express");
let http = require("http");
const dbConnect = require("./db/dbConnect");
const routes = require("./routes");
let cors = require("cors");
const cookieParser = require("cookie-parser");
const staticRoute = require("./routes/static.route")

let app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true  // This is crucial to allow cookies to be sent
}))

//for json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//cookies parser
app.use(cookieParser())

app.set("view engine", "ejs")
app.use("/v1", routes)

app.use("/", staticRoute)
//connect database 
dbConnect();

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}`);
})