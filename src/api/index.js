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
/* 获取播放的视频 */
export function getPlayViode() {
    return axios.get(`${baseURL}/personalized/mv`)
}
/* 获取推荐的音乐台 */
export function getPlayRadio() {
    return axios.get(`${baseURL}/personalized/djprogram`)
}
/* 获取歌单评论 */
export function getCommentList(params) {
    return axios.get(`${baseURL}/comment/playlist?id=${params}`)
}

/* 发送手机验证码 */
export function postNumber(phone) {
    return axios.get(`${baseURL}/captcha/sent?phone=${phone}`)
}

/* 验证手机验证码是否正确 */
export function checkVerCode(phone, code)
{
    return axios.get(`${baseURL}/captcha/verify?phone=${phone}&captcha=${code}`)
}