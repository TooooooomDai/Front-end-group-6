<template>
  <div id="wrap">
    
    <keep-alive>
    <div id="content">
      <div>
        <span class="iconfont icon-zhanghu"></span>
        <input v-on:blur="shouji" ref="phone" type="text" id="phone" maxlength="11" placeholder="请输入您的手机号" />
      </div>
      <p class="wrong" v-show="showshouji">请输入正确的手机号</p>

      <div>
        <span class="iconfont icon-kaisuo"></span>
        <input :type="pswType" id="psw1" placeholder="请输入密码" v-on:blur="password1" ref="pswmsg1" />
        <span class="iconfont icon-jurassic_loseeyes icon" @click="changeType" v-show="eye"></span>
      <span class="iconfont icon-yanjing icon" @click="changeType" v-show="!eye"></span>
      </div>
      <p class="wrong" v-show="show1">请输入八位字母加数字的有效密码</p>

      <div>
        <span class="iconfont icon-kaisuo"></span>
        <input :type="pswType" id="psw2" placeholder="请确认密码" v-on:blur="password2" ref="pswmsg2"/>
        <span class="iconfont icon-jurassic_loseeyes icon" @click="changeType" v-show="eye"></span>
      <span class="iconfont icon-yanjing icon" @click="changeType" v-show="!eye"></span>
      </div>
      <p class="wrong" v-show="show2">两次密码不同</p>

      <div>
        <span class="iconfont icon-iconset0282"></span>
        <input v-on:blur="yzmpanduan" type="text" id="yzm" ref="yzmin" placeholder="请输入验证码" />
        <span class="yzm" @click="yzm" ref="randoms">获取验证码</span>
      </div>
      <p class="wrong" v-show="showyzm">请输入正确的验证码</p>
    </div>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "rstepone",
  data() {
    return {
      showshouji:false,
      show1:false,
      show2:false,
      pswlock:false,
      showyzm:false,
      eye:false,
      pswType: "password",
    }
  },
  methods: {
    shouji() {
      let phone = this.$refs.phone.value;
      let shoujireg = /^1[3578]\d{9}$/;
      if (shoujireg.test(phone)) {
        this.showshouji = false;
        this.lock1 = true;
        this.$store.dispatch('phonenumber',phone);
      } else {
        this.showshouji = true;
        this.lock1 = false;
      }
    },
    changeType() {
      this.pswType = this.pswType === "password" ? "text" : "password";
      this.eye = !this.eye;
    },
    password1() {
      let userpsw = this.$refs.pswmsg1.value;
      let shuzi = /[0-9]/;
      let zimu = /[a-zA-Z]/;
      if (shuzi.test(userpsw) && zimu.test(userpsw) && userpsw.length >= 8)
        this.show1 = false;
      else this.show1 = true;
    },
    password2() {
      let userpsw1 = this.$refs.pswmsg1.value;
      let userpsw2 = this.$refs.pswmsg2.value;

      if (userpsw1 === userpsw2) {
        this.show2 = false;
        this.pswlock = true;
        this.$store.dispatch('getPassword',userpsw1)
      } else this.show2 = true;
    },
    yzm() {
      let yzmstr1 = "";
      for (let i = 0; i < 4; i++) {
        yzmstr1 += parseInt(Math.random() * 10);
      }
      this.yzmstr = yzmstr1;
      this.$refs.randoms.innerHTML = yzmstr1;
    },
    yzmpanduan() {
      //  let yzmin= this.$refs.yzmin.value;
      if (this.$refs.yzmin.value == this.yzmstr) {
        this.showyzm = false;
        this.lock2 = true;
      } else {
        this.showyzm = true;
        this.lock2 = false;
      }
    },
  },
};
</script>
<style scoped>

#content .iconfont {
  font-size: 20px;
  color: #e8e8e8;
  font-size: 22px;
}

#content {
  width: 100%;
  height: 6rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#content div {
  width: 6.5rem;
  height: 0.9rem;
  font-size: 16px;
  border: 1px solid #e8e8e8;
  border-radius: 0.06rem;
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
}
.yzm {
  font-size: 14px;
  color: #21bdc9;
  margin-left: 1rem;
  cursor: pointer;
}
input {
  margin-left: 0.1rem;
  width: 5.3rem;
  height: 20px;
  outline: none;
  border: 0;
  font-size: 16px;
  color: #999;
}
.wrong {
  width: 6.5rem;
  display: block;
  text-align: left;
  height: 0.12rem;
  font-size: 12px;
  color: red;
  margin-top: -0.01rem;
}
</style>