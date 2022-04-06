export function bindSorting () {
const openTaskopenSelection = document.querySelector('.task-open .tasks');
const openTaskdoneSelection = document.querySelector('.task-done .tasks');



function sortTaskBydate (tasksElements) {
    let isAsc = openSelect.value== "asc"
      let dates = {}
      for (let i = 0; i<tasksElements.length; i++){
        let dateElement = tasksElements[i].querySelector('.time-open')
        let date = Date.parse(dateElement.getAttribute('data-value'))
        let id = tasksElements[i].getAttribute('data-id')
        dates[id] = date
        
      }
      tasksElements.sort((el1, el2) =>{
        return isAsc 
        ? dates[el2.getAttribute('data-id')] - dates[el1.getAttribute('data-id')]
        : dates[el1.getAttribute('data-id')] - dates[el2.getAttribute('data-id')]
      })
  
  }
  
  function sortTaskBytext(tasksElements) {
    let isAsc = openSelect.value == 'asc-text'
     tasksElements.sort((el1, el2) =>{
       let isMore = el2.querySelector('.text-to').textContent.toLowerCase() > el1.querySelector('.text-to').textContent.toLowerCase()
       if (isAsc){
        return isMore
        ? 1
        : -1
       } else {
        return isMore
        ? -1
        : 1
       }
     })
  }
  
  let openSelect = document.querySelector('.option-open')
  openSelect.addEventListener('change', function(){
    let tasksElements = document.querySelectorAll('.task-open .task-o')
      let tasksElementsArray = Array.from(tasksElements)
      let isTextSorting = ['asc-text', 'desc-text'].includes(openSelect.value)
      if (isTextSorting){
        sortTaskBytext(tasksElementsArray)
      } else {
        sortTaskBydate(tasksElementsArray)
      }
     
    
      openTaskopenSelection.innerHTML =""
      tasksElementsArray.forEach((el) =>{
        openTaskopenSelection.appendChild(el)
      })
  
  })
  
  let doneSelect = document.querySelector('.option-done')
  doneSelect.addEventListener('change', function(){
      let isAsc = doneSelect.value == 'asc'
      let tasksElements = document.querySelectorAll('.task-done .task-o')
      let tasksElementsArray = Array.from(tasksElements)
      let dates = {}
      for (let i = 0; i<tasksElements.length; i++){
        let dateElement = tasksElements[i].querySelector('.time-done')
        let date = Date.parse(dateElement.getAttribute('data-value'))
        let id = tasksElements[i].getAttribute('data-id')
        dates[id] = date
      } console.log(dates)
      tasksElementsArray.sort((el1, el2) =>{
        return isAsc 
        ? dates[el2.getAttribute('data-id')] - dates[el1.getAttribute('data-id')]
        : dates[el1.getAttribute('data-id')] - dates[el2.getAttribute('data-id')]
      })
      openTaskdoneSelection.innerHTML =""
      tasksElementsArray.forEach((el) =>{
        openTaskdoneSelection.appendChild(el)
      })
  
  })
  
}