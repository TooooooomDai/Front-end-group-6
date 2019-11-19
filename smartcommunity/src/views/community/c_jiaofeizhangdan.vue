<template>
  <div id="c_jiaofeidetail">
    <van-sticky>
      <div class="title">
        <strong>我的账单</strong>
        <span class="iconfont icon-houtui" @click="back"></span>
      </div>
    </van-sticky>
    <ul class="list">
      <li v-for="item of zhangdanlist" :key="item.jiaofeiId">
        <div class="top">
          {{item.jiaofeiType}}
          <span>{{item.jiaofeiPrice}} 元</span>
        </div>
        <div class="bottom">
          {{item.jiaofeiId}}
          <span>{{item.jiaofeiStartTime}}</span>
        </div>
      </li>
    </ul>
    <div class="submit">
      <button is-link @click="pay">立即缴费</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      zhangdanlist: [
        {
          jiaofeiId: "20191029001",
          jiaofeiType: "水费",
          jiaofeiPrice: "30.00",
          jiaofeiStartTime: "2016/2/1"
        },
        {
          jiaofeiId: "20191029002",
          jiaofeiType: "电费",
          jiaofeiPrice: "310.54",
          jiaofeiStartTime: "2016/2/3"
        }
      ]
    };
  },
  methods: {
    back() {
      history.back(-1);
    },
    pay() {
      this.$dialog.confirm({ message: "确认支付" }).then(() => {
        console.log("支付成功");
      });
    }
  }
};
</script>
<style scoped>
#c_jiaofeidetail {
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
.list {
  width: 7.1rem;
  padding: 0.2rem;
}
.list li:first-child {
  margin-top: 0;
}
.list li {
  width: 6.7rem;
  padding: 0 0.2rem;
  background: #fff;
  margin-top: 0.2rem;
  text-align: left;
  font-size: 0.3rem;
  font-weight: bold;
  line-height: 0.5rem;
}
.list li span {
  float: right;
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
</style>