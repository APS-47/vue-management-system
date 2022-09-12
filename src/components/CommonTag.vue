// 标签模块
<template>
  <div class="tabs">
    <el-tag v-for="(tag,index) in tags" :key="tag.name" :closable="tag.name !=='home'" @click="changeMenu(tag)" @close="handleClose(tag,index)" :effect="$route.name === tag.name ? 'dark':'plain'" size="small">
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
// 运用vuex处理数据的api
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTag',
  data () {
    return {

    }
  },
  methods: {
    //vuex的辅助函数，注入Mutations中的closeTag,取代this.$store.commit("closeTag")
    ...mapMutations({
      close: 'closeTag'
    }),
    // 点击tag切换页面
    changeMenu (item) {
      this.$router.push({ name: item.name })
    },
    //点击tag删除该tag
    handleClose (tag, index) {
      const length = this.tags.length - 1
      // 调用close函数(Mutations中的closeTag) 
      this.close(tag)
      //如果点击的tag不是当前所在的页面，则直接删除不做判断
      if (tag.name !== this.$route.name) {
        return;
      }
      //点击删除最后一个tag时，该tag消失，跳转至上一个tag所在的页面
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name
        })
      } else {
        // 如果点击删除的tag不是最后一位，则由顺延下来的tag顶替其位置，因为其index也会随之顶替
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  }
}
</script>

<style lang="less" scoped>
.tabs {
  padding: 10px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>