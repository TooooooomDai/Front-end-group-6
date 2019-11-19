<template>
  <div id="app">

    <router-view/>
      <ul @click="housemain" v-show="show">
        <li>
            <router-link to="/Myhouse?uid=1">housemain</router-link> 
        </li>
      </ul>   
  </div>
</template>
<script>
export default {
  data(){
    return{
      show:true
    }
  },
  methods: {
    housemain(){
      this.show = false;
    }
  },
}
</script>
<style scoped>
#app{
  height: 100%;
}
body{
  position: relative;
}
ul{
  /* border: 1px solid black; */
  position: absolute;
  bottom: 0;
  height: 1rem;
  width: 100%;
  list-style: none
}
</style>
