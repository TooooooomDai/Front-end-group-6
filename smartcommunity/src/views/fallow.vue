<template>
<!-- 休闲娱乐页面 -->
  <div class="fallow">
    <!-- 头部 -->
    <div class="head">
      <span @click="prev"><img src="../assets/jiantou.jpg" alt /></span>
      <h2>休闲娱乐</h2>
    </div>
    <!-- 内容列表 -->
    <div class="content">
      <ul>
        <li>
          <img src="../assets/nana.jpg" alt />
          <span>娜娜足浴</span>
         <el-button plain @click="open1" style="border:none;">
            <img src="../assets/dainhua.jpg" alt />
          </el-button>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <img src="../assets/jiazheng.jpg" alt />
          <span>知心家政</span>
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
document.documentElement.style.fontSize = document.body.clientWidth * 50 / 375 + 'px'
export default {
  name: "fallow",
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
};
</script>
<style scoped>
/* 头部样式 */
.head span img {
  width: 0.4rem;
  height: 0.4rem;
}
.fallow .head {
  display: flex;
  flex-direction: row;
}
.fallow .head span {
  margin: 0.3rem 0 0 0.16rem;
}
.fallow .head h2 {
  padding-left: 2.4rem;
   font-size: 18px;
  line-height: 1rem;
  font-weight: 600;
}
/* 内容列表样式 */
.fallow .content img {
  width: 0.8rem;
  height: 0.8rem;
  padding-left: 0.2rem;
}
.fallow .content ul {
  display: flex;
  flex-direction: row;
}
.fallow .content ul li {
  display: inline-block;
}
.fallow .content ul li span {
  padding: 0.24rem 3rem 0.44rem 0.3rem;
  display: inline-block;
  font-size: 16px;
}
</style>