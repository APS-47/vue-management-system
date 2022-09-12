// 三星手机商品详情
<template>
  <common-good-list></common-good-list>
</template>

<script>
import CommonGoodList from '../../components/CommonGoodsList.vue'
export default {
  name: "samsung",
  components: {
    CommonGoodList
  },
  data () {
    return {
      phoneName: "三星手机",
      phoneList: [
        {
          picSrc: require('../../assets/images/samsung/1.png'),
          name: "Galaxy S22",
          message: "全新一代骁龙8 移动平台",
          price: "4199元起"
        },
        {
          picSrc:require('../../assets/images/samsung/2.png'),
          name: 'Galaxy S22+',
          message: '超凡卓越影像系统',
          price: '5999元起'
        },
        {
          picSrc: require('../../assets/images/samsung/3.png'),
          name: 'Galaxy S22 Ultra',
          message: '超凡卓越影像系统 ',
          price: '9699元起'
        },
        {
          picSrc: require('../../assets/images/samsung/4.png'),
          name: 'Galaxy S22 Ultra三星网上商城专属颜色',
          message: '大屏S Pen书写 超亮顺滑',
          price: '9699元起'
        },
        {
          picSrc: require('../../assets/images/samsung/5.png'),
          name: 'Galaxy S21 FE 5G',
          message: '精工设计  坚固耐用 专属颜色 ',
          price: '9699元起'
        },
        {
          picSrc:require('../../assets/images/samsung/6.png'),
          name: 'Galaxy Note20 5G',
          message: '惊艳设计 强大性能',
          price: '5499元起'
        },
        {
          picSrc: require('../../assets/images/samsung/7.png'),
          name: 'Galaxy Note20 Ultra 5G',
          message: '用智能手机以超高分辨率捕捉你的视界',
          price: '5699元起'
        },
        {
          picSrc:require('../../assets/images/samsung/8.png'),
          name: '三星 W22 5G',
          message: '开合万象 执掌全局',
          price: '15199元起'
        }
      ]
    }
  }

}
</script>