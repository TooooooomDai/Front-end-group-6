<template>
  <div class="title" >
    <div class="return" @click="$router.go(-1)">&lt;&nbsp;返回</div>
    <div class="text">{{title}}</div>
    <router-link to="/mine/mycar/addcar">
      <div class="save">添加车辆</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Title4",
  props: ["title"],
  mounted() {
    console.log(this.movie);
  },
  
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