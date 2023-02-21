const express = require('express')
const mongoose = require('mongoose');

const cors = require('cors')

const userRoutes = require('./routes/user-routes')
const taskRoutes = require('./routes/task-routes')

const app = express();

//todo ENV
const db = 'mongodb://127.0.0.1:27017/taskApp';

mongoose.connect(db, (err) => {
    if (!err) {
        console.log("DB CONNECTED")
    } else {
        console.log(err)
    }
})


const PORT = process.env.PORT || 4000

//middlewares
app.use(express.json());
app.use(cors())

//routes
app.use('/api', userRoutes)
app.use('/api', taskRoutes)


app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`))