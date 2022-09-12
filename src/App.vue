<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  mounted() {
    // console.log(123);
    // this.$router.push('/login')
    // console.log(456);
  }
};
</script>

<style>
/* 将侧边的白色间隔去除 */
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
element.style {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
</style>
