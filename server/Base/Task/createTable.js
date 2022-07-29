export async function createTableTask(client) {
    try{
        return client.query('CREATE TABLE IF NOT EXISTS tasks (id SERIAL, userlogin VARCHAR, Title VARCHAR, CreationDate TIMESTAMP, CompleteDate TIMESTAMP)')
    } catch (err){
        console.log(err)
    }
}


