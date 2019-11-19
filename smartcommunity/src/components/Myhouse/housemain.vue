<template>
  <div class="housemain">
    <ul>
      <li :key="index" v-for="(house,index) of houseList()">
        <article>
          <div>
            <span>{{house.houseTung}}{{house.houseUnit}}{{house.houseNum}}</span>
            <span>{{house.indentityType}}</span>
          </div>

          <div @click="housejump(house.state,house.indentityType,house.uid)" class="state">
            <span>{{house.state}}</span>
            <span>></span>
          </div>
        </article>
        <p v-if="house.state=='未通过'">{{house.reason}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    housejump(state, idtype,uid) {  //不同房产信息的跳转(审核状态  ， 身份类型用于渲染结构)
      let ids;
      switch (idtype) {    
        case "业主":
          ids = "yz";
          break;
        case "租客":
          ids = "zk";
          break;
        case "家属":
          ids = "js";
          break;
      }
      switch (state) {
        case "通过":
          this.$router.push({
            path: "/Myhouse/Edithouse",          
            query: { state: "tg", idtype: ids ,uid}
          });
          break;
        // case '未完善' : this.$router.push({path:'/Myhouse/Edithouse',query:{state:'wws',idtype:ids}});
        // break;
        case "审核中":
          this.$router.push({
            path: "/Myhouse/Seehouse",
            query: { state: "shz", idtype: ids ,uid}
          });
          break;
        case "未通过":
          this.$router.push({
            path: "/Myhouse/Edithouse",
            query: { state: "wtg", idtype: ids ,uid}
          });
          break;
      }
    },
    houseList() {
      return this.$store.state.myhouse.houseList;
    }
  },
  mounted() {
    this.$store.dispatch('myhouse/init_housemain',this.$route.query)
  },
};
</script>
<style scoped>
.housemain{
  height: calc(100% - 1rem);
}
ul {
  list-style: none;

  background: #eee;
  height: 100%;
}
ul li {
  border-bottom: 1px solid #eee;
  /* height: 0.8rem; */
  display: flex;
  flex-direction: column;
  background: white;
  margin-bottom: 0.2rem;
}
ul li article {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}
ul li div {
  display: inline-block;
  height: 0.8rem;
  line-height: 0.8rem;
}

ul li div button {
  border: none;
  outline: none;
  margin: 0 0.05rem;
  background: #ddf0ed;
  font-size: 12px;
  padding: 0.08rem;
}
ul li div:nth-child(1) {
  flex-grow: 1.5;
  text-align: left;
}

ul li div:nth-child(1) span {
  margin: 0 0.2rem;
  width: 2rem;
  display: inline-block;
}
ul li div:nth-child(2) {
  flex-grow: 1;
  width: 1.2rem;
}
ul .state span:nth-child(2) {
  position: absolute;
  right: 0.2rem;
}
ul li p {
  text-align: left;
  /* display: none; */
  margin: 0 0.2rem 0.2rem 0.2rem;
}
</style>