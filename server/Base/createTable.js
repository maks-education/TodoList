

function createTable(client) {
    return client.query('CREATE TABLE IF NOT EXISTS tasks (id SERIAL, Title VARCHAR, CreationDate TIMESTAMP, CompleteDate TIMESTAMP)', (err, res) => {
        if (err){
            console.log(err)
        } else if (res){
            console.log('Tasks the table already exists or was created successfully')
        }
      })
    }
    module.exports.createTable = createTable 
    