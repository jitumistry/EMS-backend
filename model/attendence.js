let mongoose = require('mongoose')
let attendanceSchema = new mongoose.Schema({
    code: String,
    level: String,
    elevel: String,
    dcode: String,
    rcode: String,
    name: String,
    dpt: String,
    dat: String,
    pcode: String,
    prcode: String,
    role: String,
    manager: String,
    hours: String,
    acode: String,
    pdes: String
})

module.exports = mongoose.model('attendances', attendanceSchema)
