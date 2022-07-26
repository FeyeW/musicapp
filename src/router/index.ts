
import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'


//类型校验，规范化typescript，增加路由对象类型限制，好处：允许在基础路由里增加开发自定义属性
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        meta: {
            type: 'Home'
        },
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/listview',
        name: 'ListView',
        component: () => import('../views/ListView.vue')
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router