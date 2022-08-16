import { Router } from "express"
import { TaskController } from "../controllers/task.js"
import { TaskService } from "../services/TaskService.js"

export function task(apiRouter) {
    const router = Router()
    const taskService = new TaskService()
    const taskController = new TaskController(taskService)
    apiRouter.use('/task', router)

    router.post('', taskController.createdTask.bind(taskController)) 
    router.put('', taskController.editTask.bind(taskController))
    router.get('/get', taskController.getTask.bind(taskController))
    router.delete('/delete', taskController.deleteTask.bind(taskController))
    router.delete('/deleteAllOpen', taskController.deleteAllOpenTasks.bind(taskController))
    router.delete('/deleteAllDone', taskController.deleteAllDoneTasks.bind(taskController))
    }


