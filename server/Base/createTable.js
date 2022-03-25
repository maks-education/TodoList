

async function createTable(client) {
    try{
        return client.query('CREATE TABLE IF NOT EXISTS tasks (id SERIAL, Title VARCHAR, CreationDate TIMESTAMP, CompleteDate TIMESTAMP)')
    } catch (err){
        console.log(err)
    }
}
module.exports.createTable = createTable 
    