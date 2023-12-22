let express = require('express')
require('./db')
let userRouter = require('./routes/registration')
let cors = require('cors')
const attendRouter = require('./routes/sheet')
const leaveRouter = require('./routes/applyleave')
const adminRouter = require('./routes/adminpath')


let app = express();
app.use(express.json());
app.use(cors());


app.use('/auth', userRouter)

app.use('/timesheet', attendRouter)

app.use('/applyleave', leaveRouter)

app.use('/admin', adminRouter)


app.listen(4000, (req, res) => {
    console.log('port starting at 4000')
})