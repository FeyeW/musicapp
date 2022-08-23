import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            musicObj: {}
        }
    },
    mutations:
    {
        saveMusic(state, obj) {
            state.musicObj = obj
        }
    }
})
/* const app = createApp({})
app.use(store)  */
export default store
