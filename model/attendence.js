let mongoose = require('mongoose')
let attendanceSchema = new mongoose.Schema({
    code: Number,
    level: String,
    elevel: String,
    dcode: Number,
    rcode: Number,
    name: String,
    dpt: String,
    dat: String,
    pcode: Number,
    prcode: Number,
    role: String,
    manager: String,
    hours: Number,
    acode: Number,
    pdes: String
})

module.exports = mongoose.model('attendances', attendanceSchema)