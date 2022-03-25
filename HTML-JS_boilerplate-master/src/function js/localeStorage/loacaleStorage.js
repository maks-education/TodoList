

export function getTaskFromLocalstorage() {
    let baseloacal = localStorage.getItem('task')
    let tasks 
   if(baseloacal == null){
     tasks = []
   } else {
     tasks = JSON.parse(baseloacal)
   }
   return tasks
}

export function getTaskFromLocaleStorageOpenSection() {
    let tasks = getTaskFromLocalstorage () 
  
    return tasks.filter(task => task.completeDate === null)
}

export function getTaskFromLocaleStorageDoneSection() {
    let tasks = getTaskFromLocalstorage () 
  
    return tasks.filter(task => task.completeDate !== null)
}

export function addTaskToLocaleStorage(taskObject) {
  console.log('hello')
    let tasks = getTaskFromLocalstorage ()
     let sameTaskIndex = tasks.findIndex(task => task.id === taskObject.id)
     
     if (sameTaskIndex !== -1) {
   tasks.splice(sameTaskIndex, 1, taskObject)
     } else{
     tasks.push(taskObject)
     addTaskToDataBase(taskObject)
     }
     
}

export function addTaskToDataBase (task) {
    fetch('http://localhost:3000/task', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-type':'application/json',
      }
    }) 
  console.log('hello')  
}

export function removeTaskFromLocalStorage(taskObject) {
        let tasks = getTaskFromLocalstorage ()
        let sameTaskIndex = tasks.findIndex(task => task.id === taskObject.id)
      
        if (sameTaskIndex !== -1) {
      tasks.splice(sameTaskIndex, 1)
        }
        localStorage.setItem('task', JSON.stringify(tasks))
}

