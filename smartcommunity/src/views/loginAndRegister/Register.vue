<template>
  <div id="wrap">
    <div id="top">
      <span class="iconfont icon-houtui icon" @click="lastStep"></span>
      <em ref="title">注册</em>
      <div style="width:0.2rem"></div>
    </div>
    <rstepone v-show="show1"></rstepone>
    <rsteptwo v-show="show2"></rsteptwo>
    <rstepthree v-show="show3"></rstepthree>
    <rstepfour v-show="show4"></rstepfour>
    <rstepfive v-show="show5"></rstepfive>
    <button @click="next" ref="btn">下一步</button>
  </div>
</template>
<script>
import rstepone from "../../components/register/rstepone";
import rsteptwo from "../../components/register/rsteptwo";
import rstepthree from "../../components/register/rstepthree";
import rstepfour from "../../components/register/rstepfour";
import rstepfive from "../../components/register/rstepfive";

document.documentElement.style.fontSize =
  (document.body.clientWidth * 50) / 375 + "px";
export default {
  name: "Register",
  data() {
    return {
      count: 1,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      lock: true
    };
  },
  components: {
    rstepone,
    rsteptwo,
    rstepthree,
    rstepfour,
    rstepfive
  },
  methods: {
    lastStep() {
      this.count--;
      if (this.count == 0) {
        this.$router.push({ path: "/login" });
      } else {
        switch (this.count) {
          case 1:
            this.show1 = true;
            this.show2 = false;
            this.$refs.title.innerHTML = "注册";
            break;
          case 2:
            this.show2 = true;
            this.show3 = false;
            this.$refs.title.innerHTML = "完善信息";
            break;
          case 3:
            this.show3 = true;
            this.show4 = false;
            break;
          case 4:
            this.show4 = true;
            this.show5 = false;
            this.$refs.btn.innerHTML = "下一步";

            break;
          case 5:
            this.show5 = true;
            break;
        }
      }
    },
    next() {
      if (this.lock) {
        this.count++;
        console.log(this.count);
        switch (this.count) {
          case 1:
            this.show1 = true;
            break;
          case 2:
            this.show1 = false;
            this.show2 = true;
            this.$refs.title.innerHTML = "完善信息";
            break;
          case 3:
            this.show2 = false;
            this.show3 = true;
            break;
          case 4:
            this.show3 = false;
            this.show4 = true;
            break;
          case 5:
            this.show4 = false;
            this.show5 = true;
            this.$refs.btn.innerHTML = "完成";
            break;
          case 6:
            console.log('注册成功')
            // this.$router.push({ path: "/login" });//跳转首页
        }
      }
    }
  }
};
</script>
<style scoped>
#wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
#top {
  /* width: 100%; */
  height: 1rem;
  display: flex;
  align-items: center;
  margin-left: 0.1rem;
}
.icon {
  position: absolute;
  left: 0.2rem;
}
#top .iconfont,
#top em {
  font-size: 20px;
  font-weight: bolder;
  font-style: normal;
}
button {
  width: 6.5rem;
  height: 0.9rem;
  background: #92dce7;
  border: none;
  font-size: 20px;
  color: white;
  position: fixed;
  bottom: 1.5rem;
}
</style>