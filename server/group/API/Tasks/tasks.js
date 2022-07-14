
const { createdEditTasks } = require("./createdEditTasks")
const { deleteTasks } = require("./deleteTasks")
const { gettingTasks } = require("./gettingTasks")

function tasks (app, client) {
    gettingTasks(app, client)
    createdEditTasks(app, client)
    deleteTasks(app, client)
}
module.exports.tasks = tasks