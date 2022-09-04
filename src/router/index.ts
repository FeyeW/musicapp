
import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'


const Login = () => import('../views/Login/Login.vue')
const Phone = () => import('../views/Login/Phone.vue')
const Vcode = () => import('../views/Login/VerCode.vue')
const Home = () => import('../views/Home.vue')
const View = () => import('../views/View.vue')
const Comment = () => import('../views/Comment.vue')

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
        component: Login,
    },
    {
        path: '/login/phone',
        name: 'Phone',
        meta: {
            type: 'Login'
        },
        component: Phone,
    },
    {
        path: '/login/phone/vcode',
        name: 'Vcode',
        component: Vcode,
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            keepAlive: true
        },
        component: Home
    },
    {
        path: '/view',
        name: 'View',
        component: View,
        meta: {
            keepAlive: true // 需要被缓存
        },
    },
    {
        path: '/comment',
        name: 'Comment',
        component: Comment
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router