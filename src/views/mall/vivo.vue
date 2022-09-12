// vivo手机商品详情
<template>
  <common-good-list></common-good-list>
</template>

<script>
import CommonGoodList from '../../components/CommonGoodsList.vue'
export default {
  name: "vivo",
  components: {
    CommonGoodList
  },
  data () {
    return {
      phoneName: "vivo手机",
      phoneList: [
        {
          picSrc: require('../../assets/images/xiaomi/1.png'),
          name: "vivo S15",
          message: "高通骁龙870",
          price: "3299元起"
        },
        {
          picSrc:require('../../assets/images/xiaomi/2.png'),
          name: 'iQOO Z5x',
          message: '天玑900高性能芯',
          price: '1499元起'
        },
        {
          picSrc: require('../../assets/images/xiaomi/3.png'),
          name: 'vivo X80 Pro',
          message: '蔡司T*光学镜头',
          price: '5999元起'
        },
        {
          picSrc: require('../../assets/images/xiaomi/4.png'),
          name: 'vivo Y77',
          message: '80W双芯闪充',
          price: '1799元起'
        },
        {
          picSrc: require('../../assets/images/xiaomi/5.png'),
          name: 'iQOO Neo5S',
          message: '独显芯片 Pro',
          price: '2999元起'
        },
        {
          picSrc:require('../../assets/images/xiaomi/6.png'),
          name: 'vivo X Fold',
          message: '航天级浮翼式铰链',
          price: '8999元起'
        },
        {
          picSrc: require('../../assets/images/xiaomi/7.png'),
          name: 'iQOO Neo6',
          message: '叠瀑稀土散热',
          price: '3299元起'
        },
        {
          picSrc:require('../../assets/images/xiaomi/8.png'),
          name: 'iQOO U5x',
          message: '高通骁龙680',
          price: '1099元起'
        }
      ]
    }
  }

}
</script>