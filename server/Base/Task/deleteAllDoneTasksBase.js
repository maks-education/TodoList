export async function deleteAllDoneTasksBase(client) {
    try {
        return client.query('DELETE FROM tasks WHERE completedate is not null')
    } catch (err) {
        console.log(err)
    }
}
