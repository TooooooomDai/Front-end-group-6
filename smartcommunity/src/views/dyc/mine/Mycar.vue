<template>
  <div class="main">
    <Title4 :title="'我的车辆'"></Title4>
    <div v-if="flag">
      <ul class="content">
        <li style="overflow:hidden" :key="index" v-for="(message,index) of carList">
          <span class="left">
            <span class="owner">{{username}}</span>
            <span class="color">{{message.carColor}}</span>
            <span class="plate">{{message.carNum}}</span>
          </span>
          <span class="right">
            <router-link :to="{ path: '/mine/mycar/rmation', query: { plate: carList[index],num:index}}">
              <span class="arrow" style="font-size:24px;color:#666">&gt;</span>
            </router-link>
          </span>
        </li>
      </ul>
    </div>
    <div class="fangkuai" v-else>
      <div></div>
      <p>您还未添加车辆</p>
    </div>
  </div>
</template>
<script>
import Title4 from "@/components/dyc/Title4";
import axios from "axios";
export default {
  name: "Mycar",
  data() {
    return {
      carList: [],
      detailList: [],
      flag: true,
      username: "",
      uid:null
    };
  },
  methods: {},
  async mounted() {
    this.uid = localStorage.getItem('uid')
    this.username = this.$route.query.name;
    await axios.get(`car/selectMyCar/${this.uid}`).then(result => {
      console.log(result.data.data);
      this.carList = result.data.data;
    });
    if (this.carList.length != 0) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  components: {
    Title4
  }
};
</script>
<style scoped>
.main {
  height: 100%;
  background: #eee;
}
.fangkuai {
  width: 100%;
  position: absolute;
  top: 99px;
  overflow: hidden;
}
.fangkuai div {
  width: 200px;
  height: 200px;
  background: #bbb;
  margin: 50px auto;
  border-radius: 20px;
}
ul {
  width: 100%;
  position: absolute;
  top: 99px;
}
li {
  background: #fff;
  width: calc(100% - 40px);
  padding: 10px 20px;
  overflow: hidden;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
}
li span {
  display: inline-block;
}
li .left {
  float: left;
}
li .left .owner {
  padding: 5px 10px;
  background: #eee;
  margin-right: 10px;
}
li .left .color {
  margin-right: 5px;
}
li .right {
  float: right;
}
</style>