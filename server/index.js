const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')

const { connectionBase } = require('./group/Settings of Server/connectBase')
const { useCors } = require('./group/Settings of Server/useCors')
const { cookie } = require('./group/Settings of Server/cookie')
const { client } = require('./group/Settings of Server/client')
const { port, listeningPort } = require('./group/Settings of Server/port')

const { dist } = require('./group/Settings of Server/static')

const { requestForNotLoggedIn } = require('./group/API/requestForNotLoggedIn')

const { users } = require('./group/API/User/users')
const { tasks } = require('./group/API/Tasks/tasks')
const { logout } = require('./group/API/logut')


app.use(morgan('dev'))
app.use(bodyParser.json());
useCors(app)

connectionBase(client)
cookie(app)
listeningPort(app)

dist(app, express)
requestForNotLoggedIn(app)
users(app, client)
tasks(app, client)
logout(app)


























