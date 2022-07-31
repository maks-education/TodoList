import {sequelize} from "../loaders/client.js";

export class UserService {
    constructor() {
        this.userModel = sequelize.models.User
    }
    
    createUser({ firstName }) {
        this.userModel.create({
            firstName
        })
    }

    getUser({ login }) {
        return this.userModel.findByPk(login)
    }
}
