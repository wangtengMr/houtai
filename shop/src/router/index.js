import { createRouter, createWebHashHistory } from "vue-router"

import index from "~/pages/index.vue"
import NotFound from "~/pages/404.vue"
const routes = [
    {
        path: "/",
        component: index
    },
    {
        path: "/login",
        component: () => import('~/pages/Login.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router