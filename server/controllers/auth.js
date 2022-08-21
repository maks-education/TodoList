import { selectUserByLogin } from "../Base/selectLoginPassword/selectLoginPsw.js";
import { comparePsw } from "../comparePsw.js";
import { crypto } from "../crypto.js";


export class AuthController {
    constructor(userService) {
        this.userService = userService
    }
    
    async signIn (req, res) {
        let result = await this.userService.getUser(req.body.login)
        console.log(result[0].login)
        if (result[0].password){
          let compare = comparePsw(req.body.password, result[0].password);
        if (compare) {
          req.session.userLogin = result[0].login;
          res.sendStatus(200)
        } else {
          res.sendStatus(400)
        }
      } else {
        res.sendStatus(400)
      }
    }

    async signUp (req, res) {
    let byLogin = await this.userService.getUser(req.body.login)
    console.log(byLogin, req.body.login)
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
