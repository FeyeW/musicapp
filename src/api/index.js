import axios from 'axios'

let baseURL = 'http://localhost:3000'
    /* 获取banner */
export function getBanner(params) {
    return axios.get(`${baseURL}/banner?type=${params}`)
}
/* 获取推荐歌单 */
export function getPerson(params) {
    return axios.get(`${baseURL}/personalized?limit=${params}`)
}