async function deleteTask(client, id) {
    try{
    return client.query('DELETE FROM tasks WHERE id = ($1)', [id])
    } catch{
        console.error('Delete task not completed')
    }
} module.exports.deleteTask = deleteTask