let mongoose = require('mongoose')
require('dotenv').config()
let url = process.env.DATABASE_KEY
mongoose.connect(url)