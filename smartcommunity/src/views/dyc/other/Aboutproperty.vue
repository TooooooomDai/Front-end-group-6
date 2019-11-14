<template>
  <div class="main">
    <Title3 :title="'关于物业'"></Title3>
    <div class="content">
      <h4>万科物业</h4>
      <p>万科物业秉承“全心全意全为您”的服务宗旨，坚持“服务至诚、精益求精、管理规范、进取创新”质量方针，始终以客户需求为导向，致力为客户提供全面优质物业服务的同时不断创新物业服务模式。近年来万科物业以“懂生活、识品质、汇聚幸福”为核心理念，在“安全、环境、设备设施管理”等传统物业服务工作基础上，又推出“文化、健康、教娱、居家”等诸多创新服务内容。深耕客户资源经营，通过会所、租售中心、社区食堂、长者服务中心、四点半学校等社区配套经营，为不</p>
      <div class="images"></div>
      <div class="bottom">
        <p>建筑年代：2012年12月1号<span style="display:block;width:114px;float:right">绿化率：40%</span></p>
        <p>占地面积：9000m<sup>2</sup><span style="display:block;width:114px;float:right">建筑面积：3000m<sup>2</sup></span></p>
        <p>负责人：张勇<span style="display:block;width:114px;float:right">联系电话：0571-8899</span></p>
        <p>详细地址：杭州市萧山区建设一路101号</p>
      </div>
    </div>
  </div>
</template>
<script>
import Title3 from "@/components/dyc/Title3";

export default {
  name: "Aboutproperty",
  data() {
    return {
      flag: true
    };
  },
  methods: {
    changeflag() {
      this.flag = !this.flag;
    }
  },
  mounted() {},
  components: {
    Title3
  }
};
</script>
<style scoped>
.main {
  height: 100%;
  background: #eee;
}
h4 {
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
}
p {
  margin: 0;
  padding: 10px;
  font-size: 14px;
  text-indent: 28px;
  text-align: left;
}
.content {
  position: absolute;
  top: 99px;
  width: 90%;
  padding: 5%;
  height: calc(95% - 99px);
  background: #fff;
}
.bottom {
  margin-top: 20px;
}
.bottom p {
  text-indent: 0;
  font-size: 12px;
}
</style>