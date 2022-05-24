import { createRouter, createWebHistory } from 'vue-router'

const Home = () =>
    import ('../views/Home.vue')

const router = createRouter({
    history: createWebHistory(),
    base: '/',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () =>
                import ( /* webpackChunkName:'about'*/ '../views/About.vue')
        },
        {
            path: '/listview',
            name: 'listview',
            component: () =>
                import ( /* webpackChunkName:'listview' */ '../views/ListView.vue')
        }
    ]
});

export default router