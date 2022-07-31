import { dataUser } from "../Base/dataUser.js"
import { sequelize } from "../loaders/client.js"

export class UserController {
    async profile (req, res) {
        if(req.session.userLogin !== null){
          let result = await dataUser(sequelize, req.session.userLogin)
          res.send(result.rows[0])
        } else {
          res.status(400)
        }
    }
}
