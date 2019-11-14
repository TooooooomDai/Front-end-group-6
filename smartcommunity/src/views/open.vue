<template>
  <div class="open">
    <TabBar></TabBar>
    <div class="head">
      <!-- 头部返回键 -->
      <i @click="prev">
        <img src="../assets/jiantou.jpg" alt />
      </i>
      <h2>芝麻开门</h2>
      <!-- 跳转开门记录 -->
      <span @click="record">开门记录</span>
    </div>
    <!-- 门的图片样式 -->
    <div class="door">
      <img src="../assets/men.jpg" alt />
    </div>
    <div>
      <!-- 进出门方式 -->
      <select>  
        <option value="APP-进">APP-进</option>
        <option value="APP-出">APP-出</option>
        <option value="指纹-进">指纹-进</option>
        <option value="指纹-出">指纹-出</option>
        <option value="人脸-进">人脸-进</option>
        <option value="人脸-出">人脸-出</option>
        <option value="刷卡-进">刷卡-进</option>
        <option value="刷卡-出">刷卡-出</option>
      </select>
      <!-- 住户房间信息--默认一个入口 -->
      <select>
        <option value="1期1幢1单元入口">1期1幢1单元入口</option>
      </select>
    </div>
    <!-- 圆球 -->
    <div class="ball">
      <span>开门</span>
    </div>
  </div>
</template>
<script>
import TabBar from '../components/dyc/TabBar'
export default {
  // data: {
  //   selected: "APP-进",
  //   options: [
  //     { text: "one", value: "APP-进" },
  //     { text: "two", value: "APP-出" },
  //     { text: "three", value: "指纹-进" },
  //     { text: "four", value: "指纹-出" },
  //     { text: "five", value: "人脸-进" },
  //     { text: "six", value: "人脸-出" },
  //     { text: "seven", value: "刷卡-进" },
  //     { text: "eight", value: "APP-进" }
  //   ]
  // },
  data() {
    return {};
  },
  methods: {
    //方法
    prev() {
      //跳转返回上一个页面
      this.$router.go(-1);
    },
    record() {
      //跳转到开门记录的页面
      this.$router.push({ path: "/record" });
    },
  },
  //打印当前时间
  created: function() {
    var aData = new Date();
    console.log(aData); //Tue Nov 12 2019 21:59:48 GMT+0800 (中国标准时间)
    this.value =
      aData.getFullYear() +
      "/" +
      (aData.getMonth() + 1) +
      "/" +
      aData.getDate() +
      "　" +
      aData.getHours() +
      ":" +
      aData.getMinutes() +
      ":" +
      aData.getSeconds();
    console.log(this.value); //2019/11/12　21:59:48
  },
  components:{
    TabBar
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 头部样式 */
.head {
  display: flex;
  flex-direction: row;
}
.head i {
  padding: 15px;
}
.head h2 {
  text-align: center;
  padding-left: 75px;
}
.head i img {
  width: 20px;
  height: 20px;
}
.head span {
  padding-left: 80px;
  padding-top: 10px;
}
/* 门的大小尺寸 */
.door img {
  width: 390px;
  height: 280px;
}
/* 圆球的样式 */
.ball {
  width: 100px;
  height: 100px;
  background-color: gray;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  margin: 18px auto;
}
.ball span {
  position: fixed;
  left: 182px;
  top: 420px;
}
</style>