<template>
  <div>
    <ul>
      <li v-for="fangwu of lists" @click="send(fangwu)" :class="{addclass:fangwu==isactive}">{{fangwu}}</li>
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
    send(fangwu) {
      console.log(fangwu);
      this.isactive=fangwu;
      this.$store.dispatch('fangwuid',fangwu);

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
  height: 0.5rem;
  margin-top: 0.2rem;
}
</style>