export async function dataUser(client, userLogin){
    try {
        return client.query('SELECT name, surname, login, email FROM reguserdata where login = ($1)', [userLogin])
    } catch{
        console.error('data could not be retrieved')
    }
}