import './style.css';
import './function js/done-sort.js'
import { drawEmptyDoneTaskSectionMessage, drawEmptyOpenTaskSectionMessage } from './function js/drawWelcomeMessage';
import { addTaskToLocaleStorage, getTaskFromLocalstorage } from './function js/localeStorage/loacaleStorage';
import { findlasttaskid } from './function js/lastTask-id';
import { drawTaskFromLocalStorage } from './function js/localeStorage/drawLocaleStorage';
import { drawTask } from './function js/drawTask/drawTask';
const { Client } = require('pg')




// const client = new Client ({
//   user: 'postgres',
//     host: 'localhost',
//     database: 'Todolist_Base',
//     password: '1973',
//     port: 5432
// })



drawEmptyOpenTaskSectionMessage ()
drawEmptyDoneTaskSectionMessage ()

const newTaskButton = document.querySelector('.ADD')

findlasttaskid()
let lastTaskid = findlasttaskid() +1; 


newTaskButton.onclick = function () {

  addTaskToLocaleStorage ({
    id: lastTaskid,
    title: document.querySelector('.newTaskname').value,
    creationDate: new Date(),
    completeDate: null
  })
  
  drawTask ({
    id: lastTaskid,
    title: document.querySelector('.newTaskname').value,
    creationDate: new Date(),
    completeDate: null
  })
  lastTaskid ++
}

drawTaskFromLocalStorage()

const openTaskopenSelection = document.querySelector('.task-open .tasks');
const openTaskdoneSelection = document.querySelector('.task-done .tasks');

const searchTask = document.querySelector('.search-wrapper .search')

// searchTask.addEventListener("input", function(){
  
//   let tasks = getTaskFromLocalstorage ()

//   for (let i = 0; tasks.length > 0; i++) {
  
//     const textFilter = tasks.filter(task => task.title == searchTask.value)
//     console.log(textFilter)
    
  // }
// })




