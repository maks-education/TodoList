const { getLoginUserFromBase } = require("../../../Base/getLoginUserFromBase");
const { insertRegDataUser } = require("../../../Base/RegUserData/insertRegDataUser");
const { selectUserByLogin } = require("../../../Base/selectLoginPassword/selectLoginPsw");
const { checkValidRegisterPassword } = require("../../../checkValidRegisterPassword");
const { comparePsw } = require("../../../comparePsw");


function initialization (app, client) {

    app.post('/login', async (req, res,) => {
        let result = await selectUserByLogin(client, req.body.login);
        if (result.rows[0]){
          let compare = comparePsw(req.body.password, result.rows[0].password)
        if (compare) {
          req.session.userLogin = result.rows[0].login
          res.sendStatus(200)
        } else {
          res.sendStatus(400)
        }
      } else {
        res.sendStatus(400)
      }
    })
    app.post('/register', async (req, res) => {
        let byLogin = await getLoginUserFromBase(client)
        let checkValidPsw = checkValidRegisterPassword(req.body.password)

    if (byLogin.rows[0].login !== req.body.login){
        await insertRegDataUser(client, req.body)
        res.sendStatus(200)
        } else {
            res.sendStatus(403)
        }
    })
    app.get('/isLoggedIn', (req, res) => {
        if (req.session.userLogin) {
          res.sendStatus(200)
        } else {
          res.sendStatus(400)
        }
    })
}    
module.exports.initialization = initialization