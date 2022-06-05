<template>
<div>
    <main-header />

    <div class="container-profile">
        <!-- Блок с фотографией и логином пользователя -->
        <div class="img-login">
            <div class="img">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 0C15.6653 0 0 15.6653 0 35C0 54.3347 15.6653 70 35 70C54.3347 70 70 54.3347 70 35C70 15.6653 54.3347 0 35 0ZM35 13.5484C41.8589 13.5484 47.4194 19.1089 47.4194 25.9677C47.4194 32.8266 41.8589 38.3871 35 38.3871C28.1411 38.3871 22.5806 32.8266 22.5806 25.9677C22.5806 19.1089 28.1411 13.5484 35 13.5484ZM35 62.0968C26.7157 62.0968 19.2923 58.3427 14.3246 52.4718C16.9778 47.4758 22.1714 44.0323 28.2258 44.0323C28.5645 44.0323 28.9032 44.0887 29.2278 44.1875C31.0625 44.7802 32.9819 45.1613 35 45.1613C37.0181 45.1613 38.9516 44.7802 40.7722 44.1875C41.0968 44.0887 41.4355 44.0323 41.7742 44.0323C47.8286 44.0323 53.0222 47.4758 55.6754 52.4718C50.7077 58.3427 43.2843 62.0968 35 62.0968Z" fill="black"/>
                </svg>
            </div>
            <div class="user-login">Login</div>    
        </div>
        <!-- Блок с данными пользователя -->
        <div class="userData">

            <div class="content-block-left">
                <div class="title-block">Name</div>
                <div class="content-block-content-edit">
                    <div>
                        <div v-if="!isEditLogin" class="field-block"></div>
                        <input v-else type="text">
                        
                    </div>
                    <button class="content-edit" @click="toggleLoginEdit">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17.5" cy="17.5" r="17.5" fill="#FECF56"/>
                        <path d="M15.7503 17.4998C18.5122 17.4998 20.7505 15.1496 20.7505 12.2499C20.7505 9.35014 18.5122 7 15.7503 7C12.9885 7 10.7501 9.35014 10.7501 12.2499C10.7501 15.1496 12.9885 17.4998 15.7503 17.4998ZM19.2505 18.8122H18.5981C17.7309 19.2306 16.766 19.4685 15.7503 19.4685C14.7347 19.4685 13.7737 19.2306 12.9026 18.8122H12.2502C9.35165 18.8122 7 21.2813 7 24.3246V26.0308C7 27.1177 7.83988 27.9995 8.87507 27.9995H19.6138C19.52 27.7206 19.481 27.4253 19.5122 27.1259L19.7778 24.6281L19.8247 24.1728L20.1333 23.8488L23.153 20.6784C22.1959 19.5423 20.8091 18.8122 19.2505 18.8122V18.8122ZM21.0201 24.7716L20.7544 27.2735C20.7115 27.6919 21.0474 28.0446 21.442 27.9954L23.821 27.7165L29.2079 22.0606L26.407 19.1198L21.0201 24.7716V24.7716ZM31.7275 18.0288L30.247 16.4744C29.8837 16.0929 29.2899 16.0929 28.9266 16.4744L27.45 18.0247L27.2899 18.1929L30.0947 21.1336L31.7275 19.4192C32.0908 19.0337 32.0908 18.4144 31.7275 18.0288V18.0288Z" fill="black"/>
                        </svg>
                    </button>
                    
                </div>
            </div>

            <div class="content-block-right">
                <div class="title-block">Surname</div>
                <div class="content-block-content-edit">
                    <div class="field-block"></div>
                    <button class="content-edit">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17.5" cy="17.5" r="17.5" fill="#FECF56"/>
                        <path d="M15.7503 17.4998C18.5122 17.4998 20.7505 15.1496 20.7505 12.2499C20.7505 9.35014 18.5122 7 15.7503 7C12.9885 7 10.7501 9.35014 10.7501 12.2499C10.7501 15.1496 12.9885 17.4998 15.7503 17.4998ZM19.2505 18.8122H18.5981C17.7309 19.2306 16.766 19.4685 15.7503 19.4685C14.7347 19.4685 13.7737 19.2306 12.9026 18.8122H12.2502C9.35165 18.8122 7 21.2813 7 24.3246V26.0308C7 27.1177 7.83988 27.9995 8.87507 27.9995H19.6138C19.52 27.7206 19.481 27.4253 19.5122 27.1259L19.7778 24.6281L19.8247 24.1728L20.1333 23.8488L23.153 20.6784C22.1959 19.5423 20.8091 18.8122 19.2505 18.8122V18.8122ZM21.0201 24.7716L20.7544 27.2735C20.7115 27.6919 21.0474 28.0446 21.442 27.9954L23.821 27.7165L29.2079 22.0606L26.407 19.1198L21.0201 24.7716V24.7716ZM31.7275 18.0288L30.247 16.4744C29.8837 16.0929 29.2899 16.0929 28.9266 16.4744L27.45 18.0247L27.2899 18.1929L30.0947 21.1336L31.7275 19.4192C32.0908 19.0337 32.0908 18.4144 31.7275 18.0288V18.0288Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="content-block-left">
                <div class="title-block">Email</div>
                <div class="content-block-content-edit">
                    <div class="field-block"></div>
                    <button class="content-edit">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17.5" cy="17.5" r="17.5" fill="#FECF56"/>
                        <path d="M23.474 9.5714L27.3889 13.4479C27.5538 13.6113 27.5538 13.8777 27.3889 14.041L17.9097 23.4272L13.8819 23.8699C13.3438 23.9301 12.888 23.4788 12.9488 22.9459L13.3958 18.9576L22.875 9.5714C23.0399 9.40809 23.309 9.40809 23.474 9.5714ZM30.5052 8.58722L28.3872 6.48994C27.7274 5.83669 26.6554 5.83669 25.9913 6.48994L24.4549 8.01133C24.2899 8.17464 24.2899 8.4411 24.4549 8.60441L28.3698 12.481C28.5347 12.6443 28.8038 12.6443 28.9688 12.481L30.5052 10.9596C31.1649 10.302 31.1649 9.24048 30.5052 8.58722ZM22.6667 20.8744V25.2495H8.77778V11.4968H18.7517C18.8906 11.4968 19.0208 11.4409 19.1207 11.3464L20.8568 9.62727C21.1866 9.30064 20.9523 8.74624 20.4878 8.74624H8.08333C6.93316 8.74624 6 9.67025 6 10.8091V25.9371C6 27.076 6.93316 28 8.08333 28H23.3611C24.5113 28 25.4444 27.076 25.4444 25.9371V19.1553C25.4444 18.6954 24.8845 18.4677 24.5547 18.79L22.8186 20.5091C22.7231 20.6079 22.6667 20.7369 22.6667 20.8744Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="content-block-right">
                <div class="title-block">Password</div>
                <div class="content-block-content-edit">
                    <div class="field-block"></div>
                    <button class="content-edit">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17.5" cy="17.5" r="17.5" fill="#FECF56"/>
                        <path d="M23.474 9.5714L27.3889 13.4479C27.5538 13.6113 27.5538 13.8777 27.3889 14.041L17.9097 23.4272L13.8819 23.8699C13.3438 23.9301 12.888 23.4788 12.9488 22.9459L13.3958 18.9576L22.875 9.5714C23.0399 9.40809 23.309 9.40809 23.474 9.5714ZM30.5052 8.58722L28.3872 6.48994C27.7274 5.83669 26.6554 5.83669 25.9913 6.48994L24.4549 8.01133C24.2899 8.17464 24.2899 8.4411 24.4549 8.60441L28.3698 12.481C28.5347 12.6443 28.8038 12.6443 28.9688 12.481L30.5052 10.9596C31.1649 10.302 31.1649 9.24048 30.5052 8.58722ZM22.6667 20.8744V25.2495H8.77778V11.4968H18.7517C18.8906 11.4968 19.0208 11.4409 19.1207 11.3464L20.8568 9.62727C21.1866 9.30064 20.9523 8.74624 20.4878 8.74624H8.08333C6.93316 8.74624 6 9.67025 6 10.8091V25.9371C6 27.076 6.93316 28 8.08333 28H23.3611C24.5113 28 25.4444 27.076 25.4444 25.9371V19.1553C25.4444 18.6954 24.8845 18.4677 24.5547 18.79L22.8186 20.5091C22.7231 20.6079 22.6667 20.7369 22.6667 20.8744Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import MainHeader from "App/components/header/MainHeader.vue";
export default {
    name: 'ProfilePage',
    components: {MainHeader},
    data() {
        return {
            isEditLogin: false,
        }
    },
    methods: {
        toggleLoginEdit() {
            this.isEditLogin = !this.isEditLogin
        }
    },
}
</script>

<style scoped>
    .container-profile{
        display: flex;
    }

    .img-login{
        display: flex;
        width: 318px;
        height: 120px;
        margin-left: 93px;
        margin-top: 78px;
    }

    .img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        border-width: 0;
        border-style: solid;
        border-radius: 10px;
        background: orange;
    }

    .user-login{
        display: flex;
        justify-content: center;
        width: 150px;
        height: 35px;
        margin-left: 48px;
        border-width: 0;
        border-style: solid;
        border-radius: 5px;
        background: orange;

        font-family: 'Roboto', sans-serif;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: 5px;
    }

    .userData{
        display: flex;
        flex-wrap: wrap;
        width: 700px;
        height: 160px;
        margin-left: 112px;
        margin-top: 118px;
        padding-left: 1px;
    }

    .title-block{
        margin-left: 3px;
    }

    .content-block-left{
        width: 300px;
        height: 60px;
        margin-right: 70px;
    }

    .content-block-right{
        width: 300px;
        height: 60px;
    }

    .content-block-content-edit{
        display: flex;
        align-items: center;
    }

    .field-block{
        width: 250px;
        height: 30px;
        margin-right: 14px;
        border-width: 0;
        border-style: solid;
        border-radius: 5px;
        background: white;
    }

    .content-edit{
        display: flex;
        border-width: 0;
        outline: none;
        background: none;
    }



</style>
