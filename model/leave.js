let mongoose = require('mongoose')
let leaveSchema = new mongoose.Schema({
    code: String,
    name: String,
    designation: String,
    dates: Array,
    description: String,
    status: String
})

module.exports = mongoose.model('apply leaves', leaveSchema)