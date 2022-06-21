import { drawTask } from "../drawTask/drawTask"
import { getTaskFromLocalstorage } from "./loacaleStorage"


export function drawTaskFromLocalStorage () {
    let tasks = getTaskFromLocalstorage()
    
      for(let i = 0; i < tasks.length; i++){
        drawTask(tasks[i])
    }
}