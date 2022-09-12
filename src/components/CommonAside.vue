// 侧边栏模块
<template>
  <!-- 给菜单栏添加样式和点击事件实现路由跳转 -->
  <!-- 获取collapse属性决定菜单栏是否合并 -->
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo"   
  background-color="#545c64"   text-color="#fff" active-text-color="#ffd04b"
  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <!-- 通过判断isCollapse的值变化左侧菜单栏的标题 -->
    <h3 style="font-size:16px;font-weight:bold;">{{isCollapse ? "后台":"手机之家后台管理系统"}}</h3>
    <!-- v-for循环遍历生成没有子目录的一级菜单 -->
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path+''"  :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- v-for循环遍历生成有子目录的一级菜单 -->
    <el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <!-- 在有子目录的一级菜单下使用v-for循环遍历生成二级菜单 -->
      <!-- v-for传入两个参数，分别是每次遍历的出来的内容和其索引号 -->
      <el-menu-item-group v-for="(subItem, subIndex) in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex+''">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100%;
  border: none;
  background-color: #545c64;
  h3{
    color: #fff;
    text-align:center;
    line-height:48px;
  }
}
</style>

<script>
export default {
  name:'CommonAside',
  data () {
    return {
      //侧边栏目录数据
      menus: [],
    };
  },
  //element ui自带配置
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    // 编程式路由导航，通过点击事件获取菜单的名字与路由表的名字匹配实现路由跳转
    clickMenu(item){
      this.$router.push({
        name:item.name
      })
      // 向vueX传递点击的对象
      this.$store.commit('selectMenu',item)
    }
  },
  computed: {
    //过滤数据中含有子项目（多层目录）的对象和没有子项目的对象
    noChildren () {
      //返回数据中没有子项目的对象
      return this.asyncMenu.filter((item) => !item.children);
    },
    hasChildren () {
      //返回数据中没有子项目的对象
      return this.asyncMenu.filter((item) => item.children);
    },
    // 获取vuex仓库中经处理过的isCollapse值
    isCollapse(){
      return this.$store.state.tab.isCollapse
    },
    asyncMenu(){
      return this.$store.state.tab.menu
    }
  },
};
</script>