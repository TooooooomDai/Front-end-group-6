<template>
  <div id="wrap">
    <div id="top">
      <span class="iconfont icon-houtui icon" v-on:click="back"></span>
      <em>找回密码</em>
      <div style="width:0.2rem"></div>
    </div>
    <div id="content">
      <div class="write">
        <input type="password" id="phone" placeholder="请输入新的登录密码" ref="pass1" v-on:blur="password1" />
      </div>
      <p class="wrong" v-show="show1">请输入八位字母加数字的有效密码</p>

      <div class="write">
        <input type="password" id="yzm" placeholder="请再次输入新的登录密码" ref="pass2" v-on:blur="password2" />
      </div>
      <p class="wrong" v-show="show2">两次密码不同</p>
    </div>
    <button @click="submit">确定</button>
    <div id="foot">
      <div class="call">
        <span class="iconfont icon-002dianhua pic"></span>
      </div>客服热线：
      <i>0535-6156866</i>
    </div>
  </div>
</template>
<script>
document.documentElement.style.fontSize =
  (document.body.clientWidth * 50) / 375 + "px";
export default {
  data() {
    return {
      show1: false,
      show2: false,
      lock: false
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    password1() {
      let userpsw = this.$refs.pass1.value;
      let shuzi = /[0-9]/;
      let zimu = /[a-zA-Z]/;
      if (shuzi.test(userpsw) && zimu.test(userpsw) && userpsw.length >= 8)
        this.show1 = false;
      else this.show1 = true;
    },
    password2() {
      let userpsw1 = this.$refs.pass1.value;
      let userpsw2 = this.$refs.pass2.value;

      if (userpsw1 === userpsw2) {
        this.show2 = false;
        this.lock = true;
      } else this.show2 = true;
    },
    submit(){
      if(this.lock){
        this.$router.push({ path: "/login" });
        let phone=localStorage.phone;
        console.log(phone);
        

      }
    }
  }
};
</script>
<style scoped>
/* @import "../assets/font/iconfont.css"; */
#wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#top {
  /* width: 100%; */
  height: 1rem;
  display: flex;
  align-items: center;
  margin-left: 0.1rem;
  position: relative;
}
.iconfont,
em {
  font-size: 20px;
  font-weight: bolder;
  font-style: normal;
}
.icon {
  position: absolute;
  left: -2.7rem;
}
.write {
  height: 1rem;
  width: 6.5rem;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  padding: 0.1rem;
}
#content {
  margin-top: 1.2rem;
}
input {
  border: 0;
  outline: none;
  font-size: 16px;
}
button {
  margin-top: 01rem;
  width: 6.5rem;
  height: 0.9rem;
  background: #92dce7;
  border: none;
  font-size: 20px;
  color: white;
}
#foot {
  margin-top: 5rem;
}
.call {
  width: 0.3rem;
  height: 0.4rem;
  border-radius: 0.06rem;
  background: #21bdc9;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  padding: 0.06rem 0;
}
.pic {
  font-size: 12px;
  color: white;
}
i {
  font-style: normal;
  color: #17b3c2;
}
.wrong {
  width: 6.5rem;
  display: block;
  margin-left: 0.5rem;
  height: 0.2rem;
  font-size: 12px;
  color: red;
  margin-left: -0.8rem;
}
</style>