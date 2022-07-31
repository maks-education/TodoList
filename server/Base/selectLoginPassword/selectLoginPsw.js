export async function selectUserByLogin (client, login) {
    try {
       return client.query('SELECT * FROM reguserdata WHERE login = ($1)', [login])
    }catch (err){
        console.error(err)
    }
} 
