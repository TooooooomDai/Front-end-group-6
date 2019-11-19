<template>
  <div id="c_msg">
    <van-sticky>
    <div class="title">
      <strong>我的消息</strong>
      <span class="iconfont icon-houtui" @click="back"></span>
    </div>
    </van-sticky>
    <ul class="myMsg">
      <li>
        <p>
          系统消息
          <span>2019/06/18 13:00</span>
        </p>
        <p>XXX给您点了赞</p>
      </li>
      <li>
        <p>
          系统消息
          <span>2019/06/18 13:00</span>
        </p>
        <p>XXX给您点了赞</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      history.back(-1);
    }
  }
};
</script>
<style scoped>
#c_msg {
  background: #f8f8f8;
  width: 7.5rem;
  height: 100%;
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
.myMsg {
  width: 7.1rem;
  padding: 0.2rem;
  background: #f8f8f8;
}
.myMsg li {
  width: 7.1rem;
  padding: 0.2rem 0;
  text-align: left;
  background: #fff;
  margin-top: 0.2rem;
}
.myMsg :first-child {
  margin-top: 0;
}
.myMsg li p {
  margin: 0;
  padding: 0 0.2rem;
}
.myMsg li p:nth-child(1) {
  border-bottom: 1px solid #eee;
  font-weight: bold;
}
.myMsg li p:nth-child(2) {
  padding: 0.2rem;
  font-size: 0.3rem;
}
.myMsg li p > span {
  float: right;
}
</style>