import { createApp } from 'vue'

import { ElCarousel } from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

createApp(App).use(ElCarousel).use(router).mount('#app')