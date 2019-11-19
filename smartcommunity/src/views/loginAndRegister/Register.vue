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
import qs from "qs";
import axios from "axios";

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
      lock_1: true,
      lock_2: true,
      lock_3: true,
      lock_4: true,
      lock: false
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
      // if((this.$store.state.identity&&this.$store.state.loudongnum&&this.$store.state.danyuan&&this.$store.state.fangwu)||registerLock){
      //   console.log('可跳转')

      // }
      let lock1 =
        this.$store.state.identity &&
        this.$store.state.loudongnum &&
        this.$store.state.danyuan &&
        this.$store.state.fangwu;
      let lock2 = this.$store.state.phone && this.$store.state.password;
      let lock3 = this.$store.state.beginTime && this.$store.state.endTime;
      let lock4 =
        this.$store.state.username &&
        this.$store.state.xingming &&
        this.$store.state.sex &&
        this.$store.state.idCard &&
        this.$store.state.nation;

      // console.log(this.$store.state.beginTime )
      // console.log(this.$store.state.endTime )
      //       if (lock1 && !lock2) {
      //         this.count++;
      //         this.show1 = false;
      //         this.show2 = true;
      //         this.$refs.title.innerHTML = "完善信息";
      //       }
      //       else if (lock2 && !lock3) {this.count++;
      //         this.show2 = false;
      //         this.show3 = true;
      //       }
      //       else if (lock3 && !lock4) {this.count++;
      //       console.log(1)
      //         this.show3 = false;
      //         this.show4 = true;
      //       }
      //       else if (lock4) {this.count++;
      //         this.show4 = false;
      //         this.show5 = true;
      //         this.$refs.btn.innerHTML = "完成";
      //       }else {
      //         this.$notify.error({
      //           title: "错误",
      //           message: "您输入的账号或者密码有误！"
      //         });
      //         console.log(this.$store.state.list);
      //       }
      if (lock1 && this.lock_1) {
        this.lock = true;
      }
      if (lock2 && this.lock_2) {
        this.lock = true;
      }
      if (lock3 && this.lock_3) {
        this.lock = true;
      }
      if (lock4) {
        this.lock = true;
      }
      if (this.lock) {
        this.count++;
        switch (this.count) {
          case 1:
            break;
          case 2:
            this.lock_1 = false;
            this.lock = false;
            this.show1 = false;
            this.show2 = true;
            this.$refs.title.innerHTML = "完善信息";
            break;
          case 3:
            this.lock = false;
            this.lock_2 = false;
            this.show2 = false;
            this.show3 = true;
            break;
          case 4:
            this.lock = false;
            this.lock_3 = false;
            this.show3 = false;
            this.show4 = true;
            break;
          case 5:
            console.log(1);
            this.show4 = false;
            this.show5 = true;
            this.$refs.btn.innerHTML = "完成";
            break;
          case 6:
            let userinfo1 = {
              username: this.$store.state.username,

              password: this.$store.state.password, //密码
              tel: this.$store.state.phone, //手机号
              uname: this.$store.state.xingming, //姓名
              certType: "身份证", //证件类型
              certNum: this.$store.state.idCard, //证件号码
              ethnic: this.$store.state.nation, //民族
              sex: this.$store.state.sex //性别
            };
            let userinfolink = {
              identityType: this.$store.state.identity, //身份类型
              houseArea: this.$store.state.list, //片区
              houseTung: Number(this.$store.state.loudongnum.split('幢').join()[0]), //栋
              houseUnit: Number(this.$store.state.danyuan.split('单元').join()[0]), //单元
              houseNum: this.$store.state.fangwu, //房屋（门牌号）
              // startTime: this.$store.state.beginTime, //合同开始
              // endTime: this.$store.state.endTime, //合同结束
              startTime: this.$store.state.beginTime, //合同开始
              endTime: this.$store.state.endTime, //合同结束
              refCert: this.$store.state.username //相关证件
            };
            axios.post('/register',qs.stringify(userinfo1)).then((result)=>{
              console.log(result)
            })

            axios
              .post("/register/register-link", qs.stringify(userinfolink))
              .then(result => {
                console.log(result);
              });

            this.$notify({
              message: "注册成功",
              type: "success"
            });
      
            setTimeout(() => {
              this.$router.push({ path: "/login" }); //跳转登录
            }, 1000);
            break;
        }
      } else {
        this.$notify.error({
          title: "错误",
          message: "您输入的账号或者密码有误！"
        });
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