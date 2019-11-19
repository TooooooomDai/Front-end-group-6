<template>
  <div class="main">
    <Title5 :title="'车辆信息'" :messages="messages"></Title5>
    <ul class="content">
      <li :key="message.type" v-for="message of messages">
        <span class="type">{{message.type}}</span>
        <span class="text">{{message.text}}</span>
      </li>
      <li :key="other.type" v-for="other of others">
        <span class="type">{{other.type}}</span>
        <span class="text">{{other.text}}</span>
      </li>
      <button>删除车辆</button>
    </ul>
  </div>
</template>
<script>
import Title5 from "@/components/dyc/Title5";
export default {
  name: "Rmation",
  data() {
    return {
      messages: [
        { type: "车辆号码", text: "浙A78784" },
        { type: "车辆类型", text: "轿车" },
        { type: "车辆颜色", text: "蓝色" },
        { type: "车架号", text: "暂无" },
        { type: "车辆编号", text: "暂无" }
      ],
      others: [
        { type: "车辆照片", text: "" },
        { type: "行驶证", text: "" },
        { type: "驾驶证", text: "" }
      ]
    };
  },
  mounted() {
    // console.log(this.$route.query.plate);
    // console.log(1);
  },
  components: {
    Title5
  }
};
</script>
<style scoped>
button {
  display: inline-block;
  width: 80%;
  height: 40px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 50px auto;
  background: #dc143c;
  border: 1px solid black;
  border-radius: 8px;
}
.main {
  height: 100%;
  background: #ccc;
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
  border-bottom: 2px solid #ccc;
  overflow: hidden;
}
li .type {
  float: left;
}
li .text {
  float: right;
  color: #ccc;
}
</style>