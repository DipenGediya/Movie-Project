let mongoose = require("mongoose");

let dbConnect = () => {
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("database connected successfully");
    }).catch((error)=>{
        console.log(error,"error");
    })
}

module.exports = dbConnect