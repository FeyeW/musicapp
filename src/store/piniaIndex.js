import { defineStore } from 'pinia'
import { getPlayList } from '../api/index'
export const mainStore = defineStore('main', {
    state: () => {
        return {
            //整个音乐列表的数据存储
            musicObj: {},
            //底部随机音乐的 存储
            bottomMusic: {},
            //存储是否点击歌曲
            isAcitve: true
        }
    },
    getters: {
    },
    actions: {
        //拿到列表中的默认播放歌单
        async getMusicList(context) {
            //const index = parseInt(Math.random() * 10)
            // console.log(index)
            let res = await getPlayList(1)
            // state.bottomMusic = res.data.playlist.tracks
            // context.commit('getMusic', res.data.playlist.tracks)

        }
    },
    persist: true
})