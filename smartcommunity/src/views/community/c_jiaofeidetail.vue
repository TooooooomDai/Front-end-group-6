<template>
  <div id="c_jiaofeidetail">
    <van-sticky>
      <div class="title">
        <strong>缴费详情</strong>
          <span class="iconfont icon-houtui" @click="back"></span>
      </div>
    </van-sticky>
    <ul class="content" v-if="jiaofeidetail">
      <li>
        缴费房屋
        <span>{{jiaofeidetail.houseNum}}</span>
      </li>
      <li>
        费用类型
        <span>{{jiaofeidetail.payType}}</span>
      </li>
      <li>
        账单编号
        <span>{{jiaofeidetail.payCode}}</span>
      </li>
      <li>
        账单状态
        <span>{{jiaofeidetail.payStatus}}</span>
      </li>
      <li>
        发起时间
        <span>{{jiaofeidetail.payTime}}</span>
      </li>
      <li>
        金额
        <span>{{jiaofeidetail.payPrice}} 元</span>
      </li>

    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      jiaofeiId: "",
      jiaofeidetail: {},
      isTypeChoose: false
    };
  },
  methods: {
    back(){
      history.back(-1);
    }

  },
  mounted() {
    this.jiaofeiId = this.$route.query.jiaofeiid;
    console.log(this.jiaofeiId)
    // this.jiaofeidetail = {
    //   jiaofeiId: this.jiaofeiId,
    //   jiaofeiHouse: "1号楼1单元101",
    //   jiaofeiType: "电费",
    //   jiaofeiPrice: "30.00",
    //   jiaofeiState: "已缴费",
    //   jiaofeiStartTime: "2016/2/1"
    // };
    axios.post('community/lifePayDetail',`payCode=${this.jiaofeiId}`).then((result)=>{
      console.log(result.data.data)
      this.jiaofeidetail=result.data.data
    })
  },
  components: {}
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
.content {
  width: 7.1rem;
  padding: 0.2rem;
  background: transparent;
}
.content li {
  width: 7.1rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.3rem;
  text-align: left;
  text-indent: 0.2rem;
  color: #aaa;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid #eee;
}

.content li span {
  color: #000;
  float: right;
  margin-right: 0.2rem;
}
.content li .staron {
  color: gold !important;
}
.content li .staroff {
  margin-right: 0;
  color: #ccc;
  float: left;
}
.qstar {
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