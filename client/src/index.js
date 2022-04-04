import './style.css';
import './function js/done-sort.js'
import { drawEmptyDoneTaskSectionMessage, drawEmptyOpenTaskSectionMessage } from './function js/drawWelcomeMessage';
import { addTaskToDataBase, addTaskToLocaleStorage, getTaskFromLocalstorage } from './function js/localeStorage/loacaleStorage';
import { findlasttaskid } from './function js/lastTask-id';
import { drawTaskFromLocalStorage } from './function js/localeStorage/drawLocaleStorage';
import { drawTask } from './function js/drawTask/drawTask';
import 'core-js/actual'
import { request } from './function js/api';


async function getResult () {
  const result = await request('tolo')
  const resultjson = await result.json()
  resultjson.forEach(function (task) {
    drawTask({
      id: task.id,
      title: task.title,
      creationDate: task.creationdate,
      completeDate: task.completedate
    })
  })
}




drawEmptyOpenTaskSectionMessage ()
drawEmptyDoneTaskSectionMessage ()

const newTaskButton = document.querySelector('.ADD')
const newTaskNameInput = document.querySelector('.newTaskname')


findlasttaskid()
let lastTaskid = findlasttaskid() +1; 

newTaskNameInput.onkeydown = function(e) {
  if(e.code == "Enter"){
  newTaskButton.click()
  }
}

newTaskButton.onclick = function () {


  addTaskToDataBase ({
    id: lastTaskid,
    title: newTaskNameInput.value,
    creationDate: new Date(),
    completeDate: null
  })
  
  drawTask ({
    id: lastTaskid,
    title: newTaskNameInput.value,
    creationDate: new Date(),
    completeDate: null
  })
  lastTaskid ++
  drawEmptyOpenTaskSectionMessage ()
  newTaskNameInput.value = ""
}

getResult()

const openTaskopenSelection = document.querySelector('.task-open .tasks');
const openTaskdoneSelection = document.querySelector('.task-done .tasks');

const searchTask = document.querySelector('.search-wrapper .search')

searchTask.addEventListener("input", async function(){
  const result = await request('tolo')
  const resultjson = await result.json()
    const textFilter = resultjson.filter(task => task.title.toUpperCase().includes(searchTask.value.toUpperCase()))
    openTaskopenSelection.innerHTML = ""
    openTaskdoneSelection.innerHTML = ""
    textFilter.forEach(task => {
      drawTask({
        id: task.id,
        title: task.title,
        creationDate: task.creationdate,
        completeDate: task.completedate
      });
    })
})



request("todo")


