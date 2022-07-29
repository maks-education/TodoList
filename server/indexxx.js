const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')

const { connectionBase } = require('./group/loaders/connectBase')
const { useCors } = require('./group/loaders/useCors')
const { cookie } = require('./group/loaders/cookie')
const { client } = require('./group/loaders/client')
const { port, listeningPort } = require('./group/loaders/port')

const { dist } = require('./group/loaders/static')

const { requestForNotLoggedIn } = require('./group/API/requestForNotLoggedIn')
const { apiRouter } = require('./routes')




app.use(morgan('dev'))
app.use(bodyParser.json());
useCors(app)

connectionBase(client)
cookie(app)
listeningPort(app)

dist(app, express)
requestForNotLoggedIn(app)

apiRouter()
























