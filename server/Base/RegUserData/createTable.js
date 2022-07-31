export async function createTableRegUserData(client) {
    try{
        return client.query('CREATE TABLE IF NOT EXISTS RegUserData (id SERIAL, name VARCHAR, surname VARCHAR, login VARCHAR, email VARCHAR, password VARCHAR)')
    } catch (err){
        console.log(err)
    }
}
    
