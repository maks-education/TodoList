export function insertTask () {
    return client.query('INSERT INTO tasks VALUES ($1, $2, $3)', [req.body.title, req.body.creationDate, req.body.completeDate])
}