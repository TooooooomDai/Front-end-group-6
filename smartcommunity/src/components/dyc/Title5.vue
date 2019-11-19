<template>
  <div class="title">
    <div class="return" @click="back">&lt;&nbsp;返回</div>
    <div class="text">{{title}}</div>
    <router-link :to="{ path: '/mine/mycar/editvehicle', query: {messages}}">
      <div class="save">编辑车辆</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Title4",
  props: ["title", "messages"],
  methods: {
    // messages(){
    //   return this.$parent.data.messages
    // }
  },
  mounted() {
    console.log(this.messages);
    // console.log(this.$route.query.plate);
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
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