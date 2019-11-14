<template>
  <div id="c_msg">
    <van-sticky>
    <div class="title">
      <strong>报事报修</strong>
      <router-link to="/community">
        <span class="iconfont icon-houtui"></span>
      </router-link>
      <router-link to="/c_baoxiujilu">
        <i>报修记录</i>
      </router-link>
    </div>
    </van-sticky>
    <div class="baoxiumsg" @click="chooseType">
      报修类型(必填)
      <span class="iconfont icon-qianjin"></span>
      <strong ref="type">{{baoxiuType}}</strong>
    </div>
    <div class="baoxiumsg" v-if="isHome" @click="chooseHouse">
      报修房屋(必填)
      <span class="iconfont icon-qianjin"></span>
      <strong ref="house">{{baoxiuHouse}}</strong>
    </div>
    <div class="baoxiucont">
      报修内容(必填)
      <br />
      <textarea placeholder="请输入报修内容" ref="detail"></textarea>
    </div>
    <div class="baoxiupic">
      图片上传(可填)
      <br />
      <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="3" />
    </div>
    <div class="submit">
      <button @click="submit">提交</button>
    </div>
    <van-popup v-model="isTypeChoose" position="bottom" :style="{ height: '30%' }">
      <div class="typeChooseTitle">
        <strong>报修类型</strong>
        <span @click="chooseType">取消</span>
      </div>
      <div>
        <div class="typeChoose_content">
          <div class="typeChoose_content_s" @click="typeSel('家庭报修')">家庭报修</div>
          <div class="typeChoose_content_s" @click="typeSel('小区报修')">小区报修</div>
          <div class="typeChoose_content_s" @click="typeSel('小区绿化')">小区绿化</div>
          <div class="typeChoose_content_s" @click="typeSel('小区卫生')">小区卫生</div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="isHouseChoose" position="bottom" :style="{ height: '30%' }">
      <div class="typeChooseTitle">
        <strong>选择房屋</strong>
        <span @click="chooseType">取消</span>
      </div>
      <div>
        <ul class="houseChoose_content">
          <li :key="house.text" v-for="house of houseList" @click="houseSel(house)">{{house.text}}</li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      isTypeChoose: false,
      isHome: false,
      isHouseChoose: false,
      baoxiuType: "",
      baoxiuHouse: "",
      houseList: []
    };
  },
  mounted() {
    // 发送请求 获取物主的房屋信息
    this.houseList = [
      { text: "1号楼1单元301" },
      { text: "2号楼1单元301" },
      { text: "3号楼1单元301" },
      { text: "4号楼1单元301" },
      { text: "5号楼1单元301" }
    ];
  },
  methods: {
    chooseType() {
      this.isTypeChoose = !this.isTypeChoose;
    },
    typeSel(type) {
      this.baoxiuType = type;
      this.isTypeChoose = !this.isTypeChoose;
      if (type == "家庭报修") {
        this.isHome = true;
      } else {
        this.isHome = false;
      }
    },
    chooseHouse() {
      this.isHouseChoose = !this.isHouseChoose;
    },
    houseSel(house) {
      this.isHouseChoose = !this.isHouseChoose;
      this.baoxiuHouse = house.text;
    },
    // 此时可以自行将文件上传至服务器
    afterRead(file) {
      console.log(file);
    },
    submit() {
      if (this.$refs.type.innerHTML) {
        if (this.$refs.type.innerHTML == "家庭报修") {
          if (this.$refs.house.innerHTML) {
            if (this.$refs.detail.value) {
              let msg = {
                baoxiuType: this.$refs.type.innerHTML,
                baoxiuHouse: this.$refs.house.innerHTML,
                baoxiuContent: this.$refs.detail.value
              };
              this.$dialog
                .confirm({ message: "确定提交" })
                .then(() => {
                  console.log(msg);
                })
                .catch(() => {});

              // 发送给后端存储
            } else {
              this.$dialog.alert({
                title: "提示",
                message: "请填写报修内容！"
              });
            }
          } else {
            this.$dialog.alert({ title: "提示", message: "请选择报修房屋！" });
          }
        } else {
          if (this.$refs.detail.value) {
            let msg = {
              baoxiuType: this.$refs.type.innerHTML,
              baoxiuHouse: "",
              baoxiuContent: this.$refs.detail.value
            };
            console.log(msg);
            // 发送给后端存储
          } else {
            this.$dialog.alert({ title: "提示", message: "请填写报修内容！" });
          }
        }
      } else {
        this.$dialog.alert({ title: "提示", message: "请选择报修类型！" });
      }
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
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #eee;
}
.title span {
  position: absolute;
  top: 0;
  left: 0.2rem;
  font-size: 0.4rem;
}
.title i {
  font-style: normal;
  position: absolute;
  top: 0;
  right: 0.2rem;
  font-size: 0.3rem;
  font-weight: bold;
  color: #4bbcdc;
}
.baoxiumsg {
  width: 7.1rem;
  height: 1rem;
  text-align: left;
  background: #fff;
  font-size: 0.3rem;
  border-bottom: 1px solid #eee;
  line-height: 1rem;
  padding: 0 0.2rem;
}
.baoxiumsg span {
  float: right;
}
.baoxiumsg strong {
  float: right;
}
.baoxiucont {
  height: 4rem;
  width: 7.1rem;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  background: #fff;
  font-size: 0.3rem;
  line-height: 1rem;
  text-align: left;
}
textarea {
  width: 7.1rem;
  border: none;
  outline: none;
  font-size: 0.24rem;
  height: 2.6rem;
}
.baoxiupic {
  height: 4rem;
  width: 7.1rem;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  background: #fff;
  font-size: 0.3rem;
  line-height: 1rem;
  text-align: left;
}
.baoxiupic ul {
  display: flex;
}
.baoxiupic ul li:first-child {
  margin-left: 0;
}
.baoxiupic ul li {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.baoxiupic ul li img {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
}
.submit button {
  margin-top: 0.4rem;
  width: 6rem;
  height: 1rem;
  outline: none;
  border: none;
  border-radius: 0.1rem;
  background: #4bbcdc;
  color: #fff;
}
.typeChoose {
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  background: #fff;
}
.typeChooseTitle {
  width: 7.1rem;
  padding: 0 0.2rem;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: center;
  background: #fff;
  font-size: 0.3rem;
  position: relative;
}
.typeChooseTitle span {
  position: absolute;
  top: 0;
  left: 0.2rem;
  font-size: 0.3rem;
}
.typeChooseTitle i {
  font-style: normal;
  position: absolute;
  top: 0;
  right: 0.2rem;
  font-size: 0.3rem;
  color: #4bbcdc;
}
.typeChoose_content {
  height: 2.6rem;
  width: 7.1rem;
  padding: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.typeChoose_content .typeChoose_content_s {
  width: 3.4rem;
  height: 1rem;
  border: 1px solid #eee;
  font-size: 0.3rem;
  line-height: 1rem;
}
.houseChoose_content {
  height: 2.6rem;
  width: 7.1rem;
  padding: 0.2rem;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.houseChoose_content li {
  width: 100%;
  height: 1rem;
  border: 1px solid #eee;
  font-size: 0.3rem;
  line-height: 1rem;
  margin-top: 0.2rem;
}
.houseChoose_content li:first-child {
  margin-top: 0;
}
</style>