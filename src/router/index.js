// 该文件专门用于创建整个应用的路由器

import Vue from 'vue'
// 从下载的库中引入VueRouter
import VueRouter from 'vue-router'
//引入组件供路由表记录
import Main from '../views/Main.vue'

//全局引入
Vue.use(VueRouter)

//避免产生一些报错
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

//创建一个路由器
const router = new VueRouter({
  // mode: 'history',
  // 配置路由表
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/home')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/user')
        },
        {
          path: '/iphone',
          name: 'iphone',
          component: () => import('../views/mall/iphone.vue')
        },
        {
          path: '/meizu',
          name: 'meizu',
          component: () => import('../views/mall/meizu.vue')
        },
        {
          path: '/oppo',
          name: 'oppo',
          component: () => import('../views/mall/oppo.vue')
        },
        {
          path: '/samsung',
          name: 'samsung',
          component: () => import('../views/mall/samsung.vue')
        },
        {
          path: '/vivo',
          name: 'vivo',
          component: () => import('../views/mall/vivo.vue')
        },
        {
          path: '/xiaomi',
          name: 'xiaomi',
          component: () => import('../views/mall/xiaomi.vue')
        },
      ]
    },
    {
      path:'/login',
      name:'login',
      component:()=>import("../views/login/login.vue")
    }
  ]
})
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if (isChunkLoadFailed) {
    // 用路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环，而用 location.reload 方法，相当于触发F5刷新页面，虽然用户体验上来说会有刷新加载察觉，但不会导致页面卡死及死循环，从而曲线救国解决该问题
    location.reload();
    // const targetPath = $router.history.pending.fullPath;
    // $router.replace(targetPath);
  }
});
//暴露router实例
export default router

//简便写法
// export default new VueRouter({
//   mode: 'history',
//   // 引入路由配置表
//   routes
// })