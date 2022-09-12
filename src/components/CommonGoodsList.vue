// 手机商品详情
<template>
    <div class="main">
      <div class="phoneBrand">{{phoneName}}</div>
      <div class="row">
        <div class="col-lg-3" v-for="item in phoneList" :key="item.index">
          <div class="phoneGoods">
            <div class="phonePic">
              <img :src="item.picSrc" alt="">
            </div>
            <span class="phoneName">{{item.name}}</span>
            <span class="phoneMessage">{{item.message}}</span>
            <span class="phonePrice">{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'CommonGoodList',
  data () {
    return {
            phoneName:this.$parent.phoneName,
            phoneList:this.$parent.phoneList
    }
  }
}
</script>

<style>
.main {
  width: 1300px;
  height: 600px;
  margin:0px 0px 100px 10px;
}

.phoneBrand {
  text-align: center;
  font-size:40px ;
}
.row {
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  height: 50%;
}

.row > div {
  float: left;
  height: 100%;
  margin-top: 20px;
}

.phoneGoods {
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid #e4e4e4;
    background-color: white;
}
.phoneGoods:hover {
  /* border: 2px solid skyblue; */
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.2);
  /* 盒子向上移动效果，改变上外边距 */
  margin-top: -3px;
}
.phonePic {
  width: 80%;
  height: 65%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
}
img {
  width: 100%;
  height: 100%;
}
.phoneGoods > span {
  display: inline-block;
}
.phoneName {
  font-size: 18px;
  font-weight: bold;
}
.phoneMessage {
  width: 90%;
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.phonePrice {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: #dd001b;
}
</style>