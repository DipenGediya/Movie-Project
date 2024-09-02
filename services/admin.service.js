const { adminSchema } = require("../models")

let postAdmin = (body) => {
    return adminSchema.create(body)
}

let findAdminByEmail = (email) => {
    return adminSchema.findOne({ email })
}

let getAdmin = () => {
    return adminSchema.find()
}

let findByIdAndDelete = (id) => {
    return adminSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return adminSchema.findByIdAndUpdate(id, body)
}
module.exports = { postAdmin, getAdmin, findByIdAndDelete, findAdminByEmail, findByIdAndUpdate }