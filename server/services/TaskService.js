import {sequelize} from "../loaders/client.js";

export class TaskService {
    constructor(){
        this.taskModule = sequelize.models.Task
    }

    async getTask(userLogin) {
        console.log(userLogin)
        try{
            let result = await this.taskModule.findAll({
            where: {login: `${userLogin}`}
            })
            console.log(`${'data error'} + ${result}`)
            return result
            
        } catch (err){
            console.error("Error, failed to get tasks by login")
            let result = JSON.stringify(await this.taskModule.findAll({
                where: {login: `${userLogin}`}
                }))
                console.log(`${'hfjkdlfhsjkldhfjkdsfl'} + ${result}`)
        }
    }

    async creatingTask(loginP, authorP, titleP, contentP, statusP, deadlineP, creationDateP, completeDateP) {
        try {
            await this.taskModel.create({
                login: `${loginP}`, 
                author: `${authorP}`, 
                title: `${titleP}`, 
                content: `${contentP}`,
                status: `${statusP}`, 
                deadline: `${deadlineP}`, 
                creationDate: `${creationDateP}`, 
                completeDate: `${completeDateP}`})
            console.log(loginP, authorP, titleP)
        } catch (error) {
            console.error(`"Error, failed to create a task" ${loginP}, ${authorP}, ${titleP}, ${creationDateP}`)
            console.log(loginP, authorP, titleP)
        }
    }

    
}