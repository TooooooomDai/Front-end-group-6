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
        lists: ["101", "102", "201","202","301","302","401","402","501","502","601","602","701","702","801","802","901","902","1001","1002","1101","1102"],
        isactive:'',
    };
  },
  methods: {
    send(fangwu) {
      this.isactive=fangwu;
      this.$store.dispatch('fangwuid',fangwu);

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
  height: 0.5rem;
  margin-top: 0.2rem;
}
</style>