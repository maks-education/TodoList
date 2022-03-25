async function insertTable (client, body) {
    console.log(body)
    try {
    return client.query('INSERT INTO tasks (title, creationdate, completedate) VALUES ($1, $2, $3)', [body.title, body.creationDate, body.completeDate])
    } catch (err) {
      console.log(err)
    }
  }
  module.exports.insertTable = insertTable