const { castSchema } = require("../models");

function post_cast(body) {
    return castSchema.create(body);
}

function findCastByName(name) {
    return castSchema.findOne({ name })
}

function get_cast() {
    return castSchema.find()
}

function findByIdAndDelete(id) {
    return castSchema.findByIdAndDelete(id)
}

function findByIdAndUpdate(id, body) {
return castSchema.findByIdAndUpdate(id,body)
}
module.exports = { post_cast, findCastByName, get_cast, findByIdAndDelete ,findByIdAndUpdate}