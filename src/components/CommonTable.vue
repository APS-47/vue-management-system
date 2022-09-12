// 用户数据模块
<template>
  <div class="common-table">
    <el-table :data="tableData" height="90%" stripe pagesize="5">
        <el-table-column align="center" show-overflow-tooltip v-for="item in tableLabel" :key="item.prop" :label="item.label"
         :width="item.width?item.width:125">
            <template slot-scope="scope">
                <span style="margin-left:10px">{{scope.row[item.prop]}}</span>
            </template> 
        </el-table-column>
        <el-table-column align="center" label="操作" min-width="180">
            <template slot-scope="scope">            
                <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template> 
        </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination class="pager" background layout="prev,pager,next" :total="config.total" :current-page.sync="config.page" 
    @current-change="changePage" :page-size= "20"> 
    </el-pagination>
  </div>
</template>

<script>
export default {
    name:'CommonTable',
    // 接收父组件出来的数据用于渲染数据表格
    props:{
        tableData:Array,
        tableLabel:Array,
        config:Object
    },
    data(){
        return{}
    },
    methods:{
        handleEdit(row){
            this.$emit('edit',row)
        },
        handleDelete(row){
            this.$emit('del',row)
        },
        changePage(){
            this.$emit('changePage')
        }
    }
}
</script>

<style lang="less" scoped>
.common-table{
    height: calc(100% - 40px);
    margin-left: 10px;
    background-color: #fff;
    position: relative;
    .pager{
        position: absolute;
        right: 550px;
    }
}
.cell{
  text-align: center!important;;
}
.el-button--mini:first{
  margin-left: 130px;
}
</style>