// 各类Echarts图模块
<template>
  <div ref="echart"></div>
</template>

<script>
// 引入echart库
import * as echart from 'echarts'
export default {
  // props接受父组件嵌入该组件时传来的信息
  props: {
    // 判断是哪种echart图
    // 默认为ture为即折线图和柱状图之类具有x轴数据的类型，false为没有x轴数据的饼状图
    isAxisChart: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      default () {
        return {
          xData: [],
          series: []
        }
      }
    }
  },
  watch: {
    // 数据监听，数据改变则查询初始化渲染图表
    chartData: {
      handler: function () {
        this.initChart()
      },
      deep: true
    }
  },
  methods: {
    // 初始化echarts
    initChart () {
      this.addChartData();
      // 如果已渲染过则直接渲染更新
      if (this.echart) {
        this.echart.setOption(this.options)
      }
      // 如果没渲染过则捕获dom对象进行初始化渲染
      else {
        this.echart = echart.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    // 根据图表的类型为图形类型的配置添加属性
    addChartData () {
      if (this.isAxisChart) {
        // 为折线图和柱状图类型的配置添加由父组件嵌入<echart>组件时传来的data属性和series属性
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
        this.axisOption.title = this.chartData.title;
      } else {
        // 为饼状图类型的配置添加data属性和series属性
        this.normalOption.series = this.chartData.series;
        this.normalOption.title = this.chartData.title;
      }
    }
  },
  data () {
    return {
      // 折线图和柱状图类型的配置
      axisOption: {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
        series: [],
      },
      //饼状图类型的配置
      normalOption: {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [],
      },
      echart: null
    }
  },
  computed: {
    // 根据由<echart>组件传过来的isAxisChart函数值判断选用那种配置
    options () {
      return this.isAxisChart ? this.axisOption : this.normalOption
    }
  }
}
</script>

<style>
</style>