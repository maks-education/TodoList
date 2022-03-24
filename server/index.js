const express = require('express')
const app = express()
const port = 3000
const {Client} = require('pg')
let cors = require('cors')
const { createTable } = require('./Base/createTable')
const bodyParser = require('body-parser')



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

async function insertTable (body) {
  console.log(body)
  try {
  return client.query('INSERT INTO tasks (title, CreationDate, CompleteDate) VALUES ($1, $2, $3)', [body.title, body.CreationDate, body.CompleteDate])
  } catch (err) {
    console.log(err)
  }
}


client.connect().then(() =>{
  createTable(client, () => {
  })
   
  
})

    
  
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
  console.log(req)
    let result = await insertTable(req.body)
    
  console.log(result)
    res.send('complete')
})


app.use('/', express.static('dist'));


console.log(process.env.NODE_ENV)

