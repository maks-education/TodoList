<template>
<div>
  <main-header />
  
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
import MainHeader from "App/components/header/MainHeader.vue";

async function getResult () {
  const result = await request('task/get')
  if (result.status === 200) {
    const resultjson = await result.json()
  resultjson.forEach(function (task) {
    drawTask({
      id: task.id,
      title: task.title,
      creationDate: task.creationdate,
      completeDate: task.completedate
    })
    console.log(task.completeDate, task.creationDate)
  })
  } else {
    console.log('Failed to get tasks')
  }
  
}

export default {
    name: "HomePage",
    components: {MainHeader},
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
  const result = await request('task/get')
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




    },

    methods: {
        
    }
}
</script>

<style scoped>

  

  input[type="text" i] {
    padding: 0px 0px;
    padding-left: 1px;
    padding-right: 1px;
    font-weight: 400;
    font-size: 20px;
    line-height: 15px;
    color: black
}  

</style>
