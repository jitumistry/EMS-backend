let mongoose = require('mongoose')
let adminSchema = new mongoose.Schema({
    admin: String,
    adminpsw: String
})

module.exports = mongoose.model('admin', adminSchema)