const express = require('express')
const app = express()
const port = 3000
const {Client} = require('pg')
let cors = require('cors')
const { createTable } = require('./Base/createTable')
const bodyParser = require('body-parser')
const { insertTable } = require('./Base/insertTask')
const { deleteAllOpenTasks } = require('./Base/deleteAllOpenTasks')
const { deleteAllDoneTasks } = require('./Base/deleteAllDoneTasks')



const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Todolist_Base',
    password: '1973',
    port: 5432,
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
  createTable(client, () => {
    
  })
})

async function deleteTask (client) {
  try {
    return client.query('DELETE FROM tasks WHERE id is ($1)', [req.query.id])
  } catch (err) {
    console.log(err)
  }
}
  
if (process.env.NODE_ENV === 'development'){
app.use(cors())
}

app.listen(port, () => {
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

app.get('/deleteAllOpenTask', async (req, res) => {
  let result = await deleteAllOpenTasks(client)
  res.send('complete')
})

app.get('/deleteAllDoneTask', async (req, res) => {
  let result = await deleteAllDoneTasks(client)
  res.send('complete')
})

app.delete('/deleteTask', async (req, res) => {
  let result = await deleteTask(client)
  res.send('complete')
})

app.use('/', express.static('dist'));


console.log(process.env.NODE_ENV)

