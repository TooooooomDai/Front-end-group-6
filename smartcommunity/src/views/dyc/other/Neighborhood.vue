<template>
  <div class="main">
    <Title3 :title="'关于小区'"></Title3>
    <div class="content">
      <h4>广元公寓</h4>
      <p>小区户型本小区80多栋楼，多为四层，五层，六层，极少七层，主要面积有49平58平73平，楼间距大，采光好生活配套小区北邻500米就是东湖公园东湖银座，小区西北方向1000米就是第 一人民医院教育情况本小区内有迎春中学迎春小学及迎春幼儿园，迎春中学师资力量雄厚，凭房产证可入学，迎春中学新建教学楼。小区不足</p>
      <div class="images"></div>
      <div class="bottom">
        <p>
          建筑年代：2012年12月1号
          <span style="display:block;width:114px;float:right">绿化率：40%</span>
        </p>
        <p>
          占地面积：9000m
          <sup>2</sup>
          <span style="display:block;width:114px;float:right">
            建筑面积：3000m
            <sup>2</sup>
          </span>
        </p>
        <p>
          负责人：张勇
          <span style="display:block;width:114px;float:right">联系电话：0571-8899</span>
        </p>
        <p>详细地址：杭州市萧山区建设一路101号</p>
      </div>
    </div>
  </div>
</template>
<script>
import Title3 from "@/components/dyc/Title3";

export default {
  name: "Neighborhood",
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