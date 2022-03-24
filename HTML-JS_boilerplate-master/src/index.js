import './style.css';
import './function js/done-sort.js'
import { drawEmptyDoneTaskSectionMessage, drawEmptyOpenTaskSectionMessage } from './function js/drawWelcomeMessage';
import { addTaskToDataBase, addTaskToLocaleStorage, getTaskFromLocalstorage } from './function js/localeStorage/loacaleStorage';
import { findlasttaskid } from './function js/lastTask-id';
import { drawTaskFromLocalStorage } from './function js/localeStorage/drawLocaleStorage';
import { drawTask } from './function js/drawTask/drawTask';

async function getResult () {
  const result = await fetch('http://localhost:3000/tolo')
}
getResult()

drawEmptyOpenTaskSectionMessage ()
drawEmptyDoneTaskSectionMessage ()

const newTaskButton = document.querySelector('.ADD')

findlasttaskid()
let lastTaskid = findlasttaskid() +1; 


newTaskButton.onclick = function () {

  addTaskToDataBase ({
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

searchTask.addEventListener("input", function(){
  
  let tasks = getTaskFromLocalstorage ()
    const textFilter = tasks.filter(task => task.title.toUpperCase().includes(searchTask.value.toUpperCase()))
    openTaskopenSelection.innerHTML = ""
    openTaskdoneSelection.innerHTML = ""
    textFilter.forEach(task => {
      drawTask(task);
    })
})



fetch("http://localhost:3000/todo")


