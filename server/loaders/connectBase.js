import { createTableTask } from "../Base/Task/createTable.js"
import { createTableRegUserData } from "../Base/RegUserData/createTable.js"
import {createDBClient} from "./client.js";

export function connectionBase() {
  const client = createDBClient()
  client.connect().then(() =>{
    createTableTask(client)
    createTableRegUserData(client)
    console.log('Database connected')
  }).catch((err) => {
    console.log('Database connection error')
    console.log(err)
  })

  return client
}

