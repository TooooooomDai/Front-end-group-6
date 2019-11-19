<template>
  <div class="bottom">
    <ul>
      <li :key="tab.icon" v-for="tab of tab_icon">
        <div @click="changepath(tab.text)">
          <span :class="icontext(tab.text)? 'rectangle':'circle'">
            <span style="font-size:22px" class="iconfont icon-shequ" v-if="tab.text == '社区'"></span>
            <span style="font-size:22px" class="iconfont icon-faxian" v-else-if="tab.text == '发现'"></span>
            <span class="iconfont icon-yuechi" v-else-if="tab.text == '开门'"></span>
            <span class="iconfont icon-clover" v-else-if="tab.text == '邻里'"></span>
            <span class="iconfont icon-zhanghu" v-else-if="tab.text == '我的'"></span>
          </span>
          <p v-if="icontext(tab.text)">{{tab.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  data() {
    return {
      tab_icon: [
        { icon: 111, text: "社区" },
        { icon: 222, text: "发现" },
        { icon: 333, text: "开门" },
        { icon: 444, text: "邻里" },
        { icon: 555, text: "我的" }
      ],
    };
  },
  methods: {
    icontext(text) {
      if (text == "开门") {
        return false;
      } else {
        return true;
      }
    },
    changepath(text) {
      let path='';
      switch (text) {
        case "社区":
          path = "/community";
          break;
        case "发现":
          path = "/find";
          break;
        case "开门":
          path = "/open";
          break;
        case "邻里":
          path = "/neighborindex";
          break;
        case "我的":
          path = "/mine";
          break;
      }
      this.$router.push({ path: path });
    },
  },
  mounted() {}
};
</script>
<style scoped>
.iconfont {
  font-size: 20px;
  color: black;
}
.bottom {
  width: 100%;
  height: 69px;
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 99999;
  border-top: 2px solid #999;
  /* box-shadow: 0 -2px 1px #999; */
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
li .rectangle {
  display: block;
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
li .circle {
  display: block;
  width: 50px;
  height: 50px;
  position: relative;
  top: -10px;
  background: #00bbff;
  border-radius: 25px;
  line-height: 50px;
  border-top: 2px solid #999;
  /* box-shadow: 0 -3px 1px #999; */
}
li .circle .iconfont {
  font-size: 30px;
  color: white;
}
li p {
  margin-top: 0;
}
</style>
