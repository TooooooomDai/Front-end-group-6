<template>
  <div>
    <ul>
      <li v-for="list of lists" @click="send(list)" :class="{addclass:list==isactive}">{{list}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: ["kj", "lk", "po"],
      isactive:'',
    };
  },
  methods: {
    send(list) {
      // console.log(this.$refs.msg.style);
      this.isactive=list;
      console.log(list);
      this.$store.dispatch("pianquid", list);
      // localStorage.setItem("pianquchoose", list);

      // this.$emit('pianquid',list)
    },
    guanbi() {}
  }
};
</script>
<style scoped>
ul {
  margin-top: 0.5rem;
  height: 3rem;
  box-sizing: border-box;
  border: 1px solid #999;
  width: 100%;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.addclass{
  background: yellow
}
li {
  margin-top: 0.2rem;
  height: 0.5rem;
}
</style>