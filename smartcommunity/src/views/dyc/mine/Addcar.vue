<template>
  <div class="main">
    <Title3 :title="'添加车辆'"></Title3>
    <ul class="content">
      <li :key="message.type" v-for="message of messages">
        <span class="type">{{message.type}}</span>
        <el-button v-if="message.type == '车辆类型'" @click="drawer = true" type="primary">
          <input class="text" :placeholder="message.text" v-model="carType" />
        </el-button>
        <div v-else-if="message.type == '车辆号码'">
          <input class="text" :placeholder="message.text" v-model="
          carNum" />
        </div>
        <div v-else-if="message.type == '车辆颜色'">
          <input class="text" :placeholder="message.text" v-model="
          carColor" />
        </div>
        <div v-else-if="message.type == '车架号'">
          <input class="text" :placeholder="message.text" v-model="
          carFarme" />
        </div>
        <div v-else>
          <input class="text" :placeholder="message.text"/>
        </div>
      </li>
      <el-drawer title="汽车类型" :visible.sync="drawer" :direction="direction">
        <p
          @click="backgd(car)"
          :class="{blue:(selectItem == car)}"
          :key="index"
          v-for="(car,index) of cars"
        >{{car.type}}</p>
      </el-drawer>
      <button class="btn" @click="add">确定</button>
    </ul>
  </div>
</template>
<script>
import Title3 from "@/components/dyc/Title3";
import axios from "axios";
export default {
  name: "Addcar",
  data() {
    return {
      messages: [
        { type: "车辆号码", text: "请输入车辆号码" },
        { type: "车辆类型", text: "请输入车辆类型" },
        { type: "车辆颜色", text: "请输入车辆颜色" },
        { type: "车架号", text: "请输入车架号" },
        { type: "车辆编号", text: "请输入车牌号" }
      ],
      uid: null,
      carNum: "",
      carType: "",
      carColor: "",
      carFarme: "",
      selectItem: "",
      cars: [
        { type: "轿车" },
        { type: "越野车" },
        { type: "大卡车" },
        { type: "翻斗车" }
      ],
      drawer: false,
      direction: "btt"
    };
  },
  methods: {
    add() {
      this.uid = localStorage.getItem('uid');
      axios
        .get(
          `car/insertSelective?uid=${this.uid}&carNum=${this.carNum}&carType=${this.carType}&carColor=${this.carColor}&carFarme=${this.carFarme}`
        )
        .then(result => {
          console.log(result.data.data);
          // this.messages = result.data.data;
        });
    },
    backgd(car) {
      this.selectItem = car;
      this.carType = car.type;
      // console.log(car.type);
      console.log(this.carType);
    },
    focus(ev) {
      console.log(ev.value);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  components: {
    Title3
  }
};
</script>
<style scoped>
.blue {
  background: #00bfff;
}
.main {
  background: #eee;
  height: 100%;
}
ul {
  background: #fff;
  position: absolute;
  top: 99px;
  width: 100%;
}
li {
  padding: 10px 20px;
  width: calc(100% - 40px);
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
li .type {
  float: left;
}
li input {
  border: none;
  text-align: right;
  outline: medium;
}
li .text {
  float: right;
  /* color: #ccc; */
}
ul .btn {
  display: inline-block;
  width: 80%;
  height: 40px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 50px auto;
  background: #fcfcfc;
  border: 1px solid black;
  border-radius: 8px;
}
.el-button {
  background: transparent;
  border: none;
  padding: 0;
  float: right;
}
header {
  margin-bottom: 0;
}
.el-drawer__close-btn {
  display: none;
}
</style>