async function deleteAllOpenTasks(client) {
    try {
        return client.query('DELETE FROM tasks WHERE completedate is null')
    } catch (err) {
        console.log(err)
    }
}
module.exports.deleteAllOpenTasks = deleteAllOpenTasks