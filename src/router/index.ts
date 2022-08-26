
import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'

import login from '../views/Login/Login.vue'

//类型校验，规范化typescript，增加路由对象类型限制，好处：允许在基础路由里增加开发自定义属性
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            type: 'Login'
        },
        component: () => import('../views/Login/Login.vue'),
    },
    {
        path: '/login/phone',
        name: 'Phone',
        meta: {
            type: 'Login'
        },
        component: () => import('../views/Login/Phone.vue')
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            type: 'Home'
        },
        component: () => import('../views/Home.vue')
    },
    {
        path: '/view',
        name: 'View',
        component: () => import('../views/View.vue'),
        meta: {
            keepAlive: true // 需要被缓存
        }

    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router