import { drawEmptyDoneTaskSectionMessage, drawEmptyOpenTaskSectionMessage } from "../drawWelcomeMessage";
import { findlasttaskid } from "../lastTask-id";
import { addTaskToLocaleStorage, editTask, getTaskFromLocaleStorageDoneSection, getTaskFromLocaleStorageOpenSection, removeTaskFromLocalStorage } from "../localeStorage/loacaleStorage";


const openTaskopenSelection = document.querySelector('.task-open .tasks');
const openTaskdoneSelection = document.querySelector('.task-done .tasks');



export function drawTask (task) {
    const newTask = document.createElement('div')
    newTask.classList.add('task-o')
    newTask.setAttribute('data-id', task.id)
    
    const checkboxTextTask = document.createElement('div')
    checkboxTextTask.classList.add('checkboxTextTask')

    const label = document.createElement('label')
    label.classList.add('checkbox')
  
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = Boolean(task.completeDate)
  
  
    const divText = document.createElement('div')
    divText.classList.add('text-to')
    divText.setAttribute('id', "taskto")
    divText.textContent = task.title
  
    divText.ondblclick = function (){
      let text = divText.textContent
      let input = document.createElement('input')
      input.classList.add('inputTextTask')
      input.setAttribute('type', 'text')
      input.value = text 
      divText.textContent = ''
      divText.appendChild(input)
      input.focus()
  
      input.onblur = function() {
        divText.textContent = input.value
        task.title = input.value
        editTask(task)
      }
      input.onkeydown = function (e){
        if (e.code == 'Enter') {
          input.blur()
        }
      }
    }


      
    
    const divTimeAndTrash = document.createElement('div')
    divTimeAndTrash.classList.add('divTimeAndTrash')

    const divTime = document.createElement ('div')
    divTime.classList.add('time')

    const divTimeOpen = document.createElement('div')
    divTimeOpen.classList.add('time-open')
    divTimeOpen.setAttribute('data-value', task.creationDate) 
    divTimeOpen.textContent = new Date(task.creationDate).toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    
    const divTimeDone = document.createElement ('div')
    divTimeDone.classList.add('time-done')
   
    if (task.completeDate){
    divTimeDone.setAttribute('data-value', task.completeDate)
    divTimeDone.textContent = new Date(task.completeDate).toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    }
    
    checkbox.onchange = function() {
      if (checkbox.checked) {
        openTaskopenSelection.removeChild(newTask)
        openTaskdoneSelection.appendChild(newTask)
        task.completeDate = new Date()
        divTimeDone.textContent = new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second:'2-digit'})
        divTimeDone.setAttribute('data-value', task.completeDate)
      }
      else {
        task.completeDate = null
        openTaskdoneSelection.removeChild(newTask)
        openTaskopenSelection.appendChild(newTask)
        divTimeDone.textContent = ''
        divTimeDone.removeAttribute('data-value')
      }
      editTask(task)
      drawEmptyOpenTaskSectionMessage ()
      drawEmptyDoneTaskSectionMessage()
      
    } 
    
    const trashButton = document.createElement('button')
    trashButton.classList.add('trash-but')
  
    const divTrash = document.createElement('div')
    divTrash.classList.add('trash')
  
    
    
    const itrash = document.createElement('i')
    itrash.classList.add('fa')
    itrash.classList.add('fa-trash')
    itrash.setAttribute('aria-hidden', 'true')
  
    trashButton.onclick = function() {
      newTask.remove()
       fetch(`/deleteTask?id=${task.id}`, {
        method: 'DELETE',
      }) 
    
      
      drawEmptyOpenTaskSectionMessage ()
      drawEmptyDoneTaskSectionMessage()
    }
  
    const clearOpen = document.querySelector('.clear-open')
    clearOpen.ondblclick = function(){
    fetch('/deleteAllOpenTask')
      openTaskopenSelection.innerHTML=''
      let tasks = getTaskFromLocaleStorageOpenSection()
    tasks.forEach(task => {
        removeTaskFromLocalStorage(task)
        
  })
  drawEmptyOpenTaskSectionMessage ()
  
    }
  
    const clearDone = document.querySelector('.clear-done')
    clearDone.ondblclick = function(){
      fetch('/deleteAllDoneTask')
      openTaskdoneSelection.innerHTML= ''
      let tasks = getTaskFromLocaleStorageDoneSection()
      tasks.forEach(task => {
          removeTaskFromLocalStorage(task)
    }) 
    drawEmptyDoneTaskSectionMessage()
    }
  
  
    label.appendChild(checkbox)
    divTrash.appendChild(itrash)
    trashButton.appendChild(divTrash)
    divTime.appendChild(divTimeOpen)
    divTime.appendChild(divTimeDone)    
    divTimeAndTrash.appendChild(divTime)
    divTimeAndTrash.appendChild(trashButton)
    checkboxTextTask.appendChild(label)
    checkboxTextTask.appendChild(divText)
    newTask.appendChild(checkboxTextTask)
    newTask.appendChild(divTimeAndTrash)

    
    if(task.completeDate){
    openTaskdoneSelection.appendChild(newTask)
    } else {
      openTaskopenSelection.appendChild(newTask)
    }
    
  
    
  }