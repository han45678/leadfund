import { createApp } from 'vue'
import { createPinia } from 'pinia'         // 引入 Pinia
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()                 // 建立 Pinia 實例
app.use(pinia)                             // 註冊 Pinia

app.use(router)
app.mount('#app')
