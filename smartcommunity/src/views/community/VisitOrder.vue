<template>
  <div style="background:#f8f8f8 ;width:100%;height:100%">
    <div class="visit-top">
      <router-link to="/community">
        <div class="visittopleft">
          <span class="iconfont icon-houtui"></span>
        </div>
      </router-link>
      <div class="visittopmid">访客授权</div>
      <router-link to="/visitrecord">
        <div class="visittopright">访客记录</div>
      </router-link>
    </div>
    <div class="vname">
      <input ref="vname" type="text" placeholder="访客姓名" />
    </div>
    <div class="vnum">
      <input ref="vphone" type="text" placeholder="手机号码(11位)" />
    </div>
    <div class="vsex">
      <span>性别</span>
      <label for>
        <input v-model="sex" type="radio" class="boy" name="sex" value="男" />男
        <input
          v-model="sex"
          style="margin-left:2rem"
          type="radio"
          class="girl"
          name="sex"
          value="女"
        />女
      </label>
    </div>
    <div class="vidtype">
      <span style="font-size:14px;color:gray;margin-left:0.3rem">证件类型 :</span>
      <span style="font-size:14px;margin-left:0.3rem">身份证</span>
    </div>
    <div class="vid">
      <input ref="vid" type="text" placeholder="身份证号(18位)" />
    </div>
    <div class="vcar">
      <input ref="vcar" type="text" placeholder="是否驾车(是或否)" />
    </div>
    <div class="vcarnum">
      <input ref="vcarnum" type="text" placeholder="车牌号码" />
    </div>
    <div class="date">
      <div class="yuyue">预约时间</div>
      <el-date-picker v-model="value1" type="date" placeholder="预约日期" style="width:3rem;" value-format="yyyy-MM-dd"></el-date-picker>
      <el-date-picker v-model="value2" type="date" placeholder="到期日期" style="width:3rem" value-format="yyyy-MM-dd"></el-date-picker>
    </div>
    <div class="vtext">
      <input ref="vtext" type="text" placeholder="来访说明" />
    </div>
    <button @click="submitinform" class="vcode">生成通行证二维码</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      sex: "",
      inform: {},
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      value2: ""
    };
  },
  methods: {
    submitinform() {
      let vname = this.$refs.vname.value;
      // console.log(vname)
      let vphone = this.$refs.vphone.value;
      // console.log(vphone)
      let vid = this.$refs.vid.value;
      // console.log(vid)
      let vcar = this.$refs.vcar.value;
      // console.log(vcar)
      let vcarnum = this.$refs.vcarnum.value;
      // console.log(vcarnum)
      let vtext = this.$refs.vtext.value;
      // console.log(vtext)
      let vtime1 = this.value1.toLocaleString().split('上午')[0];
      let vtime2 = this.value2.toLocaleString().split('上午')[0];
      console.log(vtime1);
      console.log(vtime2);
      if (
        vname == "" ||
        vphone == "" ||
        this.sex == "" ||
        vid == "" ||
        vcar == "" ||
        vcarnum == "" ||
        vtext == ""
      ) {
        // alert("请输入完整信息");
        this.$dialog.alert({
                title: "提示",
                message: "请填写完整信息"
              });
      } else {
        this.inform = {
          uersname:'小王',
          vaName: vname,
          vaTel: vphone,
          vaSex: this.sex,
          vaCertNum: vid,
          driverFlag: vcar,
          vaCarsNum: vcarnum,
          vaDesc: vtext,
          visitorAppointmentTime: vtime1,
          vaEndTime: vtime2
        };
        this.$router.push({ path: "/visitpass" });
        // this.$store.dispatch('getpass',{name:vname,appoint:vtime1})
        console.log(this.inform);
        localStorage.setItem("name",vname)
        localStorage.setItem("appoint",vtime1)
        // localStorage.name=vname;
        // localStorage.appoint=vtime1
        axios.post('/user/licenses?',this.inform)
      }
    }
  }
};
</script>
<style scoped>
.visit-top {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  background: white;
  position: relative;
}
.visittopleft {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  font-size: 14px;
  position: absolute;
  left: 0px;
}
.visittopmid {
  font-weight: 600;
  display: flex;
  font-size: 18px;
  align-items: center;
}
.visittopright {
  display: flex;
  font-size: 14px;
  /* align-items: center; */
  line-height: 1rem;
  position: absolute;
  right: 0.2rem;
  color: #4bbcdc;
  font-weight: 600;
}

.vname,
.vnum,
.vid,
.vcar,
.vcarnum,
.vtext,
.vidtype {
  background: white;
  margin-top: 0.2rem;
  height: 0.7rem;
  line-height: 0.7rem;
  display: flex;
  font-size: 16px;
  border-bottom: 1px solid lightgray;
}
.vname input,
.vnum input,
.vid input,
.vcar input,
.vcarnum input,
.vtext input {
  margin-left: 0.3rem;
  background: white;
  width: 5.7rem;
  border: none;
  outline: none;
}
.vsex {
  font-size: 14px;
  height: 0.7rem;
  line-height: 0.7rem;
  background: white;
  margin-top: 0.2rem;
  color: gray;
  position: relative;
  /* display: flex; */
}
.vsex span {
  position: absolute;
  left: 0.3rem;
}

.vcode {
  border: none;
  outline: none;
  border-radius: 0.1rem;
  margin-top: 1rem;
  width: 6rem;
  height: 1rem;
  background: #4bbcdc;
  color: white;
}

.date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  margin-top: 0.2rem;
  background: white;
  font-size: 14px;
  color: gray;
}
.date .yuyue {
  margin-left: 0.3rem;
}
</style>