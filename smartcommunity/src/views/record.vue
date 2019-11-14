<template>
  <div class="record">
    <div class="head">
      <!-- 头部返回键 -->
      <i @click="prev">
        <img src="../assets/jiantou.jpg" alt />
      </i>
      <h2>开门记录</h2>
    </div>
    <hr />
    <!-- 表头 -->
    <div class="header">
      <span>时间</span>
      <span class="list">进出门方式</span>
      <span>房屋单元入口</span>
    </div>
    <!-- 开门记录列表 -->
    <ul>
      <li>2019/11/5 12：24：56&nbsp;&nbsp;&nbsp;人脸进&nbsp;&nbsp;&nbsp;1期1幢1单元入口</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    prev() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
*{
  /* margin: 0;
  padding: 0; */
  list-style: none;
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
  padding-left: 92px;
}
.head i img {
  width: 20px;
  height: 20px;
}
/* 表头 */
.header {
  display: flex;
  flex-direction: row;
}
.header .list{
    padding: 0 87px;
}
</style>
