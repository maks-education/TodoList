const express = require('express')
const app = express()
const session = require('express-session')

const morgan = require('morgan')
const bodyParser = require('body-parser')

const { connectionBase } = require('./group/Settings of Server/connectBase')
const { useCors } = require('./group/Settings of Server/useCors')
const { cookie } = require('./group/Settings of Server/cookie')
const { client } = require('./group/Settings of Server/client')
const { port, listeningPort } = require('./group/Settings of Server/port')

const { dist } = require('./group/Settings of Server/static')

const { requestForNotLoggedIn } = require('./group/API/requestForNotLoggedIn')
const { initialization } = require('./group/API/User/initializations')
const { gettingCreatedEditTasks } = require('./group/API/Tasks/tasks')



const { deleteAllOpenTasks } = require('./Base/Task/deleteAllOpenTasks')
const { deleteAllDoneTasks } = require('./Base/Task/deleteAllDoneTasks')
const { editTask } = require('./Base/Task/editTask')
const { users } = require('./group/API/User/users')







app.use(morgan('dev'))
app.use(bodyParser.json());
useCors(app)

connectionBase(client)
cookie(app)
listeningPort(app)

dist(app, express)
requestForNotLoggedIn(app)
users(app, client)
gettingCreatedEditTasks(app, client)




















app.get('/deleteAllOpenTask', async (req, res) => {
  let result = await deleteAllOpenTasks(client)
  res.send('complete')
})

app.get('/deleteAllDoneTask', async (req, res) => {
  let result = await deleteAllDoneTasks(client)
  res.send('complete')
})

app.delete('/deleteTask', async (req, res) => {
  let result = await deleteTask(client, req.query.id)
  res.send('complete')
})

app.delete('/logout', async (req, res) => {
  await req.session.destroy()
  res.sendStatus(200)
})

