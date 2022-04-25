const express = require('express')
const app = express()
const port = 3000
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



const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Todolist_Base',
  password: '1973',
  port: 5432,
  
    // user: 'hvgskxjxgxtznw',
    // host: 'ec2-18-215-96-22.compute-1.amazonaws.com',
    // database: 'd33emphb7i03s4',
    // password: '77b1154aaa27b4140413d8600a40cb1d1734cad5cf2ee526fd887e44032fd1b4',
    // port: 5432,
    // ssl: { rejectUnauthorized: false }
  })
  

  app.use(bodyParser.json());
  
function f() {
return client.query('DROP TABLE IF EXISTS tasks', (err, res) => {
  if (err){
    console.log('dupa')
  }else {
    console.log('good')
  }
}) 
}

async function getTasks () {
  try {
    return client.query('SELECT * FROM tasks')
  } catch (err) {
    console.log(err)
  }
}


client.connect().then(() =>{
  createTableTask(client)
  createTableRegUserData(client)
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

console.log(process.env.PORT)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/todo', (req, res) =>{
    res.send('Hello')
})
app.get('/tolo', async (req, res) =>{
  let result = await getTasks()
  res.send(result.rows)
})
app.post('/task', async (req,res) => {
    let result = await insertTable(client, req.body)
    res.send('complete')
})

app.post('/register', async (req, res) => {
    let result = await insertRegDataUser(client, req.body)
    res.send('complete')
    console.log(req.body)
})

app.post('/login', async (req, res) => {
    let result = await selectUserByLogin(client, req.body.login);
    if (result.rows[0]){
      let compare = comparePsw(req.body.password, result.rows[0].password)

    if (compare) {
      res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  } else {
    res.sendStatus(400)
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


app.use('/', (request, response) => {
  response.redirect('/register')
});


console.log(process.env.NODE_ENV)

