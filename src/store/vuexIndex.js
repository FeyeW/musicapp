import { createStore } from 'vuex'
import { getPlayList } from '../api/index'
/* 配合vuex进行持久化数据*/
import persistedState from 'vuex-persistedstate'


const store = createStore({
    state() {
        return {
            //整个音乐列表的数据存储
            musicObj: {},
            //底部随机音乐的 存储
            bottomMusic: {},
            //存储是否点击歌曲
            isAcitve: true
        }
    },
    mutations:
    {
        //保存发现好歌单信息
        saveMusic(state, obj) {
            state.musicObj = obj
        },
        //通过acion异步获取底部歌单播放详情
        getMusic(state, obj) {
            state.bottomMusic = obj
        },
        //更新播放拿到的歌单详情
        getButtomMusic(state, obj) {
            state.bottomMusic.unshift(obj)
            state.bottomMusic.pop()
        },
        //更新播放状态
        getIsActive(state, value) {
            state.isAcitve = value
        }
    },
    actions: {
        //拿到列表中的默认播放歌单
        async getMusicList(context) {
            let res = await getPlayList(1)
            context.commit('getMusic', res.data.playlist.tracks)

        }
    },
    plugins: [persistedState(/* { storage: window.sessionStorage } */)]
})

export default store
