<template>
  <div class="content">
    <Title :title="'我的'"></Title>
    <div class="mine">
      <div class="account">
        <div class="userinfo">
          <div class="portrait">
            <img src="./3.jpg" style="border-radius: 10px;width:80px;height:80px" alt />
          </div>
          <p>
            <span class="name">{{name}}</span>
            <span class="type">{{type}}</span>
          </p>
        </div>
        <router-link to="/mine/account">
          <div class="arrow">&gt;</div>
        </router-link>
      </div>
      <ul class="resident">
        <router-link to="/mine/resident">
          <li>住户信息</li>
        </router-link>
        <router-link :to="{ path: '/Myhouse', query: {name}}">
          <li>我的房产</li>
        </router-link>
        <router-link :to="{ path: '/mine/mycar', query: {name}}">
          <li style="margin-bottom:20px">我的车辆</li>
        </router-link>
        <router-link to="/mine/neighborhood">
          <li>关于小区</li>
        </router-link>
        <router-link to="/mine/aboutproperty">
          <li>关于物业</li>
        </router-link>
        <router-link to="/mine/aboutus">
          <li style="margin-bottom:20px">关于我们</li>
        </router-link>
        <router-link to="/mine/setting">
          <li>设置</li>
        </router-link>
        <router-link to="/login">
          <li @click="logout">退出登录</li>
        </router-link>
      </ul>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/dyc/TabBar";
import Title from "@/components/dyc/Title";
export default {
  name: "Mine",
  data() {
    return {
      name: "张宏",
      type: "业主",
      phonenumber: 13666666666
    };
  },
  methods: {
    logout() {
      this.$store.state.guardflag = true;
      localStorage.removeItem("uid");
    }
  },
  components: {
    TabBar,
    Title
  }
};
</script>

<style scoped>
.content {
  position: relative;
  height: 100%;
}
.mine {
  position: absolute;
  top: 1rem;
  width: 100%;
  height: calc(100% - 69px - 1rem);
  background: #eee;
}
.mine .account {
  background: #fff;
  margin-top: 20px;
  height: 120px;
  font-size: 20px;
  position: relative;
  overflow: hidden;
}
.mine .account .userinfo {
  padding: 10px;
  float: left;
}
.mine .account .userinfo p {
  width: 80px;
  float: left;
}
.mine .account .userinfo .portrait {
  float: left;
  margin: 10px auto;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 2px solid #ccc;
}
.mine .account .userinfo .type {
  width: 60px;
  font-size: 14px;
  height: 30px;
  background: #ccc;
  display: inline-block;
  margin-top: 10px;
  line-height: 30px;
}
.mine .account .arrow {
  font-size: 40px;
  position: absolute;
  right: 10px;
  top: 40px;
  color: #ccc;
}
.mine .resident li {
  color: black;
  border-top: 1px solid #ccc;
  text-align: left;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  text-indent: 20px;
  background: #fff;
}
.mine footer {
  position: absolute;
  bottom: 0;
  height: 70px;
  width: 100%;
  background: #eee;
}
.mine footer div {
  width: calc(100% - 40px);
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: #fff;
  line-height: 40px;
}
</style>