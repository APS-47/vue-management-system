import Vue from 'vue'
import App from './App.vue'
// 引入element-ui的css样式文件
import 'element-ui/lib/theme-chalk/index.css'
// 全局引入
// import ElementUI from 'element-ui';
// 按需引入
import { Button, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup, 
  Dropdown, DropdownItem, DropdownMenu, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem,
  Tag, Form, FormItem, Option, Input, Select, Switch, DatePicker, Dialog, Pagination, Message
} from 'element-ui';
// 引入路由
import router from './router'
//引入jQuery
import 'jquery/dist/jquery.min'
//引入boostrap
import 'bootstrap/dist/css/bootstrap.css'
// 引入vuex的store仓库
import store from './store'
// 引入less文件夹
import './assets/less/index.less'
// 引入axios
import http from 'axios'
// 引入mock
import './api/mock.js'
// 导入element-ui中的Messagebox和Message
import { MessageBox } from 'element-ui'
// 把消息提示框挂载到全局使用
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)
// 因为axios不是插件，所以只能将其绑定在Vue的原型中
Vue.prototype.$http=http

// 路由守卫
router.beforeEach((to,from,next)=>{
  // 防止页面刷新vuex丢失token信息
  store.commit('getToken')
  const token =store.state.user.token
  // 如果token不存在并且当前页面不是登录页
  if(!token&&to.name!=='login'){
    // 返回登录页
    next({name:'login'})
  }else if(token && to.name==='login'){
    next({name:'home'})
  }else{
    // 成功跳转
    next()
  }
})
new Vue({
  store,
  router,
  render: h => h(App),
  created(){
    store.commit('addMenu', router)
  }
}).$mount('#app')
