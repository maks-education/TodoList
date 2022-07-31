import { dataUser } from "../Base/dataUser.js"
import { client } from "../loaders/client.js"

export class UserController {
    async profile (req, res) {
        if(req.session.userLogin !== null){
          let result = await dataUser(client, req.session.userLogin)
          res.send(result.rows[0])
        } else {
          res.status(400)
        }
    }
}
