import { insertTable } from "../Base/Task/insertTask.js";
import { editTaskBase } from "../Base/Task/editTaskBase.js";
import { getTasksBase } from "../Base/Task/getTasksBase.js";
import { deleteTaskBase } from "../Base/Task/deleteTaskBase.js";
import { deleteAllOpenTasksBase } from "../Base/Task/deleteAllOpenTasksBase.js";
import { deleteAllDoneTasksBase } from "../Base/Task/deleteAllDoneTasksBase.js";

import { client } from "../loaders/client.js"


export class TaskController {

        async createdTask (req,res) {
            let result = await insertTable(client, req.body, req.session.userLogin)
            res.send('complete')
        }

        async editTask(req,res) {
            let result = await editTaskBase(client, req.body)
            res.send('complete')
        }

        async getTask(req, res) {
            let result = await getTasksBase(client, req.session.userLogin)
            res.send(result.rows)
        }

        async deleteTask(req, res) {
            let result = await deleteTaskBase(client, req.query.id)
            res.send('complete')
        }

        async deleteAllOpenTasks(req, res) {
            let result = await deleteAllOpenTasksBase(client)
            res.send('complete')
        }

        async deleteAllDoneTasks(req, res) {
            let result = await deleteAllDoneTasksBase(client)
            res.send('complete')
        }
}

