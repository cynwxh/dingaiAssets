import axios from 'axios'
import store from '../store'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.baseURL = 'http://localhost:3000'
  if (store.state.token) {
    config.headers['x-access-token'] = store.state.token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
  // 对响应数据做点什么
  if (res.code == 1001) {
    store.commit('save_token', '')
    window.location.href = '/'
  }
  return res
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export function postLogin (data) {
  return axios({
    url: '/login',
    method: 'post',
    data: data
  })
}
