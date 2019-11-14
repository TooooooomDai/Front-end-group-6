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
          <img src="../assets/dainhua.jpg" alt />
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <img src="../assets/jiazheng.jpg" alt />
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
  name: "fallow",
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
.fallow .head {
  display: flex;
  flex-direction: row;
}
.fallow .head span {
  margin: 15px 0 0 8px;
}
.fallow .head h2 {
  padding-left: 120px;
}
/* 内容列表样式 */
.fallow .content img {
  width: 40px;
  height: 40px;
}
.fallow .content ul {
  display: flex;
  flex-direction: row;
}
.fallow .content ul li {
  display: inline-block;
}
.fallow .content ul li span {
  padding: 1px 168px 1px 11px;
  display: inline-block;
}
</style>