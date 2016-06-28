/// <reference path="../typings/tsd.d.ts"/>

import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'

// setup
const PORT = process.env.PORT || 8000
let app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// routes
import * as routes from './routes/init'
app.use('/', routes)

// server
app.listen(PORT, ()=>{
    console.log('listening on ', PORT)
})