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
        lists: ["1幢", "2幢", "3幢", "4幢", "5幢", "6幢", "7幢", "8幢", "9幢", "10幢", "11幢", "12幢"],
        isactive:'',
    };
  },
  methods: {
    send(loudong) {
      this.isactive=loudong;
      this.$store.dispatch('loudongid',loudong);

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