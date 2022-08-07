import {sequelize} from "../loaders/client.js";
import { User } from "../models/User.js";

export class UserService {
    constructor() {
        this.userModel = sequelize.models.User
    }
    
    createUser({ firstName, lastName, login, email, password }) {
        User.create({ // if you use "this.UserModel.create", he swears that he cannot read the "create" property of the "UserModel" object
            firstName, lastName, login, email, password
        })
    }

    getUser({ login }) {
        return this.userModel.findByPk(login)
    }
}
