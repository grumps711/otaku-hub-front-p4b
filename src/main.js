import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import piniaPersist from 'pinia-plugin-persist'

/* import VueAxios from './plugins/axios' */




createApp(App).use(createPinia().use(piniaPersist)).use(router).mount('#app')
