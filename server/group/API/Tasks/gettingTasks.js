const { getTasks } = require("../../../Base/Task/getTasks")

function gettingTasks(app, client) {
    app.get('/gettingtasks', async (req, res) =>{
        let result = await getTasks(client, req.session.userLogin)
        res.send(result.rows)
    })
}module.exports.gettingTasks = gettingTasks