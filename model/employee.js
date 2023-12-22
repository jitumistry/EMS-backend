let mongoose = require('mongoose')
let employeeSchema = new mongoose.Schema({
    uname: String,
    email: String,
    psw: String
})

module.exports = mongoose.model('employees', employeeSchema)