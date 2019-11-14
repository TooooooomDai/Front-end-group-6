<template>
<!-- 日用百货页面 -->
    <div class="bazaar">
      <!-- 头部 -->
    <div class="head">
      <span @click="prev"><img src="../assets/jiantou.jpg" alt /></span>
      <h2>日用百货</h2>
    </div>
    <!-- 内容列表 -->
    <div class="content">
      <ul>
        <li>
          <img src="../assets/wangwang.jpg" alt />
          <span>旺旺超市</span>
          <img src="../assets/dainhua.jpg" alt />
        </li>
      </ul>
      <hr>
      <ul>
        <li>
          <img src="../assets/darunfa.jpg" alt />
          <span>大润发超市</span>
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
        name:'bazaar',
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
.bazaar .head {
  display: flex;
  flex-direction: row;
}
.bazaar .head span {
  margin: 15px 0 0 8px;
}
.bazaar .head h2 {
  padding-left: 120px;
}
/* 内容列表样式 */
.bazaar .content img {
  width: 40px;
  height: 40px;
}
.bazaar .content ul {
  display: flex;
  flex-direction: row;
}
.bazaar .content ul li {
  display: inline-block;
}
.bazaar .content ul li span{
    padding: 1px 168px 1px 11px;
    display: inline-block;
}
</style>