export async function getTasksBase (client, userlogin) {
    try {
      return client.query('SELECT * FROM tasks WHERE userlogin = ($1)', [userlogin])
    } catch (err) {
      console.log(err)
    }
  } 
