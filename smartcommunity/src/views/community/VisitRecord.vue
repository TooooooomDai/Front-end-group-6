<template>
  <div style="background:#f8f8f8 ;width:100%;height:100%">
    <div class="VR-top">
      <div class="VRtopleft">
        <router-link to="./visitorder" >
          <span class="iconfont icon-houtui"></span>
        </router-link>
      </div>
      <div class="VRtopmid">访客记录</div>
    </div>
    <div class="content">
      <ul>
        <!-- <router-link to="./visitdetail" style="color:black;text-decoration:none" > -->
          <li  @click="sendid(list.visitorAppointmentId)" v-for="list of recordlists" :key="list.visitorAppointmentId">
            <span style="font-size: 30px;margin-top:0.1rem" class="iconfont icon-zhanghu"></span>{{list.vaName}}
            <br />
            <span style="font-size: 30px;margin-top:0.1rem" class="iconfont icon-qiche"></span>{{list.vaCarsNum}}
            <br />
            <span style="font-size: 30px;margin-top:0.1rem" class="iconfont icon-shijian"></span>{{list.visitorAppointmentTime.split('T')[0]}}
            <br />
          </li>
        <!-- </router-link> -->
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {  
  data() {
    return {
      recordlists:[],
       username : localStorage.getItem("username")
    }
  },
  mounted() {
    
    // http://10.31.163.52:9081/user/record
    axios.post(`/user/record?username=小王`).then(result=>{
    // axios.post(`/user/record?username=${this.username}`).then(result=>{
      // console.log(result)
      this.recordlists=result.data.data
      // console.log(this.recordlists)
    })
  },
  methods: {
    // 点击访客记录中的一个传入vuex一个id，发ajax然后在detail详情页接收
    sendid(visitid){
      console.log(visitid)
    //   // this.$store.dispatch('sendid',visitid)
      this.$router.push({name:'visitdetail',query:{id:visitid}})
    }
  },
};
</script>
<style scoped>
.VR-top {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  background: white;
  position: relative;
}
.VRtopleft {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  font-size: 14px;
  position: absolute;
  left: 0px;
}
.VRtopmid {
  font-weight: 600;
  display: flex;
  font-size: 18px;
  align-items: center;
}
.VRtopright {
  display: flex;
  font-size: 14px;
  /* align-items: center; */
  line-height: 1rem;
  position: absolute;
  right: 0.2rem;
  color: #4bbcdc;
  font-weight: 600;
}

.content ul li {
  border: 1px solid lightgray;
  text-align: left;
  padding-left: 0.5rem;
}
</style>