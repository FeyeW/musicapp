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
/* 获取歌单详情页 */
export function getPlayList(params) {
    return axios.get(`${baseURL}/playlist/detail?id=${params}`)
}

export function getPlayViode() {
    return axios.get(`${baseURL}/personalized/mv`)
}

export function getPlayRadio() {
    return axios.get(`${baseURL}/personalized/djprogram`)
}