export async function deleteAllOpenTasksBase(client) {
    try {
        return client.query('DELETE FROM tasks WHERE completedate is null')
    } catch (err) {
        console.log(err)
    }
}
