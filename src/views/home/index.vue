// 主页模块
<template>
  <el-row class="home"
          :gutter="20"
          style="margin-left: 0px; margin-right: 0px;">
    <el-col :span="8"
            style="margin-top:20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">{{ userName }}</p>
            <p class="access">{{ userIdentity }}</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>{{ getloginTime }}</span></p>
          <p>上次登录地点：<span>广东·广州</span></p>
        </div>
      </el-card>
      <el-card style="margin-top:20px;height:460px;">
        <!-- 通过element ui的格式对tableData的数据进行渲染 -->
        <el-table :data="tableData">
          <!-- 渲染表头 -->
          <el-table-column v-for="(val,index) in tabelLabel"
                           :key="index"
                           :prop="index"
                           :label="val">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col style="margin-top:20px;"
            :span="16">
      <div class="num">
        <el-card v-for="item in countData"
                 :key="item.name"
                 :body-style="{display:'flex',padding:0}">
          <i class="icon"
             :class="`el-icon-${item.icon}`"
             :style="{background:item.color}"></i>
          <div class="detail">
            <p class="num">{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height:280px;">
        <!-- 通过属性判断该组件应渲染为折线图 -->
        <echart :chartData="echartData.lineChartData"
                style="margin-left:-100px;width:1000px;height:280px;" />
      </el-card>
      <div class="graph">
        <el-card style="height:260px;">
          <!-- 通过属性判断该组件应渲染为柱状图 -->
          <echart :chartData="echartData.colmunChartData"
                  style="height:240px;" />
        </el-card>
        <el-card style="height:260px;">
          <!-- 通过属性判断该组件应渲染为饼状图 -->
          <echart :chartData="echartData.pieChartData"
                  :isAxisChart="false"
                  style="height:240px;" />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// 引入接口请求
import { getData } from '../../api/data.js'
// 引入封装好的echart组件
import Echart from '../../components/Echarts'

export default {
  name: "home",
  components: { Echart },
  data () {
    return {
      ischeck: true,
      // 表单数据
      tableData: [],
      // 表头
      tabelLabel: {
        name: "手机型号",
        todayBuy: "今日购买",
        monthBuy: "本周购买",
        totalBuy: "购买总数"
      },
      // 右侧订单模块数据
      countData: [
        {
          name: "今日未支付订单",
          value: 12,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "今日支付订单",
          value: 84,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 21,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 124,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
      ],
      // echart的data数据
      echartData: {
        // 折线图
        lineChartData: {
          xData: [],
          series: [],
          title: {}
        },
        // 柱状图
        colmunChartData: {
          xData: [],
          series: []
        },
        // 饼状图
        pieChartData: {
          series: [],
          title: {}
        }
      },
    }
  },
  methods: {},
  computed: {
    // 计算登录时间
    getloginTime () {
      let year = new Date().getFullYear();
      let month = (new Date().getMonth() + 1).toString().padStart(2, '0');
      let day = new Date().getDate().toString().padStart(2, '0');
      return year + '-' + month + '-' + day
    },
    // 根据登录者身份切换头像图片
    userImg () {
      if (this.$store.state.tab.username == 'admin') {
        return require('../../assets/images/admin.png')
      }
      else {
        return require('../../assets/images/user.png')
      }
    },
    // 根据登录者身份切换身份显示
    userIdentity () {
      if (this.$store.state.tab.username == 'admin') {
        return '管理员'
      }
      else {
        return '用户'
      }
    },
    // 根据登录者身份切换用户名称
    userName () {
      if (this.$store.state.tab.username == 'admin') {
        return '潘烁'
      }
      else {
        return '阿烁'
      }
    }
  },
  mounted () {
    if (this.ischeck) {
      this.ischeck = false
    }
    // 发送接口请求
    getData().then(res => {
      const { code, data } = res.data;
      if (code === 20000) {
        this.lineChartData = data.lineChartData;
        // 表格
        this.tableData = data.tableData;
        // 折线图
        const lineChart = data.lineChartData;
        // 获取x轴的值
        const xData = lineChart.date;
        // 获取一个对象的所有key值
        const keyArray = Object.keys(lineChart.data[0]);
        const series = []
        // 根据该键提取其在该对象数组中所有对应的值生成一个新的对象
        keyArray.forEach(key => {
          series.push({
            name: key,
            // 提取所有对象中含有"苹果"，"vivo"等键的值得[345,369,969,586,696]等
            data: lineChart.data.map(item => item[key]),
            type: 'line'
          })
        })
        // 为data中添加echart的数据
        this.echartData.lineChartData.xData = xData
        this.echartData.lineChartData.series = series
        this.echartData.lineChartData.title = { text: "本周销量", left: 155 }
        // 柱状图
        this.echartData.colmunChartData.xData = data.colmunChartData.map(item => item.date)
        this.echartData.colmunChartData.series = [
          {
            name: '新增用户',
            data: data.colmunChartData.map(item => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: data.colmunChartData.map(item => item.active),
            type: 'bar'
          }
        ]
        // 饼状图
        this.echartData.pieChartData.title = {
          text: "本月销量占比",
          top: -3,
          left: 0,
          textStyle: { fontSize: 15 }
        },
          this.echartData.pieChartData.series = [{
            data: data.pieChartData,
            type: 'pie'
          }]
      }
    })
  }
}
</script>

<style>
</style>