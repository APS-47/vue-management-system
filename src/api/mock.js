// 对ajax请求进行拦截
import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import permissionApi from './mockServeData/permission'

// Mock.mock函数  Mock.mock(ruel?rtype?,template|function(options))
Mock.mock('/home/getData', homeApi.getStatisticalData)
// 正则方式进行拦截
// 新增功能拦截接口请求
Mock.mock(/user\/add/, 'post',userApi.createUser)
// 编辑功能拦截接口请求
Mock.mock(/user\/edit/, 'post', userApi.updateUser)
// 获取列表功能拦截接口请求
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
// 删除数据列功能拦截接口请求
Mock.mock(/user\/del/, 'get', userApi.deleteUser)
// 用户权限验证功能拦截接口请求
Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)
