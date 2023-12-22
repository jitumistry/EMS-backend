let express = require('express')
require('../db')
let users = require('../model/employee')

let userRouter = express.Router();

userRouter.post('/', async (req, res) => {
    let user = new users(req.body);
    let result = await user.save();
    res.send(result);
})


userRouter.post('/login', (req, res) => {
    const { name, password } = req.body;
    users.findOne({ uname: name })
        .then((user) => {
            if (user) {
                if (user.psw === password) {
                    res.json('success')
                }
                else {
                    res.json('invalid password')
                }
            }
            else {
                res.json('invalid username')
            }
        })
})





module.exports = userRouter;