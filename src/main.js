import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './http'
import tailwind from './assets/tailwind.css'


const app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$axios = axios;
app.use(tailwind)
