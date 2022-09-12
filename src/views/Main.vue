<template>
  <el-container style="height: 100vh">
    <el-aside width="auto">
      <!-- 侧边栏模块嵌入 -->
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <common-tag/>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside'
import CommonHeader from '../components/CommonHeader'
import CommonTag from '../components/CommonTag'
export default {
  name: "Main",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
  data () {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #7b7b7b;
}
.el-main {
  padding: 0;
}
</style>