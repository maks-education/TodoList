import './style.css';


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




let counterOpen = 0  //счётчики
let counterDone = 0
 
const newTaskButton = document.querySelector('.ADD')
newTaskButton.onclick = function () {
  const openTaskopenSelection = document.querySelector('.task-open');
  const openTaskdoneSelection = document.querySelector('.task-done');
// addWelcomeOpen()
  
  function counterOpens() {  // при нажатии +1 в counterOpen
    counterOpen++
  }
  counterOpens()
  console.log(counterOpens)
console.log(counterOpen + 'Open') 


  divTextWelcomeOpen.remove()

  const newTask = document.createElement('div')
  newTask.classList.add('task-o')


  const label = document.createElement('label')
  label.classList.add('checkbox')

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox')

  checkbox.onchange = function() {
    if (checkbox.checked) {
      openTaskopenSelection.removeChild(newTask)
      openTaskdoneSelection.appendChild(newTask)
      // divTextWelcomeDone.remove() //эту строчку я использовал для теста, но пока не убирал, 
                                    //так как она ещё нужна
      // addWelcomeOpen()
      counterOpen-- // -1 у counterOpen
      counterDone++ // +1 у counterDone
      console.log(counterOpen + 'Open')
      console.log(counterDone + 'Done')
    }
    else {
      openTaskdoneSelection.removeChild(newTask)
      openTaskopenSelection.appendChild(newTask)
      counterOpen++ // +1 у counterOpen
      counterDone-- // -1 у counterDone
      // addWelcomeOpen()
      
      console.log(counterOpen + 'Open')
      console.log(counterDone + 'Done')
    }
  } 
  



  const divText = document.createElement('div')
  divText.classList.add('text-to')
  divText.setAttribute('id', "taskto")
  divText.textContent = document.querySelector('.newTaskname').value

  divText.ondblclick = function (){
    let text = divText.textContent
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.value = text 
    divText.textContent = ''
    divText.appendChild(input)
    input.focus()

    input.onblur = function() {
      divText.TextContent = input.value
    }
  }
  const divTime = document.createElement ('div')
  const divTimeOpen = document.createElement('div')
  divTimeOpen.classList.add('time-open')
  divTimeOpen.textContent = new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
  
  const divTimeDone = document.createElement ('div')
  divTimeDone.classList.add('time-done')
  
  
   
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

z
    
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

// function addWelcomeOpen() {
//   if (counterOpen == 0){
//     textWelcomeOpenTask.appendChild(divTextWelcomeOpen)
//     console.log(divTextWelcomeOpen)
//   } else{
//     textWelcomeOpenTask.removeChild(divTextWelcomeOpen)
//   }
// }


