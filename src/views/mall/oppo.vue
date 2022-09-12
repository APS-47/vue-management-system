// oppo手机商品详情
<template>
  <common-good-list></common-good-list>
</template>

<script>
import CommonGoodList from '../../components/CommonGoodsList.vue'
export default {
  name: "oppo",
  components: {
    CommonGoodList
  },
  data () {
    return {
      phoneName: "oppo手机",
      phoneList: [
        {
          picSrc: require('../../assets/images/oppo/1.png'),
          name: "K10 活力版",
          message: "活力游戏芯，续航小怪兽",
          price: "2199元起"
        },
        {
          picSrc:require('../../assets/images/oppo/2.png'),
          name: 'K10 Pro',
          message: '超次元全速旗舰，超神控场',
          price: '2489元起'
        },
        {
          picSrc: require('../../assets/images/oppo/3.png'),
          name: 'A97',
          message: '12GB+256GB 超大双存，5000mAh 超大电池',
          price: '1999元起'
        },
        {
          picSrc: require('../../assets/images/oppo/4.png'),
          name: 'A55S',
          message: '双卡双待双模 5G，128GB 大内存',
          price: '1199元起'
        },
        {
          picSrc: require('../../assets/images/oppo/5.png'),
          name: 'Reno8 Pro+',
          message: '超轻薄折叠机身设计，小米自研微水滴形态转轴',
          price: '3999元起'
        },
        {
          picSrc:require('../../assets/images/oppo/6.png'),
          name: 'Reno8 Pro',
          message: '首款自研影像芯片，第一代骁龙®7 移动平台',
          price: '3499元起'
        },
        {
          picSrc: require('../../assets/images/oppo/7.png'),
          name: 'Find X5 Pro',
          message: '自研影像芯片，4K 超清夜景视频',
          price: '5499元起'
        },
        {
          picSrc:require('../../assets/images/oppo/8.png'),
          name: 'Find X5',
          message: '自研影像芯片，哈苏专业模式',
          price: '3189元起'
        }
      ]
    }
  }

}
</script>
<style>
img{
  width: 60%;
  height:90%;
  margin-top:10px;
}  
</style>