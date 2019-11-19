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

<style>
@import "/font/iconfont.css";
html,body{
  width: 100%;
  height:100%;
}
#app{
  height: 100%;
  overflow: scroll;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a:visited{
  color: transparent;
}
button{
  outline: 0;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
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
