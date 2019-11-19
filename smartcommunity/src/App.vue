<template>
  <div id="app">
    <router-view/>
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
  overflow: auto;
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
