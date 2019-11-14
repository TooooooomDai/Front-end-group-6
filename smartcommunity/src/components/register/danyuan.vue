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
        lists: ["1", "2", "3"],
        isactive:'',
    };
  },
  methods: {
    send(danyuan) {
      console.log(danyuan);
      this.isactive=danyuan;
      this.$store.dispatch('danyuanid',danyuan);

        // this.$emit('pianquid',list)
    },

  },

};
</script>
<style scoped>
ul {

  height: 3rem;
  box-sizing: border-box;
  border: 1px solid #999;
  width: 100%;
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