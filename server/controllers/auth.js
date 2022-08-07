import { selectUserByLogin } from "../Base/selectLoginPassword/selectLoginPsw.js";
import { comparePsw } from "../comparePsw.js";
import { crypto } from "../crypto.js";


export class AuthController {
    constructor(userService) {
        this.userService = userService
    }
    
    async signIn (req, res) {
        let result = await selectUserByLogin(sequelize, req.body.login);
        if (result.rows[0]){
          let compare = comparePsw(req.body.password, result.rows[0].password);
        if (compare) {
          req.session.userLogin = result.rows[0].login;
          res.sendStatus(200)
        } else {
          res.sendStatus(400)
        }
      } else {
        res.sendStatus(400)
      }
    }

    async signUp (req, res) {
        // let byLogin = await this.userService.getUser({ login: req.body.login })
        //let checkValidPsw = checkValidRegisterPassword(req.body.password)
let byLogin =  null
    if (byLogin === null){
      const hash = await crypto(req.body.password)
        await this.userService.createUser(
        {
            firstName: req.body.name,
            lastName: req.body.surname,
            login: req.body.login,
            email: req.body.email,
            password: hash
        })
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
