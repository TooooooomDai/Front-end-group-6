<template>
  <div class="main">
    <Title5 :title="'车辆信息'" :messages="typelist" :index="index" :cid="cid"></Title5>
    <ul class="content">
      <li>
        <span class="type">车辆号码</span>
        <span class="text">{{typelist.carNum}}</span>
      </li>
      <li>
        <span class="type">车辆类型</span>
        <span class="text">{{typelist.carType}}</span>
      </li>
      <li>
        <span class="type">车辆颜色</span>
        <span class="text">{{typelist.carColor}}</span>
      </li>
      <li>
        <span class="type">车架号</span>
        <span class="text">{{typelist.carFarme}}</span>
      </li>
      <li>
        <span class="type">车辆编号</span>
        <span class="text">{{typelist.cDesc1}}</span>
      </li>
      <li :key="other.type" v-for="other of others">
        <span class="type">{{other.type}}</span>
        <img :src='other.text' alt="">
      </li>
      <button @click="remove" style="color:black">删除车辆</button>
    </ul>
  </div>
</template>
<script>
import Title5 from "@/components/dyc/Title5";
import axios from "axios";

export default {
  name: "Rmation",
  data() {
    return {
      typelist: {},
      index:null,
      cid:null,
      uid:null,
      others: [
        { type: "车辆照片", text: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2780356404,208821872&fm=11&gp=0.jpg" },
        { type: "行驶证", text: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1774424085,593056701&fm=26&gp=0.jpg" },
        { type: "驾驶证", text: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1096658415,619421385&fm=26&gp=0.jpg" }
      ]
    };
  },
  methods: {
    remove() {
      axios.get(`car/delCar/${this.cid}`).then((result)=>{
        console.log(result);
      })
    }
  },
  async mounted() {
    this.index = this.$route.query.num;
    this.cid = this.$route.query.plate.cid;
    this.uid = localStorage.getItem('uid')
    console.log(this.cid)
    await axios.get(`car/selectById/${this.uid}`).then(result => {
      this.typelist = result.data.data[this.index];
    });

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
  top: calc(1rem + 20px);
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
img{
  text-align: center;
  width: 2.5rem;
  height: 2.5rem
}
</style>