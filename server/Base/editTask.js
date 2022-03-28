async function editTask (client, task) {
    try {
    return client.query('UPDATE tasks SET title = $2, completeDate = $3 WHERE id = $1', [task.id, task.title, task.completeDate])
    } catch (err) {
      console.log(err)
    }
  }

module.exports.editTask = editTask