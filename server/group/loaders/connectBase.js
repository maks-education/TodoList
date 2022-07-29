import { createTableTask } from "../../Base/Task/createTable.js"
import { createTableRegUserData } from "../../Base/RegUserData/createTable.js"

export function connectionBase(client) {
  console.log(process.env.DB_PSW)
    client.connect().then(() =>{
    createTableTask(client)
    createTableRegUserData(client)
      console.log('Database connected')
  }).catch((err) => {
    console.log('Database connection error')
    console.log(err)
  })
}

