<template>
<!-- 美容美发页面 -->
  <div class="beauty">
    <!-- 头部 -->
    <div class="head">
      <span @click="prev"><img src="../assets/jiantou.jpg" alt /></span>
      <h2>美容美发</h2>
    </div>
    <!-- 内容列表 -->
    <div class="content">
      <ul>
        <li>
          <img src="../assets/shaxuan.jpg" alt />
          <span>沙宣发艺</span>
          <img src="../assets/dainhua.jpg" alt />
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <img src="../assets/chongshang.jpg" alt />
          <span>崇尚美发</span>
          <img src="../assets/dainhua.jpg" alt />
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<script>
// document.documentElement.style.fontSize = document.body.clientWidth * 50 / 375 + 'px'
export default {
  name: "beauty",
  data() {
    return {};
  },
  // 点击返回箭头返回上一个页面
  methods: {
    prev() {
      this.$router.go(-1);
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
.beauty .head {
  display: flex;
  flex-direction: row;
}
.beauty .head span {
  margin: 15px 0 0 8px;
}
.beauty .head h2 {
  padding-left: 120px;
}
/* 内容列表样式 */
.beauty .content img {
  width: 40px;
  height: 40px;
}
.beauty .content ul {
  display: flex;
  flex-direction: row;
}
.beauty .content ul li {
  display: inline-block;
}
.beauty .content ul li span {
  padding: 1px 177px 1px 11px;
  display: inline-block;
}
</style>