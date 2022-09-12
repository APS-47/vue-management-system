// 对axios进行二次封装
import axios from 'axios'
import config from '../config/index'

// 对环境变量进行判断使用开发环境的接口地址还是使用生产环境的接口地址
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

//axios的工具类
class HttpRequest {
  // 初始化
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  // 定义axios的配置（初始值）
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      header: {}
    }
    return config
  }
  // 定义拦截器
  interceptors (instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  }
  // 接口请求函数
  request (options) {
    const instance = axios.create()
    // 解构
    options = { ...this.getInsideConfig(), ...options }
    this.interceptors(instance)
    // 传递配置参数，触发mock.js的Mock.mock()函数调用模拟的后端的数据
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)