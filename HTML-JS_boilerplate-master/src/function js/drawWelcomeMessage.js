
const WelcomeOpen = document.querySelector(".div-text-welcome-open")
const WelcomeDone = document.querySelector(".div-text-welcome-done")

export async function drawEmptyOpenTaskSectionMessage () {
  const result = await fetch('http://localhost:3000/tolo')
  const resultjson = await result.json()
  const resultjsonFilter = resultjson.filter(task => task.completedate === null)
  console.log(resultjsonFilter)
    if (resultjsonFilter.length === 0){
      WelcomeOpen.classList.remove("hidden")
    } else {
      WelcomeOpen.classList.add("hidden")
    }
  
  }

export async function drawEmptyDoneTaskSectionMessage () {
  const result = await fetch('http://localhost:3000/tolo')
  const resultjson = await result.json()
  const resultjsonFilter = resultjson.filter(task => task.completedate !== null)
  console.log(resultjsonFilter)
    if (resultjsonFilter.length === 0){
      WelcomeDone.classList.remove("hidden")
    } else {
      WelcomeDone.classList.add("hidden")
    }
  
  }

