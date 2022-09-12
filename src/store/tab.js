// 该文件用来操作tab栏数据源的实时增加,删除和点击跳转查看功能
import Cookie from "js-cookie";
export default {
  state: {
    username:'',
    //存储菜单栏是否合并
    isCollapse: false,
    //存储面包屑数据
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    currentMenu: null,
    menu:[]
  },
  mutations: {
    // 处理是否合并菜单栏的状态
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse;
    },
    // 点击菜单栏新增tabsList源数据用于创建标签
    selectMenu (state, val) {
      //点击页面不是首页
      if (val.name !== 'home') {
        state.currentMenu = val;
        //记录查询的页面是否为首页
        const result = state.tabsList.findIndex(item => item.name === val.name)
        //该点击的页面不在集合中，则新添加至集合中
        if (result === -1) {
          state.tabsList.push(val)
        }
      }else {  
        //标识重置
        state.currentMenu = null;
      }
    },
    //删除tabsList源数据
    closeTag(state,val){
      const result=state.tabsList.findIndex(item=>item.name===val.name)
      state.tabsList.splice(result,1)
    },
    setMenu(state,val){
      state.menu=val
      Cookie.set('menu',JSON.stringify(val))
    },
    clearMenu(state){
      state.menu=[]
      Cookie.remove('menu')
    },
    addMenu(state,router){
      if(Cookie.get('menu')){
        return
      }
      const menu=JSON.parse(Cookie.get('menu'))
      state.menu=menu
      const menuArray=[]
      menu.forEach(item => {
        if (item.children){
          item.children=item.children.map(item=>{
            item.component=()=>import(`../views/${item.url}`)
            return item
          })
          menuArray.push(...item.children)
        }else{
          item.component = () => import(`../views/${item.url}`)
          menuArray.push(item)
        }
      });
      //路由的动态添加
      menuArray.forEach(item=>{
        router.addRoute('Main',item)
      })
    },

    checkLogin (state, val) {
      state.username = val;
    }
  }
}