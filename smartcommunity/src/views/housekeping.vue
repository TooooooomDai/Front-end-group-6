<template>
<!-- 家政服务页面 -->
  <div class="house">
    <!-- 头部 -->
    <div class="head">
      <span @click="prev"><img src="../assets/jiantou.jpg" alt /></span>
      <h2>家政服务</h2>
    </div>
     <!-- 内容列表 -->
    <div class="content">
      <ul>
        <li>
          <img src="../assets/baomu.jpg" alt />
          <span>金 保姆</span>
          <img src="../assets/dainhua.jpg" alt />
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <img src="../assets/zhixin.jpg" alt />
          <span>知心家政</span>
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
  name: "housekeping",
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
.house .head {
  display: flex;
  flex-direction: row;
}
.house .head span {
  margin: 15px 0 0 8px;
}
.house .head h2 {
  padding-left: 120px;
}
/* 内容列表样式 */
.house .content img {
  width: 40px;
  height: 40px;
}
.house .content ul {
  display: flex;
  flex-direction: row;
}
.house .content ul li {
  display: inline-block;
}
.house .content ul li span {
  padding: 1px 177px 1px 11px;
  display: inline-block;
}
</style>