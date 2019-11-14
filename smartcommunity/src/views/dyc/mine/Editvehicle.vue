<template>
  <div class="main">
    <Title3 :title="'编辑车辆'"></Title3>
    <ul class="content">
      <li :key="message.type" v-for="message of messages">
        <span class="type">{{message.type}}</span>

        <el-button v-if="message.type == '车辆类型'" @click="drawer = true" type="primary">
          <input class="text" @focus="focus" @blur="
        blur" v-model="cartype" />
        </el-button>

        <div v-else>
          <input class="text" @focus="focus" @blur="
        blur" v-model="message.text" />
        </div>
      </li>
      <button class="btn" @click="submit">确定</button>
    </ul>
    <el-drawer title="汽车类型" :visible.sync="drawer" :direction="direction">
      <p
        @click="backgd(car,index)"
        :class="{blue:(selectIndex == index)}"
        :key="index"
        v-for="(car,index) of cars"
      >{{car.type}}</p>
    </el-drawer>
  </div>
</template>
<script>
import Title3 from "@/components/dyc/Title3";
export default {
  name: "Editvehicle",
  data() {
    return {
      messages: [],
      cartype: "",
      selectIndex: null,
      carindex: null,
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
    backgd(car, index) {
      this.selectIndex = index;
      this.cartype = car.type;
      this.messages[1].text = this.cartype;
    },
    focus() {
      event.target.style.color = "#000";
    },
    blur() {
      event.target.style.color = "#ccc";
    },
    submit() {
      // console.log(this.messages);
    }
  },
  created() {
    this.messages = this.$route.query.messages;
  },
  mounted() {
    this.cartype = this.messages[1].text;
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].type == this.cartype) {
        this.index = i;
        this.selectIndex = this.index;
      }
    }
    // console.log(this.index);
    // console.log(this.$route.query.messages);
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
  color: #ccc;
}
ul button.btn {
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
  float: right;
  background: transparent;
  border: none;
  padding: 0;
}
</style>