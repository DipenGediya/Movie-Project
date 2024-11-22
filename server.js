require("dotenv").config();
const mongoose = require("mongoose");
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
const app = require("./app");
// let cors = require("cors");

// app.use(cors({
//     origin: 'http://127.0.0.1:5500', // Replace with your frontend's address
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
//     credentials: true, // Allow cookies or authentication headers to be sent
// }));

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("database connected successfully");
});

let server = app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
