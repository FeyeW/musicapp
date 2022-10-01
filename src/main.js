import { createApp } from 'vue'

import { ElCarousel, ElProgress, ElInput, ElSkeleton, ElSkeletonItem } from 'element-plus'
import 'element-plus/dist/index.css'

import { PasswordInput, NumberKeyboard } from 'vant';
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'
import store from './store/vuexIndex'

//挂载pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
//pinia持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)

createApp(App).
    use(ElCarousel).
    use(ElProgress).
    use(ElInput).
    use(ElSkeleton).
    use(ElSkeletonItem).
    use(PasswordInput).
    use(NumberKeyboard).
    use(router).use(store).use(pinia).
    mount('#app')



