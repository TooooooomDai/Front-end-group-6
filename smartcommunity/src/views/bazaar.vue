<template>
  <!-- 日用百货页面 -->
  <div class="bazaar">
    <!-- 头部 -->
    <div class="head">
      <span @click="prev">
        <img src="../assets/jiantou.jpg" alt />
      </span>
      <h2>日用百货</h2>
    </div>
    <!-- 内容列表 -->
    <div class="content">
      <ul>
        <li>
          <img src="../assets/wangwang.jpg" alt />
          <span>旺旺超市</span>
          <el-button plain @click="open1" style="border:none;">
            <img src="../assets/dainhua.jpg" alt />
          </el-button>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <img src="../assets/darunfa.jpg" alt />
          <span>大润发超市</span>
          <el-button plain @click="open2" style="border:none;">
            <img src="../assets/dainhua.jpg" alt />
          </el-button>
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<script>
document.documentElement.style.fontSize =
  (document.body.clientWidth * 50) / 375 + "px";
export default {
  name: "bazaar",
  data() {
    return {};
  },
  // 点击返回箭头返回上一个页面
  methods: {
    prev() {
      this.$router.go(-1);
    },
    //  open1() {
    //     this.$alert('0571-6735789', {
    //       confirmButtonText: '确定',
    //       callback: action => {
    //         this.$message({
    //           type: 'info',
    //           message: `action: ${ action }`
    //         });
    //       }
    //     });
    //   },
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
};
</script>
<style scoped>
/* 头部样式 */
.head span img {
  width: 0.4rem;
  height: 0.4rem;
}
.bazaar .head {
  display: flex;
  flex-direction: row;
}
.bazaar .head span {
  margin: 0.3rem 0 0 0.16rem;
}
.bazaar .head h2 {
  padding-left: 2.4rem;
  font-size: 18px;
  line-height: 1rem;
  font-weight: 600;
}
/* 内容列表样式 */
.bazaar .content img {
  width: 0.8rem;
  height: 0.8rem;
  padding-left: 0.2rem;
}
.bazaar .content ul {
  display: flex;
  flex-direction: row;
}
.bazaar .content ul li {
  display: inline-block;
}
.bazaar .content ul li span {
  padding: 0.24rem 2.8rem 0.44rem 0.3rem;
  display: inline-block;
  font-size: 16px;
}
</style>