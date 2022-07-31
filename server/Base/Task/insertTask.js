export async function insertTable (client, body, userlogin) {
    console.log(body)
    try {
    return client.query('INSERT INTO tasks (userlogin, title, creationdate, completedate) VALUES ($1, $2, $3, $4)', [userlogin, body.title, body.creationDate, body.completeDate])
    } catch (err) {
      console.log(err)
    }
  }
