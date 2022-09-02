import { createApp } from 'vue'

import { ElCarousel, ElProgress,ElInput } from 'element-plus'
import 'element-plus/dist/index.css'

import { PasswordInput, NumberKeyboard } from 'vant';
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).
    use(ElCarousel).
    use(ElProgress).
    use(ElInput).
    use(PasswordInput).
    use(NumberKeyboard).
    use(router).use(store).
    mount('#app')



