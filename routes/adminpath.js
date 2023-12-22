let express = require('express')
require('../db')
const adminSchema = require('../model/admin');


let adminRouter = express.Router();


adminRouter.post('/auth', async (req, res) => {
    let { admin, adminpsw } = req.body;
    try {
        adminSchema.findOne({ admin: admin })
            .then((user) => {
                if (user) {
                    if (user.adminpsw === adminpsw) {
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
    }
    catch {
        res.json('Invalid UserName')
    }
})




module.exports = adminRouter