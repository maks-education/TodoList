import { selectUserByLogin } from "../Base/selectLoginPassword/selectLoginPsw.js";
import { comparePsw } from "../comparePsw.js";
import { getLoginUserFromBase } from "../Base/getLoginUserFromBase.js";
import { insertRegDataUser } from "../Base/RegUserData/insertRegDataUser.js";

import { client } from "../group/loaders/client.js"

export class AuthController {

    async signIn (req, res) {
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
    }

    async signUp (req, res) {
        let byLogin = await getLoginUserFromBase(client)
        let checkValidPsw = checkValidRegisterPassword(req.body.password)

    if (byLogin.rows[0].login !== req.body.login){
        await insertRegDataUser(client, req.body)
        res.sendStatus(200)
        } else {
            res.sendStatus(403)
        }
    }

    isLoggedIn (req, res) {
        if (req.session.userLogin) {
          res.sendStatus(200)
        } else {
          res.sendStatus(400)
        }
    }

    async logout (req, res) {
        await req.session.destroy()
        res.sendStatus(200)
    }
}    
