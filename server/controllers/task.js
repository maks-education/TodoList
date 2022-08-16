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
            let result = await this.taskService.creatingTask(req.session.userLogin, req.body.author, req.body.title,req.body.content, req.body.status, req.body.deadline, req.body.creationDate, req.body.completeDate
            )
            res.json(result)
        }

        async editTask(req,res) {
            let result = await editTaskBase(sequelize, req.body)
            res.send('complete')
        }

        async getTask(req, res) {
            let result = await this.taskService.getTask({
                userlogin: req.session.userLogin})
                console.log(`${'hello'} + ${result}`)
            res.send('complete')
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

