import {sequelize} from "../loaders/client.js";

export class UserService {
    constructor() {
        this.userModel = sequelize.models.User
    }
    
    async createUser({ firstName, lastName, login, email, password }) {
        try {
            await this.userModel.create({ // if you use "this.UserModel.create", he swears that he cannot read the "create" property of the "UserModel" object
                firstName, lastName, login, email, password
            })
        } catch (err) {
            console.log(err)
        }
    }

    async getUser(loginReg) {
        try {
            let result = await this.userModel.findAll({
                attributes: ['login', 'password'],
                where: {login: `${loginReg}`}
            })
            if(result == 0){
                return null
            } else{
                return result
            }
        } catch (err) {
            console.log(`"Error, failed to get users by login" ${err}`)
        }
        
    }
}
