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
         <el-button plain @click="open1" style="border:none;">
            <img src="../assets/dainhua.jpg" alt />
          </el-button>
        </li>
      </ul>
      <hr>
      <ul>
        <li>
          <img src="../assets/zhurou.jpg" alt />
          <span>永强猪肉</span>
          <el-button plain @click="open2" style="border:none;">
            <img src="../assets/dainhua.jpg" alt />
          </el-button>
        </li>
      </ul>
      <hr>
    </div>
  </div>
</template>

<script>
 document.documentElement.style.fontSize = document.body.clientWidth * 50 / 375 + 'px'
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
    },
     open1() {
      this.$notify({
        title: "0571-6735789",
        type: "success"
      });
    },
    open2() {
      this.$notify({
        title: "0571-5765724",
        type: "success"
      });
    }
  }
    }
</script>
<style scoped>
/* 头部样式 */
.head span img {
  width: 0.4rem;
  height: 0.4rem;
}
.market .head {
  display: flex;
  flex-direction: row;
}
.market .head span {
  margin: 0.3rem 0 0 0.16rem;
}
.market .head h2 {
  padding-left: 2.4rem;
    font-size: 18px;
  line-height: 1rem;
  font-weight: 600;
}
/* 内容列表样式 */
.market .content img {
  width: 0.8rem;
  height: 0.8rem;
  padding-left: 0.2rem;
}
.market .content ul {
  display: flex;
  flex-direction: row;
}
.market .content ul li {
  display: inline-block;
}
.market .content ul li span{
    padding: 0.24rem 3rem 0.44rem 0.3rem;
    display: inline-block;
    font-size: 16px;
}
</style>