// 头部区域模块
<template>
  <header>
    <div class="left-content">
      <!-- 绑定点击事件，控制是否合并菜单栏 -->
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <!-- 触发下拉框的方式是点击 -->
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img class="user" :src="userImg">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: 'CommonHeader',
  data () {
    return {
    }
  },
  methods: {
    handleMenu () {
      // 向Vuex提交collapseMenu函数，通知mutations处理collapseMenu函数
      // collapseMenu函数处理后的值被CommonAside组件获取
      // 由CommonHeader的点击事件触发vuex处理值并为CommonAside所使用，实现兄弟组件之间的通信
      this.$store.commit("collapseMenu")
    },
    logOut(){
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$router.push("/login")
    },

  },
  computed: {
    // 遍历tabsList数组
    ...mapState({
      tags: state => state.tab.tabsList,
    }),
    userImg(){
      if(this.$store.state.tab.username=='admin'){
        return require('../assets/images/admin.png')
      }
      else{
        return require('../assets/images/user.png')
      }
    }
  },
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.left-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.right-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
  color: white !important;
}
.el-button{
  margin-left:-10px;
}
</style>