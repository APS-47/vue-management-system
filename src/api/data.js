// 存放请求接口供组件调用（上方连接组件的函数，下方连接axios的调用数据），调用HttpRequest类
import axios from './axios.js'
// 获取菜单栏数据请求接口
export const getMenu =(params)=>{
  return axios.request({
    url:'/permission/getMenu',
    method:'post',
    data:params
  })
}
// 获取主页数据请求接口
export const getData = (params) => {
  return axios.request({
    url: '/home/getData',
    method: 'get',
    data: params
  })
}
// 获取用户列表数据请求接口
export const getUser = (params) => {
  return axios.request({
    url: '/user/getUser',
    method: 'get',
    params
  })
}
