<template>
  <div id="c_jiaofei">
    <van-sticky>
      <div class="title">
        <strong>生活缴费</strong>
        <router-link to="/community">
          <span class="iconfont icon-houtui"></span>
        </router-link>
        <router-link to="/c_jiaofeijilu">
          <i>缴费记录</i>
        </router-link>
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
          {{item.payEndTime}}
          <button @click="goDetail(item.payCode)">查看详情</button>
        </span>
        <label class="sel">
          <input v-model="selItem" type="checkbox" v-bind:value="item.payCode" />
        </label>
      </li>
    </ul>
    <div class="pay">
      <p>总计：{{count}} 项</p>
      <button @click="goPay">去支付</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      jiaofeilist: [],
      selItem: []
    };
  },
  methods: {
    goDetail(jiaofeiId) {
      this.$router.push({
        path: "/c_jiaofeidetail",
        query: { jiaofeiid: jiaofeiId }
      });
    },
    goPay() {
      if (this.selItem[0]) {
        // let msg = this.selItem.join("&");
        // console.log(msg);
        // this.$router.push({
        //   path: "/c_jiaofeizhangdan",
        //   query: { jiaofeiIds: msg }
        // });
        let str='payCodes=';
        let newstr=this.selItem.join(',');
        str+=newstr;
        console.log(str);
        axios.post('/community/lifePayCost',str).then(()=>{
          console.log('支付成功')
          history.go(0);
        })
      } else {
        this.$dialog.alert({
          title: "提示",
          message: "请选择支付项！"
        });
      }
    }
  },
  mounted() {
    // this.jiaofeilist = [
    //   {
    //     jiaofeiId: "20191029001",
    //     jiaofeiType: "水费",
    //     jiaofeiPrice: "30.00",
    //     jiaofeiState: "未缴费",
    //     jiaofeiStartTime: "2016/2/1"
    //   },
    //   {
    //     jiaofeiId: "20191029002",
    //     jiaofeiType: "电费",
    //     jiaofeiPrice: "310.54",
    //     jiaofeiState: "未缴费",
    //     jiaofeiStartTime: "2016/2/3"
    //   }
    // ];
    let uid=localStorage.getItem('uid');
    axios.post("community/lifePayIndex", `uid=${uid}`).then(result => {
      console.log(result.data.data);
      this.jiaofeilist=result.data.data
    });
  },
  computed: {
    count() {
      return this.selItem.length;
    }
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
  position: relative;
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
.sel {
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  /* background: gold; */
  position: absolute;
  top: 1rem;
  right: 0.4rem;
}
.sel input {
  display: block;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 1rem;
}
.pay {
  width: 6.7rem;
  padding: 0 0.4rem;
  height: 1rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
  font-weight: bold;
}
.pay button {
  margin-top: 0.1rem;
  height: 0.8rem;
  border: none;
  outline: none;
  background: #4bbcdc;
  color: #fff;
  border-radius: 0.1rem;
}
</style>