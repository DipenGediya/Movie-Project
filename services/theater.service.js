const { theaterSchema } = require("../models")

let post_theater = (body) => {
    return theaterSchema.create(body)
}

let findTheaterByName = (name) => {
    return theaterSchema.findOne({ name })
}

let get_theater = () => {
    return theaterSchema.find()
}

let findByIdAndDelete = (id) => {
    return theaterSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return theaterSchema.findByIdAndUpdate(id, body)
}
module.exports = { post_theater, get_theater, findByIdAndDelete, findTheaterByName ,findByIdAndUpdate}