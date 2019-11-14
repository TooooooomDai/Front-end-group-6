<template>
  <div>
    <ul>
      <li v-for="loudong of lists" @click="send(loudong)" :class="{addclass:loudong==isactive}">{{loudong}}</li>
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
    send(loudong) {
      console.log(loudong);
      this.isactive=loudong;
      this.$store.dispatch('loudongid',loudong);

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