<template>
<div>
  <main-header />
    
  <div class="container">
    <div class="add-task-container">
      <div class="top-container_add-task">
        <div class="container-theme-date-author_add-task">

          <div class="input-add-theme">
            <div class="text-input-theme">Тема</div>
            <input id="input-theme">
          </div>

          <div class="input-add-deadline">
            <input type="date">
          </div>

          <div class="author">
            author
          </div>
        </div>

        <div class="buttons-close_add-task-container">
          <button class="close">
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5477 0.999836L1.45226 9.99996" stroke="#505050" stroke-width="2" stroke-linecap="round"/>
            <path d="M1.45227 1L10.5477 9.99995" stroke="#505050" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="task-block">
      <div class="menu-task-block">
        <div class="buttons_add-update">
          <div class="add-task">Add task</div>
        </div>
        <div class="open-done_list">
          <div class="open-list">Open list</div>
          <div class="done-list">Done list</div>
        </div>
      </div>

      <div class="group_quick-access_tasks">
        <div class="quick-access">
          <input type="checkbox">
          <div class="sorting-tasks">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.89959 10.7143H5.01785V0.535714C5.01785 0.393634 4.95176 0.257373 4.83413 0.156907C4.7165 0.0564411 4.55696 2.80117e-09 4.3906 2.80117e-09H3.1361C2.96974 2.80117e-09 2.8102 0.0564411 2.69257 0.156907C2.57494 0.257373 2.50885 0.393634 2.50885 0.535714V10.7143H0.627105C0.0708137 10.7143 -0.210272 11.2915 0.184503 11.6287L3.32075 14.843C3.43837 14.9434 3.59785 14.9998 3.76413 14.9998C3.93042 14.9998 4.0899 14.9434 4.20752 14.843L7.34377 11.6287C7.73658 11.2922 7.45706 10.7143 6.89959 10.7143ZM16.3083 8.57143H11.2903C11.124 8.57143 10.9644 8.62787 10.8468 8.72834C10.7292 8.8288 10.6631 8.96506 10.6631 9.10714V10.1786C10.6631 10.3207 10.7292 10.4569 10.8468 10.5574C10.9644 10.6578 11.124 10.7143 11.2903 10.7143H13.4857L11.0841 13.0731C10.9517 13.1736 10.8457 13.297 10.7732 13.435C10.7006 13.5731 10.6631 13.7227 10.6631 13.874V14.4643C10.6631 14.6064 10.7292 14.7426 10.8468 14.8431C10.9644 14.9436 11.124 15 11.2903 15H16.3083C16.4747 15 16.6342 14.9436 16.7519 14.8431C16.8695 14.7426 16.9356 14.6064 16.9356 14.4643V13.3929C16.9356 13.2508 16.8695 13.1145 16.7519 13.014C16.6342 12.9136 16.4747 12.8571 16.3083 12.8571H14.113L16.5145 10.4983C16.647 10.3978 16.7529 10.2744 16.8255 10.1364C16.8981 9.99836 16.9356 9.84875 16.9356 9.69743V9.10714C16.9356 8.96506 16.8695 8.8288 16.7519 8.72834C16.6342 8.62787 16.4747 8.57143 16.3083 8.57143ZM17.526 5.71272L15.2024 0.35558C15.1589 0.251506 15.0788 0.16147 14.973 0.0978115C14.8672 0.0341533 14.741 -1.12951e-05 14.6116 2.80117e-09H12.987C12.8577 -1.12951e-05 12.7314 0.0341533 12.6257 0.0978115C12.5199 0.16147 12.4398 0.251506 12.3963 0.35558L10.0727 5.71272C10.0389 5.79355 10.0283 5.88012 10.0419 5.96516C10.0555 6.05019 10.0928 6.1312 10.1506 6.20136C10.2085 6.27152 10.2852 6.32878 10.3744 6.36832C10.4636 6.40786 10.5626 6.42853 10.6631 6.42857H11.6365C11.7692 6.42861 11.8984 6.39272 12.0057 6.32606C12.113 6.2594 12.1928 6.16541 12.2336 6.05759L12.4068 5.625H15.1903L15.3631 6.05759C15.404 6.16562 15.484 6.25978 15.5916 6.32645C15.6992 6.39313 15.8288 6.42889 15.9618 6.42857H16.9356C17.0361 6.42853 17.1351 6.40786 17.2242 6.36832C17.3134 6.32878 17.3902 6.27152 17.4481 6.20136C17.5059 6.1312 17.5432 6.05019 17.5568 5.96516C17.5703 5.88012 17.5598 5.79355 17.526 5.71272ZM13.1568 3.75L13.7993 2.14286L14.4419 3.75H13.1568Z" fill="black"/>
            </svg>
          </div>
        </div>
        <div class="tasks">
          <div class="task">
            <div class="group_checkbox-title">
              <input type="checkbox">
              <div class="title">Task</div>
            </div>
            <div class="group_time-trash">
              <div>{{new Date().toLocaleDateString()}}</div>
              <div class="trash">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.76409 16.3125C1.76409 16.7601 1.95599 17.1893 2.29757 17.5057C2.63916 17.8222 3.10245 18 3.58552 18H14.5141C14.9972 18 15.4605 17.8222 15.802 17.5057C16.1436 17.1893 16.3355 16.7601 16.3355 16.3125V4.5H1.76409V16.3125ZM12.0855 7.3125C12.0855 7.16332 12.1495 7.02025 12.2633 6.91476C12.3772 6.80927 12.5316 6.75 12.6927 6.75C12.8537 6.75 13.0081 6.80927 13.122 6.91476C13.2358 7.02025 13.2998 7.16332 13.2998 7.3125V15.1875C13.2998 15.3367 13.2358 15.4798 13.122 15.5852C13.0081 15.6907 12.8537 15.75 12.6927 15.75C12.5316 15.75 12.3772 15.6907 12.2633 15.5852C12.1495 15.4798 12.0855 15.3367 12.0855 15.1875V7.3125ZM8.44266 7.3125C8.44266 7.16332 8.50663 7.02025 8.62049 6.91476C8.73435 6.80927 8.88878 6.75 9.0498 6.75C9.21083 6.75 9.36526 6.80927 9.47912 6.91476C9.59298 7.02025 9.65695 7.16332 9.65695 7.3125V15.1875C9.65695 15.3367 9.59298 15.4798 9.47912 15.5852C9.36526 15.6907 9.21083 15.75 9.0498 15.75C8.88878 15.75 8.73435 15.6907 8.62049 15.5852C8.50663 15.4798 8.44266 15.3367 8.44266 15.1875V7.3125ZM4.7998 7.3125C4.7998 7.16332 4.86377 7.02025 4.97763 6.91476C5.09149 6.80927 5.24592 6.75 5.40695 6.75C5.56797 6.75 5.7224 6.80927 5.83626 6.91476C5.95012 7.02025 6.01409 7.16332 6.01409 7.3125V15.1875C6.01409 15.3367 5.95012 15.4798 5.83626 15.5852C5.7224 15.6907 5.56797 15.75 5.40695 15.75C5.24592 15.75 5.09149 15.6907 4.97763 15.5852C4.86377 15.4798 4.7998 15.3367 4.7998 15.1875V7.3125ZM16.9427 1.12501H12.3891L12.0324 0.467584C11.9568 0.327034 11.8404 0.208807 11.6963 0.126202C11.5522 0.0435979 11.386 -0.000106452 11.2165 6.16384e-06H6.87927C6.71017 -0.000596081 6.54431 0.0429453 6.40069 0.125642C6.25707 0.208338 6.1415 0.326845 6.06722 0.467584L5.71052 1.12501H1.15695C0.995923 1.12501 0.841494 1.18427 0.727633 1.28976C0.613771 1.39525 0.549805 1.53832 0.549805 1.68751L0.549805 2.81251C0.549805 2.96169 0.613771 3.10476 0.727633 3.21025C0.841494 3.31574 0.995923 3.37501 1.15695 3.37501H16.9427C17.1037 3.37501 17.2581 3.31574 17.372 3.21025C17.4858 3.10476 17.5498 2.96169 17.5498 2.81251V1.68751C17.5498 1.53832 17.4858 1.39525 17.372 1.28976C17.2581 1.18427 17.1037 1.12501 16.9427 1.12501V1.12501Z" fill="#C1C1C1"/>
                </svg>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
  
</template>

<script>

import 'App/style.css';

import MainHeader from "App/components/header/MainHeader.vue";

import { request } from '../../function js/api'



export default {
    name: "HomePage",
    components: {MainHeader},
    data(){
      return{
        items:[]
      }
    },
    async mounted() {
      await this.getTasks()
      console.log(this.items)
    },

    methods: {
      async getTasks(){
        const result = await request('task/get', { methods: 'GET' })
        this.items = await result.json()
      }
    }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }

  .add-task-container {
    position: absolute;
    display: flex;

    right: 15px;
    bottom: 15px;

    width: 500px;
    height: 570px;
    z-index: 10;

    border-radius: 10px;
    background-color: white;
  }

  .top-container_add-task{
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 118px;
  }

  .container-theme-date-author_add-task {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    height: 118px;
    margin: 10px 0 0 10px;
  }
  
  .buttons-close_add-task-container {
    display: flex;
    width: 100px;
    height: 118px;
    margin: 9px 9px 0 0;

  }

  .input-add-theme {
    display: flex;
    align-items: center;
    width: 400px;
    height: 30px;
    margin: 0 0 10px 0;
  }

  .input-add-theme:hover {
    background-color: rgba(207, 207, 207, 1);
  }

  .text-input-theme {
    display: flex;
    align-items: center;
    margin: 0 10px 0 0;
  }

  #input-theme {
    width: 380px;
    height: 20px;
    background-color: transparent;
  }
  
  .input-add-deadline {
    display: flex;
    margin: 0 0 10px 0;
  }

  .author {
    display: flex;
    margin: 0 0 10px 0;
  }
  .task-block {
    display: flex;
    width: 1425px;
    height: 620px;
    
    border-radius: 10px;

    background: rgba(255, 253, 253, 0.75);
    backdrop-filter: blur(2px);
  }

  .menu-task-block {
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 550px;
    margin: 25px 0 0 25px;
    border-radius: 15px;

    background-color: rgba(238, 238, 238, 1);
  }

  .buttons_add-update {
    display: flex;
    width: 320px;
    height: 35px;
    padding: 0 0 30px 0;
  }
  .add-task {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 18px 0 0 18px;
    width: 235px;
    height: 35px;
    
    border-radius: 10px;

    background-color: rgba(255, 206, 11, 1)


  }

  .open-done_list{
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 300px;
  }
  .open-list {
    display: flex;
    align-items: center;
    width: 280px;
    height: 28px;
    padding: 0 0 0 10px;
    margin: 0 0 5px 20px;
    border-radius: 10px;
    transition: all 100ms ease;
    background-color: rgb(218 215 215);
  }

  .open-list:hover {
    background-color: rgb(218 215 215);
  }

  .done-list {
    display: flex;
    align-items: center;
    width: 280px;
    height: 28px;
    padding: 0 0 0 10px;
    margin: 0 0 5px 20px;
    border-radius: 10px;
    transition: all 100ms ease
  }

  .done-list:hover {
    background-color: rgb(218 215 215);
  }
  
  .group_quick-access_tasks{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1080px;
    height: 620px;
  }
  .quick-access {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1030px;
    height: 45px;
    margin: 25px 0 15px 0;
    padding: 0 10px 0 10px;
    border-radius: 10px;

    background-color: rgba(255, 255, 255, 1);
  }

  .sorting-tasks {
    display: flex;
    align-items: center;
  }

  .tasks {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1060px;
    height: 500px;
  }
  .task {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1050px;
    height: 60px;
    margin: 0 0 10px 0;
    border-radius: 10px;
    background-color: rgba(245, 245, 245, 1);
  }

  .group_checkbox-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0 10px;
  }

  .title {
    display: flex;
    align-items: center;
    margin: 0 0 0 30px;
  }

  .group_time-trash {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .trash {
    display: flex;
    align-items: center;
    margin: 0 20px 0 50px;
  }

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
