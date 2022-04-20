async function deleteAllDoneTasks(client) {
    try {
        return client.query('DELETE FROM tasks WHERE completedate is not null')
    } catch (err) {
        console.log(err)
    }
}
module.exports.deleteAllDoneTasks = deleteAllDoneTasks