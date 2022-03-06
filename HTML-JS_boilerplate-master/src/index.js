import './style.css';
import './done-sort.js'

const textWelcomeOpenTask = document.querySelector('.task-open');
const textWelcomeDoneTask = document.querySelector('.task-done');

const divTextWelcomeOpen = document.createElement('div')
divTextWelcomeOpen.classList.add('div-text-welcome-open')

const WelcomeOpen = document.createElement('div')
WelcomeOpen.classList.add('text-Welcome-Open')
WelcomeOpen.textContent = "У вас нет незавершенных задач."


const divTextWelcomeDone = document.createElement('div')
divTextWelcomeDone.classList.add('div-text-welcome-done')

const WelcomeDone = document.createElement('div')
WelcomeDone.classList.add('text-Welcome-Done')
WelcomeDone.textContent = "У вас нет завершённых задач."

divTextWelcomeOpen.appendChild(WelcomeOpen)
textWelcomeOpenTask.appendChild(divTextWelcomeOpen)

divTextWelcomeDone.appendChild(WelcomeDone)
textWelcomeDoneTask.appendChild(divTextWelcomeDone)


const openTaskopenSelection = document.querySelector('.task-open');
  const openTaskdoneSelection = document.querySelector('.task-done');


 
const newTaskButton = document.querySelector('.ADD')
let lastTaskid = 0;
newTaskButton.onclick = function () {
  
  




  divTextWelcomeOpen.remove()

  drawTask({
    title: document.querySelector('.newTaskname').value
  })
  
  addTaskToLocaleStorage({
    id: lastTaskid,
    title: document.querySelector('.newTaskname').value,
    creationDate: new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'}),
    completeDate: null,
  })

  lastTaskid++
}


function addTaskToLocaleStorage(taskObject) {
  let baseloacal = localStorage.getItem('task')
   let tasks 
  if(baseloacal == null){
    tasks = []
  } else {
    tasks = JSON.parse(baseloacal)
  }
  tasks.push(taskObject)
  localStorage.setItem('task', JSON.stringify(tasks))
}


let tasks = localStorage.getItem('task')

if (tasks != null) {
  let tasksParsed = JSON.parse(tasks)

  for(let i = 0; i < tasksParsed.length; i++){
    drawTask(tasksParsed[i])
  }
}



  
 
  



function drawTask (task) {
  const newTask = document.createElement('div')
  newTask.classList.add('task-o')
  newTask.setAttribute('data-id', lastTaskid)
  

  const label = document.createElement('label')
  label.classList.add('checkbox')

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox')

  checkbox.onchange = function() {
    if (checkbox.checked) {
      openTaskopenSelection.removeChild(newTask)
      openTaskdoneSelection.appendChild(newTask)
    }
    else {
      openTaskdoneSelection.removeChild(newTask)
      openTaskopenSelection.appendChild(newTask)
    }
  } 
  



  const divText = document.createElement('div')
  divText.classList.add('text-to')
  divText.setAttribute('id', "taskto")
  divText.textContent = task.title

  divText.ondblclick = function (){
    let text = divText.textContent
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.value = text 
    divText.textContent = ''
    divText.appendChild(input)
    input.focus()

    input.onblur = function() {
      divText.textContent = input.value
    }
  }
  const divTime = document.createElement ('div')
  const divTimeOpen = document.createElement('div')
  divTimeOpen.classList.add('time-open')
  divTimeOpen.setAttribute('data-value', new Date())
  divTimeOpen.textContent = new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
  
  const divTimeDone = document.createElement ('div')
  divTimeDone.classList.add('time-done')
  divTimeDone.setAttribute('data-value', new Date())
  
  
   
  checkbox.onclick = function() {
    
    if (checkbox.checked) {
      divTime.appendChild(divTimeOpen)
      divTime.appendChild(divTimeDone)
      divTimeDone.textContent = new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second:'2-digit'})
    } else {
      divTime.appendChild(divTimeOpen)
      divTime.removeChild(divTimeDone)
    }
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
  }

  const clearOpen = document.querySelector('.clear-open')
  clearOpen.ondblclick = function(){
    openTaskopenSelection.innerHTML=''
  }

  const clearDone = document.querySelector('.clear-done')
  clearDone.ondblclick = function(){
    openTaskdoneSelection.innerHTML= ''


    
  }


  label.appendChild(checkbox)
  divTrash.appendChild(itrash)
  trashButton.appendChild(divTrash)
  divTime.appendChild(divTimeOpen)
  newTask.appendChild(label)
  newTask.appendChild(divText)
  newTask.appendChild(divTime)
  newTask.appendChild(trashButton)
  
  
  openTaskopenSelection.appendChild(newTask)
  

  
}

// localStorage.clear()





