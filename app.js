require('dotenv').config()
require('express-async-errors')
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

//View engine

app.set('view engine', 'ejs')

//router
const router = require('./routes/router')
//Middleware
app.use(bodyParser.json())

const connectDb = require('./db/connect')

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './public')))

app.use('/', router)

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`listening on port ${port}`))
    } catch (error) {
        console.log(error.message)
    }
} 

start()

