const { dataUser } = require("../../../Base/dataUser")

function profile (app) {
    app.get('/profile', async (req, res) => {
    if(req.session.userLogin !== null){
      let result = await dataUser(client, req.session.userLogin)
      res.send(result.rows[0])
    } else {
      res.status(400)
    }
  })
} module.exports.profile = profile