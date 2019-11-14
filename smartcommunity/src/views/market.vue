<template>
<!-- 网上菜场页面 -->
    <div class="market">
      <!-- 头部 -->
    <div class="head">
      <span @click="prev"><img src="../assets/jiantou.jpg" alt /></span>
      <h2>网上菜场</h2>
    </div>
    <!-- 内容列表 -->
    <div class="content">
      <ul>
        <li>
          <img src="../assets/shucai.jpg" alt />
          <span>靖国蔬菜</span>
          <img src="../assets/dainhua.jpg" alt />
        </li>
      </ul>
      <hr>
      <ul>
        <li>
          <img src="../assets/zhurou.jpg" alt />
          <span>永强猪肉</span>
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
        name:'market',
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
    }
</script>
<style scoped>
/* 头部样式 */
.head span img {
  width: 20px;
  height: 20px;
}
.market .head {
  display: flex;
  flex-direction: row;
}
.market .head span {
  margin: 15px 0 0 8px;
}
.market .head h2 {
  padding-left: 120px;
}
/* 内容列表样式 */
.market .content img {
  width: 40px;
  height: 40px;
}
.market .content ul {
  display: flex;
  flex-direction: row;
}
.market .content ul li {
  display: inline-block;
}
.market .content ul li span{
    padding: 1px 177px 1px 11px;
    display: inline-block;
}
</style>