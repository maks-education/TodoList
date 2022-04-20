async function insertRegDataUser (client, body) {
    try{
        return client.query('INSERT INTO RegUserData (name, surname, login, email, password) VALUES ($1, $2, $3, $4, $5)', [body.name, body.surname, body.login, body.email, body.password])
    } catch(err){
        console.error(err)
    }
} module.exports.insertRegDataUser = insertRegDataUser