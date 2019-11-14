<template>
  <div class="main">
    <Title3 :title="'设置'"></Title3>
    <div class="content">
      <ul class="top">
        <li>
          <span class="left">使用2G/3G/4G网络播放</span>
          <div @click="changeflag" :class="{right:true,green:flag,white:!flag}">
            <span v-if="flag" class="r-left"></span>
            <span v-else class="r-right"></span>
          </div>
        </li>
        <li>
          <span class="left">GPS定位</span>
          <input type="text" placeholder="请输入上传间隔时">
        </li>
        <li>
          <span class="left">修改密码</span>
          <span style="float:right;display:right;font-size:20px">
            <router-link to="/mine/setting/changepassword">&gt;</router-link>
          </span>
        </li>
      </ul>
      <button>清除缓存</button>
    </div>
  </div>
</template>
<script>
import Title3 from "@/components/dyc/Title3";

export default {
  name: "Setting",
  data() {
    return {
      flag: true
    };
  },
  methods: {
    changeflag() {
      this.flag = !this.flag;
    }
  },
  mounted() {},
  components: {
    Title3
  }
};
</script>
<style scoped>
button {
  width: 70%;
  margin: 30px auto;
  border-radius: 4px;
  height: 50px;
  background: #fff;
  border: 1px solid #ccc;
}
input{
  outline: none;
  border: none;
  float: right;
  text-align: right; 
}
.main {
  height: 100%;
  background: #eee;
}
.green {
  background: green;
}
.white {
  background: #ccc;
}
.content {
  position: absolute;
  top: 99px;
  width: 100%;
  height: calc(100% - 99px);
  background: #fff;
}
li {
  overflow: hidden;
  padding: 15px;
  /* border-top: 2px solid #ccc; */
  border-bottom: 2px solid #ccc;
}
.left {
  float: left;
}
span {
  line-height: 20px;
}
.right {
  float: right;
  width: 40px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid #999;
}
.right span {
  display: block;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 10px;
}
.r-left {
  float: left;
}
.r-right {
  float: right;
}
</style>