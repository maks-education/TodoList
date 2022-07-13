const { createTableRegUserData } = require("../../Base/RegUserData/createTable")
const { createTableTask } = require("../../Base/Task/createTable")

function connectionBase(client) {
    client.connect().then(() =>{
    createTableTask(client)
    createTableRegUserData(client)
      console.log('Database connected')
  }).catch((err) => {
    console.log('Database connection error')
    console.log(err)
  })
}
module.exports.connectionBase = connectionBase
