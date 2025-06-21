import { createRouter, createWebHistory } from 'vue-router'

import Home from './home/index.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/:pathMatch(.*)*', redirect: '/' } // 把亂打的網址導回首頁
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
