import {sequelize} from "../loaders/client.js";

export class TaskService {
    constructor(){
        this.taskModule = sequelize.models.Task
    }

    async getTask(userLogin) {
        try{
            let result = await this.taskModule.findAll({
            where: {executor: userLogin}
            })
            return result
            
        } catch (error){
            console.error(`"Error, failed to get tasks by login" ${error}`)
        }
    }

    async creatingTask({ executor, author, title, content, status, deadline, creationDate, completeDate }) {
        try {
            await this.taskModule.create({
                executor, author, title, content, status, deadline, creationDate, completeDate
        })
        } catch (error) {
            console.error(`"Error, failed to create a task" ${error}`)
        }
    }

    async updateTask({ taskId, executors, author, title, content, status, deadline, completeDate }) {
        try {
            await this.taskModule.update(
                {executors, author, title, content, status, deadline, completeDate},
                {where:{id: taskId},}
            ) 
        } catch(err){
            console.error(err)
        }
    }

    async destroyTask({ taskId }){
        try {
            await this.taskModule.destroy({
                where:{
                    id: taskId
                }
            })
        }catch(err){
            console.error(err)
        }
    }
}