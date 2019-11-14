<template>
  <div id="wrap">
    <div id="top">
        <span class="iconfont icon-houtui icon" v-on:click="back"></span>
    
      <em>找回密码</em>
      <div style="width:0.2rem"></div>
    </div>
    <div id="content">
      <div class="write">
        <keep-alive>
          <input v-on:blur="shouji" ref="msg" type="text" id="phone" placeholder="请输入手机号" />
        </keep-alive>
      </div>
      <p class="wrong" v-show="showshouji">请输入正确的手机号</p>

      <div class="write">
        <input v-on:blur="yzmpanduan" type="text" id="yzm" ref="yzmin" placeholder="请输入验证码" />
        <span class="yzm" @click="yzm" ref="randoms">获取验证码</span>
      </div>
      <p class="wrong" v-show="show">请输入正确的验证码</p>
    </div>
    <button @click="next">下一步</button>
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
      show: false,
      showshouji: false,
      lock1: false,
      lock2: false,
      yzmstr: ""
    };
  },
  methods: {
    shouji() {
      let phone = this.$refs.msg.value;
      let shoujireg = /^1[3578]\d{9}$/;
      if (shoujireg.test(phone)) {
        this.showshouji = false;
        this.lock1 = true;
      } else {
        this.showshouji = true;
        this.lock1 = false;
      }
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
        this.show = false;
        this.lock2 = true;
      } else {
        this.show = true;
        this.lock2 = false;
      }
    },
    next() {
      if (this.lock1 && this.lock2) {
        this.$router.push({ path: "/forgetpsw2" });
        localStorage.setItem("phone", this.$refs.msg.value);
      }
    },
    back() {
      this.$router.go(-1); //返回上一层
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
.yzm {
  font-size: 16px;
  color: #21bdc9;
  margin-left: 1rem;
  cursor: pointer;
}
button {
  margin-top: 0.3rem;
  width: 6.5rem;
  height: 0.9rem;
  background: #92dce7;
  border: none;
  font-size: 20px;
  color: white;
}
#foot {
  margin-top: 4.8rem;
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
  margin-left: -2.5rem;
}
</style>