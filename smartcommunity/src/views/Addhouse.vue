<template>
  <div class="Addhouse">
    <div class="title">
      <span @click="goback">&lt;</span>
      <span>添加房屋</span>
      <span>增加空位</span>
    </div>
    <div class="add">
      <addhouse></addhouse>
    </div>
  </div>
</template>
<script>
import addhouse from "../components/Addhouse/addhouse";
export default {
  methods: {
    goback() {
      this.$router.replace({ path: "/Myhouse", id: { id: 111 } });
    }
  },
  components: {
    addhouse
  }
};
</script>
<style scoped>
.title {
  width: 100%;
  height: 1rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: sticky;
  top: 0;
}
.title span{
  padding:  0 0.2rem;
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
  color: black;
  font-size: 14px;
  opacity: 0;
}
.add {
  overflow: auto;
  height: calc(100% - 1rem);
}
.Addhouse {
  height: 100%;
}
</style>