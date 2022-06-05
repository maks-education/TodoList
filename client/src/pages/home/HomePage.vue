<template>
<div>
  <header class="logo-header">
          
        <div class="logo-transition">
            <div class="logo">Todo List</div>

            <div class="transitionbutton">
                <button class="button-transition" @click="TransitionClick=!TransitionClick" >

                    <svg v-show="!TransitionClick" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="#FF9900"/>
                    <path d="M21.5157 21.0622L12.9858 29.5595C12.3963 30.1468 11.4429 30.1468 10.8596 29.5595L9.44217 28.1475C8.85261 27.5601 8.85261 26.6104 9.44217 26.0294L15.4883 20.0062L9.44217 13.9831C8.85261 13.3958 8.85261 12.4461 9.44217 11.865L10.8534 10.4405C11.4429 9.85317 12.3963 9.85317 12.9796 10.4405L21.5094 18.9378C22.1052 19.5251 22.1052 20.4749 21.5157 21.0622V21.0622ZM33.5578 18.9378L25.028 10.4405C24.4384 9.85317 23.4851 9.85317 22.9018 10.4405L21.4843 11.8525C20.8948 12.4399 20.8948 13.3896 21.4843 13.9706L27.5305 19.9938L21.4843 26.0169C20.8948 26.6042 20.8948 27.5539 21.4843 28.135L22.9018 29.547C23.4913 30.1343 24.4447 30.1343 25.028 29.547L33.5578 21.0497C34.1474 20.4749 34.1474 19.5251 33.5578 18.9378Z" fill="black"/>
                    </svg>
                    
                    <svg v-show="TransitionClick" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="#FF9900"/>
                    <path d="M19.4843 18.9378L28.0142 10.4405C28.6037 9.85317 29.5571 9.85317 30.1404 10.4405L31.5578 11.8525C32.1474 12.4399 32.1474 13.3896 31.5578 13.9706L25.5117 19.9938L31.5578 26.0169C32.1474 26.6042 32.1474 27.5539 31.5578 28.135L30.1466 29.5595C29.5571 30.1468 28.6037 30.1468 28.0204 29.5595L19.4906 21.0622C18.8948 20.4749 18.8948 19.5251 19.4843 18.9378ZM7.44217 21.0622L15.972 29.5595C16.5616 30.1468 17.5149 30.1468 18.0982 29.5595L19.5157 28.1475C20.1052 27.5601 20.1052 26.6104 19.5157 26.0294L13.4695 20.0062L19.5157 13.9831C20.1052 13.3958 20.1052 12.4461 19.5157 11.865L18.0982 10.453C17.5087 9.86567 16.5553 9.86567 15.972 10.453L7.44217 18.9503C6.85261 19.5251 6.85261 20.4749 7.44217 21.0622Z" fill="black"/>
                    </svg>

                </button>
            
            <div class="transition-profile-home" v-show="TransitionClick">
            
                <router-link to="/profile" class="profile-transition">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#FFE600"/>
                    <path d="M20 5C11.7137 5 5 11.7137 5 20C5 28.2863 11.7137 35 20 35C28.2863 35 35 28.2863 35 20C35 11.7137 28.2863 5 20 5ZM20 10.8065C22.9395 10.8065 25.3226 13.1895 25.3226 16.129C25.3226 19.0685 22.9395 21.4516 20 21.4516C17.0605 21.4516 14.6774 19.0685 14.6774 16.129C14.6774 13.1895 17.0605 10.8065 20 10.8065ZM20 31.6129C16.4496 31.6129 13.2681 30.004 11.1391 27.4879C12.2762 25.3468 14.502 23.871 17.0968 23.871C17.2419 23.871 17.3871 23.8952 17.5262 23.9375C18.3125 24.1915 19.1351 24.3548 20 24.3548C20.8649 24.3548 21.6935 24.1915 22.4738 23.9375C22.6129 23.8952 22.7581 23.871 22.9032 23.871C25.498 23.871 27.7238 25.3468 28.8609 27.4879C26.7319 30.004 23.5504 31.6129 20 31.6129Z" fill="black"/>
                    </svg>
                </router-link>

                <router-link to="/home" class="home-transition">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#42FF00"/>
                    <path d="M19.5492 12.2639L8.66711 21.7556V31.9999C8.66711 32.2651 8.76661 32.5195 8.94371 32.7071C9.12082 32.8946 9.36102 33 9.61149 33L16.2256 32.9819C16.4753 32.9806 16.7143 32.8746 16.8904 32.6872C17.0664 32.4998 17.1653 32.2461 17.1653 31.9818V25.9992C17.1653 25.734 17.2648 25.4796 17.4419 25.292C17.619 25.1045 17.8592 24.9991 18.1097 24.9991H21.8871C22.1376 24.9991 22.3778 25.1045 22.5549 25.292C22.732 25.4796 22.8315 25.734 22.8315 25.9992V31.9774C22.8311 32.109 22.8553 32.2394 22.9025 32.3611C22.9498 32.4828 23.0193 32.5934 23.1071 32.6866C23.1948 32.7798 23.299 32.8537 23.4138 32.9042C23.5286 32.9547 23.6516 32.9806 23.7759 32.9806L30.3877 33C30.6381 33 30.8783 32.8946 31.0554 32.7071C31.2325 32.5195 31.332 32.2651 31.332 31.9999V21.7487L20.4523 12.2639C20.3244 12.1548 20.165 12.0952 20.0008 12.0952C19.8365 12.0952 19.6771 12.1548 19.5492 12.2639V12.2639ZM36.7386 18.7153L31.8042 14.4079V5.75008C31.8042 5.55115 31.7296 5.36036 31.5968 5.21969C31.4639 5.07903 31.2838 5 31.0959 5H27.7906C27.6028 5 27.4226 5.07903 27.2898 5.21969C27.157 5.36036 27.0824 5.55115 27.0824 5.75008V10.2887L21.798 5.68445C21.2909 5.24251 20.6545 5.00088 19.9978 5.00088C19.3411 5.00088 18.7047 5.24251 18.1976 5.68445L3.25705 18.7153C3.18532 18.7781 3.12599 18.8552 3.08242 18.9423C3.03886 19.0293 3.01192 19.1246 3.00315 19.2227C2.99438 19.3208 3.00395 19.4198 3.03131 19.514C3.05867 19.6082 3.10329 19.6957 3.16261 19.7716L4.6677 21.7094C4.72686 21.7855 4.79963 21.8486 4.88184 21.895C4.96404 21.9413 5.05408 21.9701 5.14679 21.9795C5.2395 21.989 5.33306 21.979 5.42211 21.9501C5.51117 21.9213 5.59397 21.8741 5.66578 21.8113L19.5492 9.70115C19.6771 9.59197 19.8365 9.53243 20.0008 9.53243C20.165 9.53243 20.3244 9.59197 20.4523 9.70115L34.3363 21.8113C34.408 21.8741 34.4907 21.9213 34.5796 21.9503C34.6685 21.9793 34.762 21.9894 34.8546 21.9801C34.9473 21.9708 35.0373 21.9423 35.1195 21.8962C35.2017 21.85 35.2745 21.7872 35.3338 21.7112L36.8389 19.7735C36.8982 19.6972 36.9426 19.6092 36.9696 19.5146C36.9967 19.42 37.0058 19.3207 36.9965 19.2223C36.9871 19.124 36.9595 19.0286 36.9153 18.9415C36.871 18.8545 36.811 18.7776 36.7386 18.7153V18.7153Z" fill="black"/>
                    </svg>
                </router-link>

                </div>
            </div>
        </div>

        <div class="search-additionally">
          <div class="search-wrapper">
                <input type="text" placeholder="Search..." class="search" v-show="SearchButtonClick">
                  <button class="search-wrapper-button" @click="SearchButtonClick=!SearchButtonClick"> 
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#FFE500"/>
                  <path d="M32.6582 28.6162L27.79 23.748C27.5703 23.5283 27.2725 23.4062 26.96 23.4062H26.1641C27.5117 21.6826 28.3125 19.5146 28.3125 17.1562C28.3125 11.5459 23.7666 7 18.1562 7C12.5459 7 8 11.5459 8 17.1562C8 22.7666 12.5459 27.3125 18.1562 27.3125C20.5146 27.3125 22.6826 26.5117 24.4062 25.1641V25.96C24.4062 26.2725 24.5283 26.5703 24.748 26.79L29.6162 31.6582C30.0752 32.1172 30.8174 32.1172 31.2715 31.6582L32.6533 30.2764C33.1123 29.8174 33.1123 29.0752 32.6582 28.6162ZM18.1562 23.4062C14.7041 23.4062 11.9062 20.6133 11.9062 17.1562C11.9062 13.7041 14.6992 10.9062 18.1562 10.9062C21.6084 10.9062 24.4062 13.6992 24.4062 17.1562C24.4062 20.6084 21.6133 23.4062 18.1562 23.4062Z" fill="black"/>
                  </svg>
                </button>
          </div>
        

          <button class="additionally" @click="AdditionallyClick=!AdditionallyClick">
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22.5" cy="22.5" r="22.5" fill="#FF9900"/>
              <path d="M12.75 18.1473H32.25C32.6642 18.1473 33 17.8707 33 17.5295V15.9848C33 15.6436 32.6642 15.3669 32.25 15.3669H12.75C12.3358 15.3669 12 15.6436 12 15.9848V17.5295C12 17.8707 12.3358 18.1473 12.75 18.1473ZM12.75 24.3259H32.25C32.6642 24.3259 33 24.0493 33 23.7081V22.1634C33 21.8222 32.6642 21.5456 32.25 21.5456H12.75C12.3358 21.5456 12 21.8222 12 22.1634V23.7081C12 24.0493 12.3358 24.3259 12.75 24.3259ZM12.75 30.5046H32.25C32.6642 30.5046 33 30.2279 33 29.8867V28.342C33 28.0008 32.6642 27.7242 32.25 27.7242H12.75C12.3358 27.7242 12 28.0008 12 28.342V29.8867C12 30.2279 12.3358 30.5046 12.75 30.5046Z" fill="black"/>
              </svg>
          </button>
          
          <div class="menu-additionaly" v-show="AdditionallyClick">
            <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="30" rx="5" fill="#292929"/>
            <path d="M61.3899 20V9.09091H62.7109V18.8281H67.7819V20H61.3899ZM74.4808 20.1705C73.7421 20.1705 73.0941 19.9947 72.5365 19.6431C71.9826 19.2915 71.5493 18.7997 71.2368 18.1676C70.9279 17.5355 70.7734 16.7969 70.7734 15.9517C70.7734 15.0994 70.9279 14.3555 71.2368 13.7198C71.5493 13.0842 71.9826 12.5906 72.5365 12.239C73.0941 11.8874 73.7421 11.7116 74.4808 11.7116C75.2194 11.7116 75.8657 11.8874 76.4197 12.239C76.9772 12.5906 77.4105 13.0842 77.7194 13.7198C78.0319 14.3555 78.1882 15.0994 78.1882 15.9517C78.1882 16.7969 78.0319 17.5355 77.7194 18.1676C77.4105 18.7997 76.9772 19.2915 76.4197 19.6431C75.8657 19.9947 75.2194 20.1705 74.4808 20.1705ZM74.4808 19.0412C75.0419 19.0412 75.5035 18.8974 75.8657 18.6097C76.2279 18.3221 76.496 17.9439 76.6701 17.4751C76.8441 17.0064 76.9311 16.4986 76.9311 15.9517C76.9311 15.4048 76.8441 14.8952 76.6701 14.4229C76.496 13.9506 76.2279 13.5689 75.8657 13.2777C75.5035 12.9865 75.0419 12.8409 74.4808 12.8409C73.9197 12.8409 73.4581 12.9865 73.0958 13.2777C72.7336 13.5689 72.4655 13.9506 72.2915 14.4229C72.1175 14.8952 72.0305 15.4048 72.0305 15.9517C72.0305 16.4986 72.1175 17.0064 72.2915 17.4751C72.4655 17.9439 72.7336 18.3221 73.0958 18.6097C73.4581 18.8974 73.9197 19.0412 74.4808 19.0412ZM84.9097 23.2386C84.3024 23.2386 83.7804 23.1605 83.3436 23.0043C82.9068 22.8516 82.5428 22.6491 82.2516 22.397C81.964 22.1484 81.735 21.8821 81.5645 21.598L82.5659 20.8949C82.6796 21.044 82.8234 21.2145 82.9974 21.4062C83.1714 21.6016 83.4093 21.7702 83.7112 21.9123C84.0166 22.0579 84.4161 22.1307 84.9097 22.1307C85.5702 22.1307 86.1153 21.9709 86.545 21.6513C86.9747 21.3317 87.1895 20.831 87.1895 20.1491V18.4872H87.083C86.9906 18.6364 86.8592 18.821 86.6888 19.0412C86.5219 19.2578 86.2804 19.4513 85.9644 19.6218C85.6519 19.7887 85.2293 19.8722 84.6966 19.8722C84.0361 19.8722 83.443 19.7159 82.9175 19.4034C82.3955 19.0909 81.9818 18.6364 81.6764 18.0398C81.3745 17.4432 81.2236 16.7187 81.2236 15.8665C81.2236 15.0284 81.371 14.2987 81.6657 13.6772C81.9604 13.0522 82.3706 12.5692 82.8962 12.2283C83.4217 11.8839 84.029 11.7116 84.7179 11.7116C85.2506 11.7116 85.6732 11.8004 85.9857 11.978C86.3017 12.152 86.5432 12.3509 86.7101 12.5746C86.8805 12.7947 87.0119 12.9759 87.1043 13.1179H87.2321V11.8182H88.4466V20.2344C88.4466 20.9375 88.2868 21.5092 87.9672 21.9496C87.6511 22.3935 87.225 22.7184 86.6888 22.9244C86.1561 23.1339 85.5631 23.2386 84.9097 23.2386ZM84.8671 18.7429C85.3713 18.7429 85.7975 18.6275 86.1455 18.3967C86.4935 18.1658 86.758 17.8338 86.9391 17.4006C87.1203 16.9673 87.2108 16.4489 87.2108 15.8452C87.2108 15.2557 87.122 14.7354 86.9445 14.2844C86.7669 13.8335 86.5041 13.4801 86.1561 13.2244C85.8081 12.9687 85.3784 12.8409 84.8671 12.8409C84.3344 12.8409 83.8905 12.9759 83.5354 13.2457C83.1838 13.5156 82.9193 13.8778 82.7417 14.3324C82.5677 14.7869 82.4807 15.2912 82.4807 15.8452C82.4807 16.4134 82.5695 16.9158 82.747 17.3526C82.9281 17.7859 83.1945 18.1268 83.546 18.3754C83.9011 18.6204 84.3415 18.7429 84.8671 18.7429ZM101.29 20.1705C100.552 20.1705 99.9036 19.9947 99.3461 19.6431C98.7921 19.2915 98.3589 18.7997 98.0464 18.1676C97.7374 17.5355 97.583 16.7969 97.583 15.9517C97.583 15.0994 97.7374 14.3555 98.0464 13.7198C98.3589 13.0842 98.7921 12.5906 99.3461 12.239C99.9036 11.8874 100.552 11.7116 101.29 11.7116C102.029 11.7116 102.675 11.8874 103.229 12.239C103.787 12.5906 104.22 13.0842 104.529 13.7198C104.841 14.3555 104.998 15.0994 104.998 15.9517C104.998 16.7969 104.841 17.5355 104.529 18.1676C104.22 18.7997 103.787 19.2915 103.229 19.6431C102.675 19.9947 102.029 20.1705 101.29 20.1705ZM101.29 19.0412C101.851 19.0412 102.313 18.8974 102.675 18.6097C103.038 18.3221 103.306 17.9439 103.48 17.4751C103.654 17.0064 103.741 16.4986 103.741 15.9517C103.741 15.4048 103.654 14.8952 103.48 14.4229C103.306 13.9506 103.038 13.5689 102.675 13.2777C102.313 12.9865 101.851 12.8409 101.29 12.8409C100.729 12.8409 100.268 12.9865 99.9054 13.2777C99.5432 13.5689 99.2751 13.9506 99.1011 14.4229C98.9271 14.8952 98.8401 15.4048 98.8401 15.9517C98.8401 16.4986 98.9271 17.0064 99.1011 17.4751C99.2751 17.9439 99.5432 18.3221 99.9054 18.6097C100.268 18.8974 100.729 19.0412 101.29 19.0412ZM113.573 16.6548V11.8182H114.83V20H113.573V18.6151H113.488C113.296 19.0305 112.998 19.3839 112.593 19.6751C112.188 19.9627 111.677 20.1065 111.059 20.1065C110.547 20.1065 110.093 19.9947 109.695 19.771C109.297 19.5437 108.985 19.2028 108.758 18.7482C108.53 18.2901 108.417 17.7131 108.417 17.017V11.8182H109.674V16.9318C109.674 17.5284 109.841 18.0043 110.174 18.3594C110.512 18.7145 110.942 18.892 111.464 18.892C111.776 18.892 112.094 18.8121 112.417 18.6523C112.744 18.4925 113.017 18.2475 113.237 17.9173C113.461 17.587 113.573 17.1662 113.573 16.6548ZM122.191 11.8182V12.8835H117.951V11.8182H122.191ZM119.186 9.85795H120.444V17.6562C120.444 18.0114 120.495 18.2777 120.598 18.4553C120.705 18.6293 120.84 18.7464 121.003 18.8068C121.17 18.8636 121.346 18.892 121.53 18.892C121.669 18.892 121.782 18.8849 121.871 18.8707C121.96 18.853 122.031 18.8388 122.084 18.8281L122.34 19.9574C122.255 19.9893 122.136 20.0213 121.983 20.0533C121.83 20.0888 121.637 20.1065 121.402 20.1065C121.047 20.1065 120.699 20.0302 120.358 19.8775C120.021 19.7248 119.74 19.4922 119.517 19.1797C119.297 18.8672 119.186 18.473 119.186 17.9972V9.85795Z" fill="white"/>
            <line x1="30.5" x2="30.5" y2="30" stroke="#FF0000"/>
            <path d="M23.55 21H21.3V10.5453C21.3 9.69341 20.6945 8.99997 19.95 8.99997H16.8V11H19.5V23H23.55C23.7986 23 24 22.7762 24 22.5V21.5C24 21.2237 23.7986 21 23.55 21ZM14.7817 7.03153L9.38175 8.58591C8.98097 8.70122 8.7 9.1156 8.7 9.59122V21H6.45C6.20137 21 6 21.2237 6 21.5V22.5C6 22.7762 6.20137 23 6.45 23H15.9V8.03685C15.9 7.36247 15.3499 6.86778 14.7817 7.03153V7.03153ZM13.425 16C13.0523 16 12.75 15.5522 12.75 15C12.75 14.4478 13.0523 14 13.425 14C13.7977 14 14.1 14.4478 14.1 15C14.1 15.5522 13.7977 16 13.425 16Z" fill="#FF0000"/>
            </svg>
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

    data(){
      return{
        TransitionClick: false,
        SearchButtonClick: false,
        AdditionallyClick: false,
      }
    },

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
        
    }
}
</script>

<style scoped>

  .logo{
    font-style: normal;
    font-size: 28px;
    line-height: 15px;
    letter-spacing: 0.1em;
  }
  .search-additionally{
    display: flex;
  }
  .search-wrapper{
    display: flex;
  }
  .search{
    width: 230px;
    height: 30px;
    margin-top: 28px;
    background: #ffffff;
    border-radius: 5px;
    
    outline: none;
    border-width: 0;
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
  .search-wrapper-button{
    display: flex;
    background: none;
    border-width: 0;
    outline: none;
    margin-top: 23px;
  }

  .menu-additionaly{
    position: absolute;
    top: 80px;
    right: 35px;
  }
</style>
