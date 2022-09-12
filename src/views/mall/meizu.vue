// 魅族手机商品详情
<template>
  <common-good-list></common-good-list>
</template>

<script>
import CommonGoodList from '../../components/CommonGoodsList.vue'
export default {
  name: "meizu",
  components: {
    CommonGoodList
  },
  data () {
    return {
      phoneName: "魅族手机",
      phoneList: [
        {
          picSrc: require('../../assets/images/meizu/1.png'),
          name: "魅族 18X",
          message: "高通骁龙 870 + UFS 3.1 强劲性能 | 10bit 120Hz OLED 屏幕 | Flyme 9.2 | 屏下光学指纹解锁",
          price: "1829元起"
        },
        {
          picSrc:require('../../assets/images/meizu/2.png'),
          name: '魅族 18s',
          message: '高通骁龙 888+  | 162g 轻妙手感 | 6.2 英寸 2K+120Hz 满血小屏 | 0.1s 超声波指纹解锁 | Flyme 9.2',
          price: '2729元起'
        },
        {
          picSrc: require('../../assets/images/meizu/3.png'),
          name: '魅族 18s Pro',
          message: '高通骁龙 888+ | AR 全场景大师影像系统 | 2K+120Hz 四曲微弧屏 | 0.1s 超声波指纹解锁 | 有线/无线双 40W 超充',
          price: '3569元起'
        },
        {
          picSrc: require('../../assets/images/meizu/4.png'),
          name: '魅族 18 Pro',
          message: '高通骁龙 888+ | AR 全场景大师影像系统 | 2K+120Hz 四曲微弧屏 | 0.1s 超声波指纹解锁 | 有线/无线双 40W 超充',
          price: '3299元起'
        },
        {
          picSrc: require('../../assets/images/meizu/5.png'),
          name: '魅族 18',
          message: '骁龙 888 | Flyme 9 隐私安全系统 全面隐私防护 真正安全体验 | 162g 6.2英寸轻妙手感 | 2K+ 120 帧微弧柔性屏 | 超声波屏下指纹解锁  | 4000mAh 超大电池 | 6400万超级防抖全场景影像系统',
          price: '3999元起'
        },
        {
          picSrc:require('../../assets/images/meizu/6.png'),
          name: '魅族 17',
          message: '高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 120 Hz尝鲜模式魅族 18X  高通骁龙 870 | 10bit 120Hz OLED 屏幕 （点击了解更多）',
          price: '3699元起'
        },
        {
          picSrc: require('../../assets/images/meizu/7.png'),
          name: '魅族 17 Pro',
          message: '高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 煅烧陶瓷机身 | 120 Hz 尝鲜模式',
          price: '4299元起'
        },
        {
          picSrc:require('../../assets/images/meizu/8.png'),
          name: '魅蓝 10',
          message: '【+69元 一年碎屏险 保障安全】Flyme 9 lite 安全流畅系统 | 5000mAh 超大电池 | 6.52 英寸娱乐大屏 | 4800 万全场景拍摄 | 强劲中国芯 双卡双待 | 人脸解锁 快人一步',
          price: '699元起'
        }
      ]
    }
  }

}
</script>