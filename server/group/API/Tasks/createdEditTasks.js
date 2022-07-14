const { editTask } = require("../../../Base/Task/editTask")
const { insertTable } = require("../../../Base/Task/insertTask")

function createdEditTasks(app, client) {
    app.route('/task').post(async (req,res) => {
        let result = await insertTable(client, req.body, req.session.userLogin)
        res.send('complete')
    }).put(async (req,res) => {
            let result = await editTask(client, req.body)
            res.send('complete')
      })
    } module.exports.createdEditTasks = createdEditTasks