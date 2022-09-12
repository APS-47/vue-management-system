// 用户管理页模块
<template>
  <div class="manage">
    <!-- 弹出信息填写表单 -->
    <div v-if="isShow">
      <el-dialog :title="operateType==='add'?'新增用户':'更新用户'" :visible.sync="isShow">
        <!-- 给 commonform组件传参，对面以prop接收-->
        <common-form :formLabel="operateFormLabel" :form="operateForm" :inline="true" ref="form"></common-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isShow=false">取消</el-button>
          <el-button type="primary" @click="confirm">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="manage-header">
      <el-button style="margin-left:10px" type="primary" @click="addUser">+ 新增</el-button>
      <common-form :formLabel="formLabel" :form="searchForm" :inline="true" ref="form">
        <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
      </common-form>
    </div>
    <!-- edit和del均为由子组件中触发的事件，并携带参数，实现子组件向父组件通信 -->
    <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList()" @edit="editUser" @del="delUser"></common-table>
  </div>
</template>

<script>
import CommonForm from '../../components/CommonForm.vue'
import CommonTable from '../../components/CommonTable.vue'
import { getUser } from '../../api/data'
export default {
  name:"User",
  data(){
    return{
      operateType:'add',
      isShow:false,
      operateFormLabel:[
        {
          model: 'name',
          label: '姓名',
          type: 'input'
        },
       {
          model: 'age',
          label: '年龄',
          type: 'input'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
              {
                  label: '男',
                  value: 1
              },
              {
                  label: '女',
                  value: 0
              }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
            model: 'addr',
            label: '地址',
            type: 'input'
        }
      ],
      operateForm:{
        name:'',
        addr:'',
        age:'',
        birth:'',
        sex:''
      },
      formLabel:[
        {
          model:"keyword",
          label:"",
          type:"input"
        }
      ],
      searchForm:{
        keyword:""
      },
      tableData:[],
      tableLabel:[
        {
          prop:"name",
          label:"姓名"
        },
        {
          prop:"age",
          label:"年龄"
        },
        {
          prop:"sexLabel",
          label:"性别"
        },
        {
          prop:"birth",
          label:"出生日期",
          width:200
        },
        {
          prop:"addr",
          label:"地址",
          width:320
        }
      ],
      config:{
        page:1,
        total:30,
      }
    }
  },
  methods:{
    confirm(){
      //如果状态是编辑
      if(this.operateType==='edit'){
        // 向mock模拟数据发送请求
        this.$http.post('/user/edit',this.operateForm).then(res=>{
          this.isShow=false
          // 编辑修改列表之后重新发起请求刷新页面
          this.getList()
        })
      }else{
        //如果状态是新增
        this.$http.post('/user/add',this.operateForm).then(res=>{
          this.isShow=false
          // 新增列表之后重新发起请求刷新页面
          this.getList()
        })
      }
    },
    addUser(){
      this.isShow=true
      this.operateType='add'
      this.operateForm={
        name:'',
        addr:'',
        age:'',
        birth:'',
        sex:''
      }
    },
    editUser(row){
      this.operateType='edit',
      this.isShow=true,
      // 编辑时加载该行的数据
      this.operateForm=row
    },
    delUser(row){
      this.$confirm("此操作将永久删除该行数据，是否继续？","提示",{
        confirmButtonText:"确认",
        cancelButtonText:"取消",
        type:"warning"
      }).then(()=>{
        const id=row.id;
        this.$http.get("/user/del",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:'success',
            message:"删除成功！"
          })
          this.getList()
        })
      })
    },
    getList(name=''){
      this.config.loading=true,
      name ? (this.config.page=1):''
      // this.config.page=name?1:this.config.page
      getUser({
        page:this.config.page,
        name:name
      }).then(({data:res})=>{
        this.tableData=res.list.map(item=>{
          item.sexLabel=item.sex===0?"女":"男"
          return item
        })
        this.config.total=res.count
        this.config.loading=false
      })
    }
  },
  components:{
    CommonForm,
    CommonTable
  },
  created(){
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.manage-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>