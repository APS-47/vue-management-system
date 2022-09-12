// mock数据模拟(主页图表数据)
import Mock from 'mockjs'

// 图表数据
let List = []
let SaleSum=[]
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0)
        })
      )
      SaleSum.push(parseInt(Math.floor(Math.random() * 10) * 100000 * 0.232246 + 100000))
    }
    let today = new Date().getTime();
    let oneday = 1000 * 60 * 60 * 24
    let dayArray = []
    for (var i = 6; i >= 0; i--) {
      let day = new Date(today - oneday * i)
      dayArray.push(day.getFullYear() + "-" + (day.getMonth()+1).toString().padStart(2, '0') + "-" + day.getDate().toString().padStart(2, '0'))
    }
    let monthSum = []
    let keyArray = Object.keys(List[0])
    keyArray.forEach(key => {
      var sum = 0;
      List.map(item => sum += item[key])
      monthSum.push(sum)
    })
    return {
      code: 20000,
      data: {
        // 饼图
        pieChartData: [
          {
            name: '苹果',
            value: SaleSum[0]
          },
          {
            name: 'vivo',
            value: SaleSum[1]
          },
          {
            name: 'oppo',
            value: SaleSum[2]
          },
          {
            name: '魅族',
            value: SaleSum[3]
          },
          {
            name: '三星',
            value: SaleSum[4]
          },
          {
            name: '小米',
            value: SaleSum[5]
          },
        ],
        // 柱状图
        colmunChartData: [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 60,
            active: 800
          },
          {
            date: '周五',
            new: 65,
            active: 550
          },
          {
            date: '周六',
            new: 53,
            active: 770
          },
          {
            date: '周日',
            new: 33,
            active: 170
          }
        ],
        // 折线图
        lineChartData: {
          date: dayArray,
          data: List
        },
        tableData: [
          {
            name: '苹果',
            todayBuy: List[6].苹果,
            monthBuy: monthSum[0],
            totalBuy: SaleSum[0]
          },
          {
            name: 'vivo',
            todayBuy: List[6].vivo,
            monthBuy: monthSum[1],
            totalBuy: SaleSum[1]
          },
          {
            name: 'oppo',
            todayBuy: List[6].oppo,
            monthBuy: monthSum[2],
            totalBuy: SaleSum[2]
          },
          {
            name: '魅族',
            todayBuy: List[6].魅族,
            monthBuy: monthSum[3],
            totalBuy: SaleSum[3]
          },
          {
            name: '三星',
            todayBuy: List[6].三星,
            monthBuy: monthSum[4],
            totalBuy: SaleSum[4]
          },
          {
            name: '小米',
            todayBuy: List[6].小米,
            monthBuy: monthSum[5],
            totalBuy: SaleSum[5]
          }
        ]
      }
    }
  }
}
