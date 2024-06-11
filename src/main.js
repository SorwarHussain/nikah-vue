//import './assets/css/global.css';
import "@/assets/css/global.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {useAuthStore} from "@/stores/auth";
import App from './App.vue'
import router from './router'
import './axios'

//bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
//fontawesome below 2
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js"

const app = createApp(App)

app.use(createPinia())
app.use(router)

const {attempt} = useAuthStore();

attempt(localStorage.getItem('token'))
    .then(() => {
        app.mount('#app')
    })

    
//createApp(App).use(router).mount('#app')


