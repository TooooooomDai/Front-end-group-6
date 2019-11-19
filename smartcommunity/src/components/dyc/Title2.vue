<template>
  <div class="title">
    <div @click="back" class="return">&lt;&nbsp;返回</div>
    <div class="text">{{title}}</div>
    <div class="save">保存</div>
  </div>
</template>
<script>
export default {
  name: "Title2",
  props: ["title"],
  methods: {
    back() {
      console.log("被触发了");
      this.$router.go(-1);
    }
  },
  mounted() {
    // console.log('我被创建了');
  }
};
</script>
<style scoped>
.title {
  height: 1rem;
  width: 100%;
  background: #fff;
  /* color: #fff; */
  position: absolute;
  top: 0;
  text-align: center;
}
.title div {
  position: absolute;
  bottom: 10px;
  font-size: 20px;
}
.title div.text {
  /* width: 100%; */
  left: calc(50% - 40px);
  margin: 0 auto;
}
.title .return {
  left: 20px;
}
.title .save {
  right: 20px;
}
</style>