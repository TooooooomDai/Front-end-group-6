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
      lists: ["东区", "南区", "西区","北区"],
      isactive:'',
    };
  },
  methods: {
    send(list) {
      // console.log(this.$refs.msg.style);
      this.isactive=list;
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
  height: 3.5rem;
  box-sizing: border-box;
  border: 1px solid #999;
  width: 99.9%;
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