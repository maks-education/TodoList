const { deleteTask } = require("../../../Base/Task/deleteTask")
const { deleteAllOpenTasks } = require("../../../Base/Task/deleteAllOpenTasks")
const { deleteAllDoneTasks } = require("../../../Base/Task/deleteAllDoneTasks")

function deleteTasks(app, client) {
    app.delete('/deleteTask', async (req, res) => {
        let result = await deleteTask(client, req.query.id)
        res.send('complete')
      })
    app.delete('/deleteAllOpenTask', async (req, res) => {
        let result = await deleteAllOpenTasks(client)
        res.send('complete')
      })
    app.delete('/deleteAllDoneTask', async (req, res) => {
        let result = await deleteAllDoneTasks(client)
        res.send('complete')
      })
} module.exports.deleteTasks = deleteTasks