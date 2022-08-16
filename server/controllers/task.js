import { insertTable } from "../Base/Task/insertTask.js";
import { editTaskBase } from "../Base/Task/editTaskBase.js";
import { getTasksBase } from "../Base/Task/getTasksBase.js";
import { deleteTaskBase } from "../Base/Task/deleteTaskBase.js";
import { deleteAllOpenTasksBase } from "../Base/Task/deleteAllOpenTasksBase.js";
import { deleteAllDoneTasksBase } from "../Base/Task/deleteAllDoneTasksBase.js";

import { sequelize } from "../loaders/client.js"


export class TaskController {
    constructor(taskService){
        this.taskService = taskService
    }

        async createdTask (req,res) {
            try{
                await this.taskService.creatingTask({
                login: req.session.userLogin, 
                author: req.body.author || req.session.userLogin, 
                title: req.body.title, 
                content: req.body.content, 
                status: req.body.status, 
                deadline: req.body.deadline, 
                creationDate: req.body.creationDate, 
                completeDate: req.body.completeDate
            })
            res.status(200)
                }catch{
                    res.status(404)
                }
        }

        async editTask(req,res) {
            let result = await editTaskBase(sequelize, req.body)
            res.send('complete')
        }

        async getTask(req, res) {
            let result = await this.taskService.getTask(req.session.userLogin)
                console.log(`${'hello'} + ${result}`)
            res.json(result)
        }

        async deleteTask(req, res) {
            let result = await deleteTaskBase(sequelize, req.query.id)
            res.send('complete')
        }

        async deleteAllOpenTasks(req, res) {
            let result = await deleteAllOpenTasksBase(sequelize)
            res.send('complete')
        }

        async deleteAllDoneTasks(req, res) {
            let result = await deleteAllDoneTasksBase(sequelize)
            res.send('complete')
        }
}

