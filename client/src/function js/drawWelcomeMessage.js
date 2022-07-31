import { request } from "./api"




export async function drawEmptyOpenTaskSectionMessage () {
  const WelcomeOpen = document.querySelector(".div-text-welcome-open")
  const result = await request('task/get')
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
  const WelcomeDone = document.querySelector(".div-text-welcome-done")
  const result = await request('task/get')
  const resultjson = await result.json()
  const resultjsonFilter = resultjson.filter(task => task.completedate !== null)
  console.log(resultjsonFilter)
    if (resultjsonFilter.length === 0){
      WelcomeDone.classList.remove("hidden")
    } else {
      WelcomeDone.classList.add("hidden")
    }
  
  }

