'use strict'

const config = require('../config')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const errorHandler = require('../middlewares/error-handler')
const apiRouter = require('../routes/api')
const passport = require('passport')
const passportJwt = require('../services/passport')
var cookieParser = require('cookie-parser')
const { checkFirstUserAndCreateIfDontExist } = require('./createFirstUser')



const app = express()

app.set("trust proxy", 1);



app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors({credentials: true, origin: true,  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,}))

app.use(bodyParser.json())
app.use(express.static('img'))

app.use(helmet())
app.use(cookieParser())
if (config.env !== 'test') app.use(morgan('combined'))
// passport
app.use(passport.initialize())
passport.use('cookie', passportJwt.jwt)
passport.use('header', passportJwt.header)

app.use('/api', apiRouter)
app.use(errorHandler.handleNotFound)
app.use(errorHandler.handleError)


exports.start = () => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log(`Error : ${err}`)
      process.exit(-1)
    }

    console.log(`${config.app} is running on ${config.port}`)
  })
}

checkFirstUserAndCreateIfDontExist()
exports.app = app
