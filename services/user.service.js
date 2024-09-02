const { userSchema } = require("../models")

let postUser = (body) => {
    return userSchema.create(body);
}

let findUserByEmail = (email) => {
    return userSchema.findOne({ email })
}

let findUserById = (id) => {
    return userSchema.findById(id)
}


let getAllUser = () => {
    return userSchema.find()
}

let findByIdAndDelete = (id) => {
    return userSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body)
}
module.exports = { postUser, findUserByEmail, getAllUser, findByIdAndDelete, findByIdAndUpdate ,findUserById};