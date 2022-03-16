import { getTaskFromLocaleStorageDoneSection, getTaskFromLocaleStorageOpenSection } from "./localeStorage/loacaleStorage"


const WelcomeOpen = document.querySelector(".div-text-welcome-open")
const WelcomeDone = document.querySelector(".div-text-welcome-done")

export function drawEmptyOpenTaskSectionMessage () {
    let tasks = getTaskFromLocaleStorageOpenSection ()
    if(tasks.length === 0){
      WelcomeOpen.classList.remove("hidden")
    } else {
      WelcomeOpen.classList.add("hidden")
    }
  
  }

export function drawEmptyDoneTaskSectionMessage () {
    let tasks = getTaskFromLocaleStorageDoneSection ()
    if(tasks.length === 0){
      WelcomeDone.classList.remove("hidden")
    } else {
      WelcomeDone.classList.add("hidden")
    }
  
  }

