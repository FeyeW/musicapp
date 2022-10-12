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
            acitve: true
        }
    },
    getters: {
    },
    actions: {
        //拿到列表中的默认播放歌单
        async getMusicList(params) {
            let res = await getPlayList(params)
            const index = parseInt(Math.random() * 10)
            res.data.playlist.tracks[index] ? this.bottomMusic = res.data.playlist.tracks[index] : res.data.playlist.tracks[0]
        }
    },
    persist: true
})