import {App} from "vue";
import { createRouter, createWebHistory } from 'vue-router'

export function router(app: App) {
    app.use(createRouter({
        history: createWebHistory(),
        routes: [
            {
                name: 'index',
                path: '/',
                component: () => import('../pages/Index.vue')
            },
            {
                name: 'profile',
                path: '/:url',
                component: () => import('../pages/Profile.vue')
            }
        ]
    }))
}