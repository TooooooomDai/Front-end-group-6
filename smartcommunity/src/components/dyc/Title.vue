<template>
  <div class="title">
    <div>{{title}}</div>
  </div>
</template>
<script>
export default {
  name: "Title1",
  props: ["title"],
  mounted() {
    console.log(this.movie);
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
.title div{
    width: 100%;
    font-size: 20px;
    /* position: absolute;
    bottom: 0;
    margin: 0 auto; */
    line-height: 1rem;
}
</style>