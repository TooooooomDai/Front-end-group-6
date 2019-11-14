<template>
  <div class="main">
    <Title3 :title="'关于我们'"></Title3>
    <div class="content">
      <h4>浙江微风智能科技有限公司</h4>
      <p>浙江微风智能科技有限公司是一家传统与现代化结合的智能化综合性高科技公司，是全国领先的以社区、乡村为智能化核心的智慧城市解决方案的专业提供商和服务商。</p>
      <p>公司以基于大数据分析和人工智能的基础，自主研发、搭建专业的配套服务体系平台，并安排专业设计团队进行项目深化设计后由公司旗下施工团队进行项目落地，保障项目实施的顺利进行。在不断服务与自我革新的工程中，公司这套从前端设计到落地施工的体系已日趋成熟，并获得不错的成效。</p>
      <p>微风智能深耕智慧城市建设下的智慧社区、智慧乡村建设项目，着眼全国全国智慧城市建设市场，打造的智慧城市方案汇聚平台成为行业性标杆，专业为政府和开发商提供一站式智能化升级服务。</p>
      <div class="bottom">
        <p>公司地址：杭州市萧山区建设一路101号</p>
        <p>联系人：张勇</p>
        <p>联系方式：0571-88992</p>
      </div>
    </div>
  </div>
</template>
<script>
import Title3 from "@/components/dyc/Title3";

export default {
  name: "Aboutus",
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
.bottom p{
    text-indent: 0;
    font-size: 12px;
}
</style>