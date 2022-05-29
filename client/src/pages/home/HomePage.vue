<template>
<div>
  <header class="Todo-List-header">
       <router-link to ="/home" class="logo">
       Todo List 
       </router-link> 
        <button class="clear-cookie" @click="clearCookie">x</button>
  <div class="search-wrapper">
      <input type="text" placeholder="Search..." class="search">
    <div class="search-icon-wrapper" > 
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
  </div>
    </header>
  
  <div class="container">

      <section class="new-task">
    <input class="newTaskname" type="text" placeholder="New task..." >
    <button class="ADD">+</button>
  
  </section>

  <section class="open-list">
    <div class="open">Open list</div>
    <div class="filter-open-list">
    <select class="option-open">
      <option value="asc-text">Text (A-z)</option>
      <option value="desc-text">Text (Z-a)</option>
      <option value="asc">Date creation (Asc)</option>
      <option value="desc">Date creation (Desc)</option>
    </select>
  </div>

  </section>

  <section class="task-open">
    <div class="div-text-welcome-open">
      <div class="text-Welcome-Open">"У вас нет незавершённых задач."</div>
    </div>
    <div class="tasks">

    </div>

  </section>
  

  <section class="clear-open-list">
    <button class="clear-open">Clear "Open" list</button>
  </section>

  <section class="done-list">
    <div class="done">Done list</div>
     <select class="option-done">
      <option value="asc">Date creation (Asc)</option>
      <option value="desc">Date creation (Desc)</option>
  </select>
  </section>

  <section class="task-done">
    <div class="div-text-welcome-done">
      <div class="text-Welcome-Done">"У вас нет завершённых задач."</div>
    </div>
    <div class="tasks">

    </div>

  </section>

  

  <section class="clear-done-list">
    <button class="clear-done">Clear "Done" list</button>
  </section>
</div>
</div>
  
</template>

<script>

import 'App/style.css';
import 'App/function js/done-sort.js'
import { drawEmptyDoneTaskSectionMessage, drawEmptyOpenTaskSectionMessage } from 'App/function js/drawWelcomeMessage';
import { addTaskToDataBase, addTaskToLocaleStorage, getTaskFromLocalstorage } from 'App/function js/localeStorage/loacaleStorage';
import { findlasttaskid } from 'App/function js/lastTask-id';
import { drawTaskFromLocalStorage } from 'App/function js/localeStorage/drawLocaleStorage';
import { drawTask } from 'App/function js/drawTask/drawTask';
import { bindSorting } from 'App/function js/done-sort.js';
import { request } from "App/function js/api.js"

async function getResult () {
  const result = await request('tolo')
  if (result.status === 200) {
    const resultjson = await result.json()
  resultjson.forEach(function (task) {
    drawTask({
      id: task.id,
      title: task.title,
      creationDate: task.creationdate,
      completeDate: task.completedate
    })
  })
  } else {
    console.log('Failed to get tasks')
  }
  
}

export default {
    name: "HomePage",
    mounted() {
        
bindSorting()
        
drawEmptyOpenTaskSectionMessage ()
drawEmptyDoneTaskSectionMessage ()

const newTaskButton = document.querySelector('.ADD')
const newTaskNameInput = document.querySelector('.newTaskname')


findlasttaskid()
let lastTaskid = findlasttaskid() +1; 

newTaskNameInput.onkeydown = function(e) {
  if(e.code == "Enter"){
  newTaskButton.click()
  drawEmptyOpenTaskSectionMessage ()
  }
}

newTaskButton.onclick = function () {
drawEmptyOpenTaskSectionMessage ()

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

    },

    methods: {
         clearCookie() {
         request('clearCookie', {
            method: 'DELETE',
                })
            }
    }
}
</script>

<style scoped>
  .logo {
    color: white;
    text-decoration: none;
  }
</style>
