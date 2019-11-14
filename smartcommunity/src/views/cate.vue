<template>
<!-- 餐饮美食页面 -->
    <div class="cate">
       <!-- 头部 -->
    <div class="head">
      <span @click="prev"><img src="../assets/jiantou.jpg" alt /></span>
      <h2>餐饮美食</h2>
    </div>
    <!-- 内容列表 -->
    <div class="content">
      <ul>
        <li>
          <img src="../assets/shaxian.jpg" alt />
          <span>福建沙县</span>
          <img src="../assets/dainhua.jpg" alt />
        </li>
      </ul>
      <hr>
      <ul>
        <li>
          <img src="../assets/xiaochi.jpg" alt />
          <span>嵊州小吃</span>
          <img src="../assets/dainhua.jpg" alt />
        </li>
      </ul>
      <hr>
    </div>
  </div>
</template>

<script>
// document.documentElement.style.fontSize = document.body.clientWidth * 50 / 375 + 'px'
    export default{
        name:'cate',
    data () {
    return {

    }
  },
  // 点击返回箭头返回上一个页面
  methods: {
    prev () {
      this.$router.go(-1)
    }
  }
    };
</script>
<style scoped>
/* 头部样式 */
.head span img {
  width: 20px;
  height: 20px;
}
.cate .head {
  display: flex;
  flex-direction: row;
}
.cate .head span {
  margin: 15px 0 0 8px;
}
.cate .head h2 {
  padding-left: 120px;
}
/* 内容列表样式 */
.cate .content img {
  width: 40px;
  height: 40px;
}
.cate .content ul {
  display: flex;
  flex-direction: row;
}
.cate .content ul li {
  display: inline-block;
}
.cate .content ul li span{
    padding: 1px 168px 1px 11px;
    display: inline-block;
}
</style>