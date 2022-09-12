// 小米手机商品详情
<template>
  <common-good-list></common-good-list>
</template>

<script>
import CommonGoodList from '../../components/CommonGoodsList.vue'
export default {
  name: "xiaomi",
  components: {
    CommonGoodList
  },
  data () {
    return {
      phoneName: "小米手机",
      phoneList: [
        {
          picSrc: require('../../assets/images/xiaomi/1.png'),
          name: "Xiaomi MIX Fold 2",
          message: "超轻薄折叠机身设计，小米自研微水滴形态转轴",
          price: "8999元起"
        },
        {
          picSrc:require('../../assets/images/xiaomi/2.png'),
          name: 'Redmi K50 至尊版',
          message: '骁龙8+ ｜1.5K 高清直屏',
          price: '2999元起'
        },
        {
          picSrc: require('../../assets/images/xiaomi/3.png'),
          name: 'Xiaomi 12S Ultra',
          message: '这真徕卡｜专业徕卡影像',
          price: '5999元起'
        },
        {
          picSrc: require('../../assets/images/xiaomi/4.png'),
          name: 'Xiaomi 12S Pro',
          message: '骁龙8+ 旗舰处理器 | 徕卡影像',
          price: '4699元起'
        },
        {
          picSrc: require('../../assets/images/xiaomi/5.png'),
          name: 'Xiaomi MIX Fold 2',
          message: '超轻薄折叠机身设计，小米自研微水滴形态转轴',
          price: '3999元起'
        },
        {
          picSrc:require('../../assets/images/xiaomi/6.png'),
          name: 'Xiaomi MIX Fold 2',
          message: '超轻薄折叠机身设计，小米自研微水滴形态转轴',
          price: '3999元起'
        },
        {
          picSrc: require('../../assets/images/xiaomi/7.png'),
          name: 'Xiaomi MIX Fold 2',
          message: '超轻薄折叠机身设计，小米自研微水滴形态转轴',
          price: '1999元起'
        },
        {
          picSrc:require('../../assets/images/xiaomi/8.png'),
          name: 'Xiaomi MIX Fold 2',
          message: '超轻薄折叠机身设计，小米自研微水滴形态转轴',
          price: '1599元起'
        }
      ]
    }
  }

}
</script>
