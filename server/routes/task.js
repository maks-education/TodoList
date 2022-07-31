import { Router } from "express"
import { TaskController } from "../controllers/task.js"

export function task(apiRouter) {
    const router = Router()
    const taskController = new TaskController()
    apiRouter.use('/task', router)

    router.post('', taskController.createdTask) 
    router.put('', taskController.editTask)
    router.get('/get', taskController.getTask)
    router.delete('/delete', taskController.deleteTask)
    router.delete('/deleteAllOpen', taskController.deleteAllOpenTasks)
    router.delete('/deleteAllDone', taskController.deleteAllDoneTasks)
    }


