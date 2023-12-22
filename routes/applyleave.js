let express = require('express')
require('../db')
let leaveSchema = require('../model/leave')


let leaveRouter = express.Router();

leaveRouter.post('/', async (req, res) => {
    let user = new leaveSchema(req.body)
    let result = await user.save()
    res.send(result)
})

leaveRouter.get('/', async (req, res) => {
    let user = await leaveSchema.find();
    if (user.length > 0) {
        res.send(user)
    }
    else {
        res.send('No leave application')
    }
})


leaveRouter.post('/updatestatus/:id', async (req, res) => {
    let key = req.params.id;
    let user = await leaveSchema.findByIdAndUpdate(key, { status: 'Approved' })
    res.send(user)
})


module.exports = leaveRouter