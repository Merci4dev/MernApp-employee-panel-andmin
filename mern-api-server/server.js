require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middlewares/logger')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const corsOptions = require('./config/corsOptions')
const mongoose = require('mongoose')
const connectDB =  require('./config/dbConnection')
const {logEvents} =  require('./middlewares/logger')

const PORT = process.env.PORT || 3333

// to connect the db
connectDB()

// as one we run de the browser this will be executed
app.use(logger)

// handle the url which can meke request ro our api
// app.use(cors())
app.use(cors(corsOptions))

// to inplementate cookies
app.use(cookieParser())

// Middleware
// indicate express where to find the statics files
app.use('/', express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'))
app.use(express.json())

// Routes
// render the index pages
app.use('/', require('./routes/root'))
app.use('/auth', require('./routes/authRoutes'))
// render the user routes
app.use('/users', require('./routes/usersRoutes'))
app.use('/notes', require('./routes/notesRoutes'))

// render all page paht which are not found ahd return an 404 page.
app.all('*', (req, res) => {
    res.status(404)

    // look for the kind of reques which wi want to send
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))

    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })

    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

// wrap the listener event into the db connection 
mongoose.connection.once('open', () =>{
    console.log('Connected to MongoDB')
    
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

// handle the db connection error
mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
