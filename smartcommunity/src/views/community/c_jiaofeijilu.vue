<template>
  <div id="c_jiaofei">
    <van-sticky>
      <div class="title">
        <strong>缴费记录</strong>
        <router-link to="/c_jiaofei">
          <span class="iconfont icon-houtui"></span>
        </router-link>
      </div>
      <div class="tab">
        <!-- <strong ref="date" @click="showDate">请选择日期</strong> -->
        <van-dropdown-menu style="height:0.6rem;width:5rem">
          <van-dropdown-item v-model="value1" :options="option1" active-color="#ee0a24" />
          <van-dropdown-item v-model="value2" :options="option2" active-color="#ee0a24" />
        </van-dropdown-menu>
        <button @click="search">查询</button>
      </div>
    </van-sticky>
    <ul class="myMsg">
      <li v-for="item of jiaofeilist" :key="item.payCode">
        <strong>{{item.payType}}</strong>
        <p>
          <b>账单编号：{{item.payCode}}</b>
          <br />
          <b>订单状态：{{item.payStatus}}</b>
          <br />
          <b>金额：{{item.payPrice}} 元</b>
          <br />
        </p>
        <span>
          <i class="iconfont icon-shijian"></i>
          {{item.payTime}}
          <button @click="goDetail(item.payCode)">查看详情</button>
        </span>
      </li>
    </ul>
    <!-- <van-popup v-model="showDateblock" position="bottom" :style="{ height: '30%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :formatter="formatter"
        @cancel="showDate"
        @confirm="getD"
      />
    </van-popup>-->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      jiaofeilist: [],
      showDateblock: false,
      currentDate: new Date(),
      value1: "",
      value2: "",
      option1: [
        { text: "请选择日期", value: "" },
        { text: "2019/11", value: "" },
        { text: "2019/10", value: "2019-10-01" },
        { text: "2019/9", value: "2019-09-30" },
        { text: "2019/8", value: "" },
        { text: "2019/7", value: "" },
        { text: "2019/6", value: "" },
        { text: "2019/5", value: "" },
        { text: "2019/4", value: "" },
        { text: "2019/3", value: "" },
        { text: "2019/2", value: "" },
        { text: "2019/1", value: "" },
        { text: "2018/12", value: "" }
      ],
      option2: [
        { text: "请选择类型", value: "" },
        { text: "水费", value: "水费" },
        { text: "电费", value: "电费" },
        { text: "燃气费", value: "燃气费" },
        { text: "暖气费", value: "暖气费" },
        { text: "其他", value: "其他" }
      ]
    };
  },
  methods: {
    search() {
      let msg = {
        lifeDesc1: this.value1,
        payType: this.value2
      };
      axios.post("community/lifePayList1", msg).then(result => {
        console.log(result.data.data);
        this.jiaofeilist=result.data.data
      });
    },
    goDetail(jiaofeiId) {
      this.$router.push({
        path: "/c_jiaofeidetail",
        query: { jiaofeiid: jiaofeiId }
      });
    },
    showDate() {
      this.showDateblock = !this.showDateblock;
    },
    getD() {
      this.$refs.date.innerHTML =
        arguments[0].getFullYear() +
        "年" +
        (arguments[0].getMonth() + 1) +
        "月";
      console.log(arguments[0].getMonth() + 1, arguments[0].getFullYear());
      this.showDateblock = !this.showDateblock;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    }
  },
  mounted() {
    // this.jiaofeilist = [
    //   {
    //     jiaofeiId: "20191029003",
    //     jiaofeiType: "水费",
    //     jiaofeiPrice: "30.00",
    //     jiaofeiState: "已缴费",
    //     jiaofeiStartTime: "2016/1/1"
    //   },
    //   {
    //     jiaofeiId: "20191029004",
    //     jiaofeiType: "电费",
    //     jiaofeiPrice: "310.54",
    //     jiaofeiState: "已缴费",
    //     jiaofeiStartTime: "2015/12/23"
    //   }
    // ];
    let uid=localStorage.getItem('uid');
    axios.post("community/lifePayListAll",`uid=${uid}`).then(result => {
      console.log(result.data.data);
      this.jiaofeilist=result.data.data
    });
  }
};
</script>
<style scoped>
#c_jiaofei {
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
.myMsg {
  width: 7.1rem;
  padding: 0.2rem;
  background: #f8f8f8;
}
.myMsg li {
  width: 7.1rem;
  padding: 0.2rem 0;
  text-align: left;
  background: #fff;
  margin-top: 0.2rem;
}
.myMsg :first-child {
  margin-top: 0;
}
.myMsg li strong {
  font-size: 0.36rem;
  margin-left: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.myMsg li p {
  margin: 0.2rem 0;
  padding: 0 0.2rem 0.4rem;
  border-bottom: 1px solid #eee;
  font-size: 0.3rem;
  line-height: 0.4rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.myMsg li p b {
  font-size: 0.3rem;
  font-weight: normal;
  line-height: 0.5rem;
  margin-bottom: 0.2rem;
}
.myMsg li span {
  display: block;
  padding: 0.1rem 0.2rem;
  font-size: 0.2rem;
  position: relative;
}
.myMsg li span i {
  font-size: 0.2rem;
}
.myMsg li span button {
  height: 0.4rem;
  position: absolute;
  top: 0.1rem;
  right: 0.2rem;
  font-size: 0.2rem;
  border: none;
  outline: none;
  background: #fff;
  font-weight: bold;
  color: #4bbcdc;
}
.tab {
  width: 7.1rem;
  padding: 0 0.2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
  justify-content: space-evenly;
  background: #fff;
  font-size: 0.3rem;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #eee;
}
.tab strong {
  display: block;
  height: 0.4rem;
  color: #000;
  font-weight: normal;
  font-size: 0.3rem;
  line-height: 0.4rem;
  margin-top: 0.1rem;
  background: #fff;
}
.tab button {
  background: #4bbcdc;
  color: #fff;
  border: none;
  outline: none;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 0.1rem;
  margin-top: 0.1rem;
}
.tab .router-link-exact-active {
  color: #4bbcdc;
}
</style>