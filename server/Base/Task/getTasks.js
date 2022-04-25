async function getTasks (client, userlogin) {
    try {
      return client.query('SELECT * FROM tasks WHERE userlogin = ($1)', [userlogin])
    } catch (err) {
      console.log(err)
    }
  } 
  module.exports.getTasks = getTasks