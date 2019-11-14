<template>
  <div id="c_detail">
    <van-sticky>
      <div class="title">
        <strong>报修详情</strong>
        <span class="iconfont icon-houtui" @click="back"></span>
      </div>
    </van-sticky>

    <div style="background:#f8f8f8">
      <ul class="content" v-if="baoxiudetail">
        <li>
          报修编号
          <span>{{baoxiudetail.baoxiuId}}</span>
        </li>
        <li>
          报修状态
          <span>{{baoxiudetail.baoxiuState}}</span>
        </li>
        <li>
          报修类型
          <span>{{baoxiudetail.baoxiuType}}</span>
        </li>
        <li>
          上报时间
          <span>{{baoxiudetail.baoxiuStartTime}}</span>
        </li>
        <li>
          报修房屋
          <span>{{baoxiudetail.baoxiuHouse}}</span>
        </li>
        <li>
          上报内容
          <p>{{baoxiudetail.baoxiuContent}}</p>
        </li>
        <li>
          图片描述
          <br />
          <img :src="baoxiudetail.baoxiuPic" alt @click="preview" />
          <img :src="baoxiudetail.baoxiuPic" alt />
          <img :src="baoxiudetail.baoxiuPic" alt />
        </li>
        <li v-if="baoxiudetail.baoxiuEndTime">
          完成时间
          <span>{{baoxiudetail.baoxiuEndTime}}</span>
        </li>
        <li v-if="baoxiudetail.baoxiuStar">
          <i style="float:left;font-style:normal">服务评价</i>
          <div class="qstar">
            <span
              class="iconfont icon-xingji staroff"
              v-for="star of starlist"
              :key="star.value"
              :class="{staron:star.value<=baoxiudetail.baoxiuStar}"
            ></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baoxiuid: 0,
      baoxiudetail: {},
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
    this.baoxiuid = this.$route.query.baoxiuid;
    // 发送请求 请求详细信息
    this.baoxiudetail = {
      baoxiuId: this.baoxiuid,
      baoxiuState: "已完结",
      baoxiuType: "家庭报修",
      baoxiuStartTime: "2019/06/18 13:00",
      baoxiuHouse: "1号楼1单元101",
      baoxiuContent:
        "洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。",
      baoxiuPic:
        "http://img.mp.itc.cn/upload/20160915/8c5dd22ea21948e7b6af97c4de2273e4_th.png",
      baoxiuEndTime: "2019/06/18 19:00",
      baoxiuStar: 3
    };
  },
  methods: {
    back() {
      history.back(-1);
    },
    preview() {
      
    }
  }
};
</script>
<style scoped>
#c_detail {
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
.content {
  width: 7.1rem;
  padding: 0.2rem;
  background: transparent;
}

.content li:nth-child(6) {
  padding: 0.2rem 0;
  line-height: 0.4rem;
  height: auto;
}
.content li:nth-child(7) {
  padding: 0.2rem 0;
  line-height: 0.4rem;
  height: auto;
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
.content li img {
  display: block;
  float: left;
  height: 2rem;
  width: 2rem;
  margin-left: 0.2rem;
  margin-top: 0.3rem;
}
.content li p {
  text-indent: 0.6rem;
  color: #000;
  width: 6.1rem;
  padding: 0 0.5rem;
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
</style>