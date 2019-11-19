<template>
  <ul id="todo">
    <li v-for="baoxiu of todolist" :key="baoxiu.baoxiuId" @click="goDetail(baoxiu.baoxiuId)">
      <div class="title">
        {{baoxiu.baoxiuType}}
        <span>{{baoxiu.baoxiuStartTime}}</span>
      </div>
      <div class="content">
        <img :src="baoxiu.baoxiuPic" alt />
        <div>{{baoxiu.baoxiuContent}}</div>
      </div>
      <div class="footer">
        <span>报修编号:{{baoxiu.baoxiuId}}</span>
        <button @click.stop="rfinish">维修完成</button>
        <button @click.stop="dfinish" style="margin-right:0.2rem">撤销维修</button>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      todolist: []
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
        baoxiuStartTime: "2019/06/18 13:00",
        baoxiuPic:
          "http://img.mp.itc.cn/upload/20160915/8c5dd22ea21948e7b6af97c4de2273e4_th.png"
      },
      {
        baoxiuType: "小区报修",
        baoxiuContent:
          "洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。洗手间水管损坏，麻烦物业抓紧时间安排上门维修。",
        baoxiuId: "11245445226",
        baoxiuStartTime: "2019/06/20 13:00",
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
    rfinish() {
      this.$dialog.confirm({message:'确认维修完成'}).then(()=>{
        console.log("维修完成");
      })
    },
    dfinish() {
      this.$dialog.confirm({message:'确认撤销报修'}).then(()=>{
        console.log("报修已撤销");
      })
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
  height: 0.5rem;
  line-height: 0.5rem;
  margin-top: 0.1rem;
  background: #4bbcdc;
  border: none;
  outline: none;
  border-radius: 0.05rem;
  color: #fff;
  font-weight: bold;
}
</style>