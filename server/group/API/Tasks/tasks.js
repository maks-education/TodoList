const { getTasks } = require ("../../../Base/Task/getTasks")
const { insertTable } = require ("../../../Base/Task/insertTask")

function gettingCreatedEditTasks (app, client) {

    app.get('/gettingtasks', async (req, res) =>{
        let result = await getTasks(client, req.session.userLogin)
        res.send(result.rows)
    })
    app.route('/task').post(async (req,res) => {
        let result = await insertTable(client, req.body, req.session.userLogin)
        res.send('complete')
        }).put(async (req,res) => {
            let result = await editTask(client, req.body)
            res.send('complete')
          })
}module.exports.gettingCreatedEditTasks = gettingCreatedEditTasks