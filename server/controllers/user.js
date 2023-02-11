import { dataUser } from "../Base/dataUser.js"
import { sequelize } from "../loaders/client.js"

export class UserController {
  constructor(userService){
    this.userService = userService
  }
    async userData (req, res) {
        if(req.session.userLogin !== null){
          let result = await this.userService.getUserData(req.session.userLogin)
          res.json(result)
          console.log(result)
          res.status(200)
        } else {
          res.status(400)
        }
    }
}
