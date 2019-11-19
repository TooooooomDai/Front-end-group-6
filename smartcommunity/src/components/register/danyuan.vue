<template>
  <div>
    <ul>
      <li v-for="danyuan of lists" @click="send(danyuan)" :class="{addclass:danyuan==isactive}">{{danyuan}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    
    return {
        lists: ["1单元", "2单元", "3单元",, "4单元", "5单元", "6单元"],
        isactive:'',
    };
  },
  methods: {
    send(danyuan) {
      this.isactive=danyuan;
      this.$store.dispatch('danyuanid',danyuan);

        // this.$emit('pianquid',list)
    },

  },

};
</script>
<style scoped>
ul {
  overflow: auto;
  height: 3.5rem;
  box-sizing: border-box;
  border: 1px solid #999;
  width: 99.9%;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
}
.addclass{
  background: yellow
}
li {
  margin-top: 0.2rem;
  height: 0.5rem;
}
</style>