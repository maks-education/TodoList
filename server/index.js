const express = require('express')
const app = express()

const {Client} = require('pg')
let cors = require('cors')
const bodyParser = require('body-parser')
const { createTableTask } = require('./Base/Task/createTable')
const { insertTable } = require('./Base/Task/insertTask')
const { deleteAllOpenTasks } = require('./Base/Task/deleteAllOpenTasks')
const { deleteAllDoneTasks } = require('./Base/Task/deleteAllDoneTasks')
const { editTask } = require('./Base/Task/editTask')
const { createTableRegUserData } = require('./Base/RegUserData/createTable')
const { insertRegDataUser } = require('./Base/RegUserData/insertRegDataUser')
const { comparePsw } = require('./comparePsw')
const { selectUserByLogin } = require('./Base/selectLoginPassword/selectLoginPsw')
const e = require('express')
const session = require('express-session')
const { getTasks } = require('./Base/Task/getTasks')
const { getLoginUserFromBase } = require('./Base/getLoginUserFromBase')
const { checkValidRegisterPassword } = require('./checkValidRegisterPassword')
const { request } = require('express')
const { dataUser } = require('./Base/dataUser')

require('dotenv').config()
const port = process.env.APP_PORT

const client = new Client(
    process.env.DATABASE_URL
        ? {
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        }
        : {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PSW,
            port: process.env.DB_PORT
        }
);

  app.use(bodyParser.json());

// TODO make secure true for https
app.use(session({
  secret: process.env.SESSION_CREATION_SECRET,
  rolling: true,
  cookie: { 
    secure: false, 
    maxAge: 1000 * 10 * 60 * 60,
  }

}))
  
function f() {
return client.query('DROP TABLE IF EXISTS tasks', (err, res) => {
  if (err){
    console.log('dupa')
  }else {
    console.log('good')
  }
}) 
}




client.connect().then(() =>{
  createTableTask(client)
  createTableRegUserData(client)
    console.log('Database connected')
}).catch((err) => {
  console.log('Database connection error')
  console.log(err)
})

async function deleteTask (client, id) {
  try {
    return client.query('DELETE FROM tasks WHERE id = ($1)', [id])
  } catch (err) {
    console.log(err)
  }
}
  
if (process.env.NODE_ENV === 'development'){
app.use(cors())
}


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`)
})

app.use('/', express.static('dist'));

app.get('/isLoggedIn', (req, res) => {
  if (req.session.userLogin) {
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
})

app.use(function (req, res , next) {
  const requestForNotLoggedIn = ['/register', '/login', '/isLoggedIn']
  if (req.session.userLogin) {
    next()
  } else if (requestForNotLoggedIn.includes(req.url)) {
    next()
  }else {
    res.sendStatus(403)
  }
})

app.get('/todo', (req, res) =>{
    res.send('Hello')
})
app.get('/tolo', async (req, res) =>{
  let result = await getTasks(client, req.session.userLogin)
  res.send(result.rows)
})
app.post('/task', async (req,res) => {
    let result = await insertTable(client, req.body, req.session.userLogin)
    res.send('complete')
})

app.post('/register', async (req, res) => {
    let result = await insertRegDataUser(client, req.body)
    let byLogin = await getLoginUserFromBase(client)
    let checkValidPsw = checkValidRegisterPassword(req.body.password)
  console.log(checkValidPsw)
    if (byLogin.rows[0].login !== req.body.login){
      res.sendStatus(200)
  }  else {
      res.sendStatus(403)
  }
})

app.post('/login', async (req, res) => {
    let result = await selectUserByLogin(client, req.body.login);
    if (result.rows[0]){
      let compare = comparePsw(req.body.password, result.rows[0].password)

    if (compare) {
      req.session.userLogin = result.rows[0].login
      res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  } else {
    res.sendStatus(400)
  }
    
})

app.get('/profile', async (req, res) => {
  if(req.session.userLogin !== null){
    let result = await dataUser(client, req.session.userLogin)
    res.send(result.rows[0])
  } else {
    res.status(400)
  }
})

app.put('/task', async (req,res) => {
  let result = await editTask(client, req.body)
  res.send('complete')
})

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

