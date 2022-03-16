
export function findlasttaskid () {
    let tasks = localStorage.getItem('task')
    if(!tasks) {
      return -1
    } 
     let parsedTask = JSON.parse(tasks)
     let maxId = 0 
     parsedTask.forEach(task => {
       if (task.id > maxId){
         maxId = task.id
       }
     })
    return maxId
  } 