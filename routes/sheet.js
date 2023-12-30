let express = require('express')
require('../db')
let timesheets = require('../model/attendence')

let attendRouter = express.Router()


attendRouter.post('/', async (req, res) => {
    let sheet = new timesheets(req.body);
    let result = await sheet.save();
    res.send(result)
})


attendRouter.post('/check', async (req, res) => {
    let { code, name, role } = req.body;
    timesheets.find({ code: code })
        .then((user) => {
            if (user) {
                res.send(user)
            }
            else {
                res.send('Invalid')
            }
        })
        .catch(()=> {
            res.send('Invalid')
        })
})

attendRouter.get('/data/:key', async (req, res) => {
    let user = await timesheets.find({ code: req.params.key })
    res.send(user)
})


module.exports = attendRouter