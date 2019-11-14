<template>
  <div class="Myhouse">
    <div class="title">
      <span @click="goback">&lt;</span>
      <span>我的房屋</span>
      <span @click="addhouse">添加房屋</span>
    </div>
    <housemain></housemain>
  </div>
</template>
<script>
import housemain from "../components/Myhouse/housemain";
export default {
  data() {
    return {};
  },
  methods: {
    addhouse() {
      this.$router.push({ path: "/Myhouse/Addhouse"});
    },
    goback() {
      this.$router.push({ path: "/mine"});
    }
  },
  components: {
    housemain
  }
};
</script>
<style scoped>
.Myhouse{
    height: 100%;
}
.title {
  width: 100%;
  height: 1rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.title span {
  padding: 0 0.2rem;
}
.title span:nth-child(1) {
  margin-left: 10px;
  color: black;
  font-size: 14px;
  font-weight: 600;
}
.title span:nth-child(2) {
  margin-left: 25px;
  color: black;
  font-size: 18px;
  font-weight: 600;
}
.title span:nth-child(3) {
  margin-right: 10px;
  color: #92dce7;
  font-size: 14px;
  font-weight: 600;
}
</style>