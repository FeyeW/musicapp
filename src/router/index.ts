
import { createRouter,
    createWebHashHistory,
    RouteRecordRaw,NavigationGuardNext,RouteLocationNormalized } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ListView from '../views/ListView.vue'



const routes:RouteRecordRaw[] =[
   {
        path: '/',
        name: 'Home',
        meta:{
            type:'Home'
        },
        component: () => Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => About
    },
    {
        path: '/listview',
        name: 'ListView',
        component: () => import('@/views/ListView.vue')
    }
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router