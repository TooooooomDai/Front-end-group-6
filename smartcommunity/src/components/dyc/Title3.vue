<template>
  <div class="title">
    <div class="return" @click="$router.go(-1)">&lt;&nbsp;返回</div>
    <div class="text">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: "Title3",
  props: ["title"],
  mounted() {
    console.log(this.movie);
  }
};
</script>
<style scoped>
.title {
  height: 99px;
  width: 100%;
  background: #aaa;
  color: #fff;
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
</style>