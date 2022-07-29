import { crypto } from '../../crypto.js';

export async function insertRegDataUser (client, body) {
    const hash = crypto(body.password)
    try{
        return client.query('INSERT INTO RegUserData (name, surname, login, email, password) VALUES ($1, $2, $3, $4, $5)', [body.name, body.surname, body.login, body.email, hash])
    } catch(err){
        console.error(err)
    }
}