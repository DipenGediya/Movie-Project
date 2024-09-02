const { moviesSchema } = require("../models")

let postMovies = (body) => {
    return moviesSchema.create(body)
}

let findMovieById=(id)=>{
    return moviesSchema.findById(id)
}

let getAllMovies = () => {
    return moviesSchema.find()
}

let findByIdAndDelete = (id) => {
    return moviesSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return moviesSchema.findByIdAndUpdate(id, body)
}
module.exports = { postMovies, getAllMovies, findByIdAndDelete, findByIdAndUpdate ,findMovieById}