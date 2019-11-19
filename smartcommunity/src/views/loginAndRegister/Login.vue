<template>
  <div id="wrap">
    <img src="../../assets/logo.jpg" alt />
    <div class="kong"></div>
    <div class="writein">
      <span class="iconfont icon-zhanghu icon"></span>
      <input type="text" id="login" placeholder="请输入您的用户名或手机号" ref="user" />
    </div>
    <div class="writein">
      <span class="iconfont icon-kaisuo icon"></span>
      <input ref="psw" :type="pswType" id="password" placeholder="请输入密码" />
      <span class="iconfont icon-jurassic_loseeyes icon" @click="changeType" v-show="eye"></span>
      <span class="iconfont icon-yanjing icon" @click="changeType" v-show="!eye"></span>
    </div>
    <!-- <p class="wrong" v-show="show">请输入八位字母加数字的有效密码</p> -->
    <div class="operationpassword">
      <input type="checkbox" id="rember" v-model="checked" /> 记住密码
      <router-link to="/forgetpsw1">
        <span class="forget">忘记密码</span>
      </router-link>
    </div>
    <button @click="loginin">登录</button>
    <div id="foot">
      没有账号，
      <em>
        <router-link to="/register">前去注册</router-link>
      </em>
    </div>
  </div>
</template>
<script>
// import "../assets/font/iconfont.css";
import axios from "axios";
import qs from "qs";
document.documentElement.style.fontSize =
  (document.body.clientWidth * 50) / 375 + "px";
export default {
  name: "Login",
  data() {
    return {
      show: false,
      showshouji: false,
      pswType: "password",
      eye: true,
      checked: false
    };
  },
  methods: {
    // userpsw() {
    //   let userpsw = this.$refs.psw.value;
    //   let shuzi = /[0-9]/;
    //   let zimu = /[a-zA-Z]/;
    //   if (shuzi.test(userpsw) && zimu.test(userpsw) && userpsw.length >= 8)
    //     this.show = false;
    //   else this.show = true;
    // },

    changeType() {
      this.pswType = this.pswType === "password" ? "text" : "password";
      this.eye = !this.eye;
    },
    loginin() {
      let user = {
        in_time: this.$refs.user.value,
        password: this.$refs.psw.value
      };
      this.$store.state.guardflag = false;
      this.$router.push('/community')
      axios
        .post(
          `/loginup?username=${this.$refs.user.value}&password=${this.$refs.psw.value}`
        )
        .then(result => {
          if (result.data) {
            // console.log(1231)
            // console.log(this.$store.state.loudongnum.split('幢').join()[0])
            localStorage.setItem("uid", result.data.uid);
            this.$notify({
              message: "登录成功",
              type: "success"
            });
          } else {
            this.$notify.error({
              title: "错误",
              message: "您输入的账号或者密码有误！"
            });
          }
        });


      // document.cookie=`user={username=${user.username},password=${user.password}}`
      // document.cookie='username='+user.username+';expires='+ 10;
      // document.cookie='password='+user.password+';expires='+ 10;
;
      // document.cookie='username='+user.username+';expires='+ -1;

      // document.cookie="user" + "=" + user + ";expires=" + 10;

      // }
    }
    // clearCookie: function() {
    //             this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    //         }
  }
};
</script>


<style scoped>
/* @import "../assets/font/iconfont.css"; */
* {
  box-sizing: border-box;
}
body {
  text-align: center;
  font-family: "宋体", arial;
  margin: 0;
  padding: 0;
  background: #fff;
  font-size: 12px;
  color: #000;
}
div,
form,
img,
ul,
ol,
li,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
  border: 0;
}
li {
  list-style-type: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: normal;
}

a:link {
  color: #1f3a87;
  text-decoration: none;
}
a:visited {
  color: #83006f;
  text-decoration: none;
}
a:hover {
  color: #bc2931;
  text-decoration: underline;
}
a:active {
  color: #bc2931;
}

img {
  width: 1.6rem;
  height: 1.5rem;
  margin-top: 2.1rem;
}
.kong {
  height: 0.5rem;
}
.writein {
  width: 6.5rem;
  height: 0.9rem;
  border: 1px solid #e8e8e8;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
}
.icon {
  margin-left: 0.1rem;
  font-size: 0.38rem;
}
input {
  width: 4.8rem;
  margin-left: 0.15rem;
  border: 0;
  outline: none;
  font-size: 16px;
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
.operationpassword {
  margin-top: 0.2rem;
  width: 6.5rem;
}
#rember {
  width: 0.25rem;
  margin-left: -3rem;
}
.forget {
  float: right;
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
  margin-top: 3.5rem;
}
em {
  font-style: normal;
  color: #17b3c2;
}
</style>