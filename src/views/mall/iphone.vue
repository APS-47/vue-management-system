// 苹果手机商品详情
<template>
  <common-good-list></common-good-list>
</template>

<script>
import CommonGoodList from '../../components/CommonGoodsList.vue'
export default {
  name: "iphone",
  components: {
    CommonGoodList
  },
  data () {
    return {
      phoneName: "苹果手机",
      phoneList: [
        {
          picSrc: require('../../assets/images/iphone/1.png'),
          name: "iPhone 13 Pro",
          message: "RMB 333/月 (0% 费率 24 个月分期) ",
          price: "7999元起"
        },
        {
          picSrc:require('../../assets/images/iphone/2.png'),
          name: 'iPhone 13',
          message: 'RMB 217/月 (0% 费率 24 个月分期) ',
          price: '5199元起'
        },
        {
          picSrc: require('../../assets/images/iphone/3.png'),
          name: 'iPhone SE',
          message: 'RMB 146/月 (0% 费率 24 个月分期) ',
          price: '3499元起'
        },
        {
          picSrc: require('../../assets/images/iphone/4.png'),
          name: '苹果iPhone SE2',
          message: 'iPhone SE 2020相当于Phone8升级版，采用4.7英寸屏幕，搭载苹果A13处理器，同时辅以3GB内存，好评的Touch ID也得以保留。',
          price: '3299元起'
        },
        {
          picSrc: require('../../assets/images/iphone/5.png'),
          name: 'iPhone 12',
          message: 'RMB 187/月 (0% 费率 24 个月分期) ',
          price: '4499元起'
        },
        {
          picSrc:require('../../assets/images/iphone/6.png'),
          name: '苹果iPhone12 Pro',
          message: 'iPhone12 Pro搭载了A14仿生处理器，6.1英寸OLED显示屏，以及1200万像素的超广角镜头、广角镜头和长焦镜头，并支持最高4倍光学变焦，以及最高10倍数码变焦。 ',
          price: '8499元起'
        },
        {
          picSrc: require('../../assets/images/iphone/7.png'),
          name: '苹果iPhone12 mini',
          message: 'iPhone 12 mini屏幕尺寸5.4英寸。采用Super Retina XDR OLED显示屏，采用A14 Bionic芯片和全新的外观设计，轻便的机身蕴含着强大的性能，同时更先进的双摄系统提升了拍摄的质量。',
          price: '4499元起'
        },
        {
          picSrc:require('../../assets/images/iphone/8.png'),
          name: 'iPhone 11',
          message: 'RMB 167/月 (0% 费率 24 个月分期) ',
          price: '3999元起'
        }
      ]
    }
  }

}
</script>
<style>
  img{
    width: 100%;
  }
</style>