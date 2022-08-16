import {sequelize} from "../loaders/client.js";

export class TaskService {
    constructor(){
        this.taskModule = sequelize.models.Task
    }

    async getTask(userLogin) {
        try{
            let result = await this.taskModule.findAll({
            where: {login: userLogin}
            })
            console.log(`${'data error'} + ${result}`)
            return result
            
        } catch (err){
            console.error("Error, failed to get tasks by login")
        }
    }

    async creatingTask({ login, author, title, content, status, deadline, creationDate, completeDate }) {
        try {
            await this.taskModel.create({
            login, author, title, content, status, deadline, creationDate, completeDate
        })
        } catch (error) {
            console.error(`"Error, failed to create a task" ${login}, ${author}, ${title}, ${creationDate}`)
            console.log(login, author, title)
        }
    }

    
}