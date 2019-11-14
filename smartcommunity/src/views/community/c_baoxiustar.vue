<template>
  <ul id="todo">
    <li v-for="baoxiu of todolist" :key="baoxiu.baoxiuId" @click="goDetail(baoxiu.baoxiuId)">
      <div class="title">
        {{baoxiu.baoxiuType}}
        <span>{{baoxiu.baoxiuEndTime}}</span>
      </div>
      <div class="content">
        <img :src="baoxiu.baoxiuPic" alt />
        <div>{{baoxiu.baoxiuContent}}</div>
      </div>
      <div class="footer">
        <span>报修编号:{{baoxiu.baoxiuId}}</span>
        <button @click.stop="gostar(baoxiu.baoxiuId)">评价</button>
      </div>
    </li>
    <van-popup v-model="isTypeChoose" position="bottom" :style="{ height: '30%' }">
      <div class="typeChooseTitle">
        <strong>服务评价</strong>
        <span @click="chooseType">取消</span>
        <i @click="submit">确认</i>
      </div>
      <div>
        <div class="typeChoose_content">
          <span
            class="iconfont icon-xingji staroff"
            :class="{staron:star.value<=nowstarvalue}"
            v-for="star of starlist"
            :key="star.value"
            @click="selStar(star.value)"
          ></span>
        </div>
      </div>
    </van-popup>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      todolist: [],
      isTypeChoose: false,
      nowstar: "",
      nowstarvalue: 0,
      starlist: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 }
      ]
    };
  },
  mounted() {
    //   请求待处理的报修列表
    this.todolist = [
      {
        baoxiuType: "家庭报修",
        baoxiuContent:
          "洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。",
        baoxiuId: "11245445116",
        baoxiuEndTime: "2019/06/18 15:00",
        baoxiuPic:
          "http://img.mp.itc.cn/upload/20160915/8c5dd22ea21948e7b6af97c4de2273e4_th.png"
      },
      {
        baoxiuType: "小区报修",
        baoxiuContent:
          "洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。",
        baoxiuId: "11245445226",
        baoxiuEndTime: "2019/06/20 18:00",
        baoxiuPic:
          "http://img.mp.itc.cn/upload/20160915/8c5dd22ea21948e7b6af97c4de2273e4_th.png"
      }
    ];
  },
  methods: {
    goDetail(baoxiuId) {
      this.$router.push({
        path: "/c_baoxiudetail",
        query: { baoxiuid: baoxiuId }
      });
    },
    gostar(baoxiuid) {
      this.isTypeChoose = !this.isTypeChoose;
      this.nowstar = baoxiuid;
      this.nowstarvalue = 0;
    },
    selStar(value) {
      this.nowstarvalue = value;
    },
    submit() {
      if (this.nowstarvalue) {
        let msg = {
          baoxiuId: this.nowstar,
          baoxiuStar: this.nowstarvalue
        };
        this.$dialog
          .confirm({ message: "确认提交" })
          .then(() => {
            console.log(msg);
          })
          .catch(() => {});
      } else {
        this.$dialog.alert({ title: "提示", message: "请先评价！" });
      }
    },
    chooseType() {
      this.isTypeChoose = !this.isTypeChoose;
    }
  }
};
</script>
<style scoped>
#todo {
  background: #f8f8f8;
  width: 6.9rem;
  padding: 0.3rem;
}
#todo li {
  height: 3rem;
  width: 6.5rem;
  padding: 0.2rem;
  background: #fff;
  text-align: left;
  margin-top: 0.3rem;
}
#todo li:first-child {
  margin-top: 0;
}
#todo li .title {
  width: 6.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.3rem;
  font-weight: bold;
}
#todo li .title span {
  float: right;
  font-weight: normal;
  color: #999;
}
#todo li .content {
  padding: 0.2rem 0;
  width: 6.5rem;
  height: 1.5rem;
  display: flex;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
#todo li .content img {
  display: block;
  height: 1.5rem;
  width: 1.5rem;
}
#todo li .content div {
  text-indent: 0.4rem;
  width: 5rem;
  height: 1.3rem;
  padding: 0.1rem;
  font-size: 0.26rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
#todo li .footer {
  width: 100%;
  margin-top: 0.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
#todo li .footer button {
  float: right;
  margin-top: 0.1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background: gold;
  border: none;
  outline: none;
  border-radius: 0.05rem;
  color: #fff;
  font-weight: bold;
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
  justify-content: center;
  align-items: center;
}
.typeChoose_content .typeChoose_content_s {
  width: 3.4rem;
  height: 1rem;
  border: 1px solid #eee;
  font-size: 0.3rem;
  line-height: 1rem;
}
.staron {
  color: gold !important;
}
.staroff {
  color: #ccc;
  font-size: 0.6rem;
  padding: 0 0.2rem;
  margin-bottom: 1rem;
}
</style>