<template>
  <div id="c_jilu">
    <van-sticky>
      <div class="title">
        <strong>历史报修</strong>
        <router-link to="/c_baoxiu">
          <span class="iconfont icon-houtui"></span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to="/c_baoxiujilu/c_baoxiutodo">待处理</router-link>
        <router-link to="/c_baoxiujilu/c_baoxiustar">待评价</router-link>
        <router-link to="/c_baoxiujilu/c_baoxiufinish">已完结</router-link>
      </div>
    </van-sticky>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#c_jilu {
  background: #f8f8f8;
  width: 7.5rem;
  height: 100%;
}
a {
  text-decoration: none;
  color: #000;
}
.title {
  width: 7.1rem;
  padding: 0 0.2rem;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: center;
  background: #fff;
  font-size: 0.4rem;
  position: relative;
  border-bottom: 1px solid #eee;
}
.title span {
  position: absolute;
  top: 0;
  left: 0.2rem;
  font-size: 0.4rem;
}
.tab {
  width: 7.1rem;
  padding: 0 0.2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
  justify-content: space-evenly;
  background: #fff;
  font-size: 0.3rem;
  margin-bottom: 0.2rem;
  color: #999;
  border-bottom: 1px solid #eee;
}
.tab a {
  color: #999;
}
.tab .router-link-exact-active {
  color: #4bbcdc;
}
</style>