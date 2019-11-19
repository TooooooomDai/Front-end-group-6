<template>
  <div style="background:#f8f8f8 ;width:100%;height:100%">
    <div class="detail-top">
      <router-link to="/visitrecord">
        <div class="detailtopleft">
          <span class="iconfont icon-houtui"></span>
        </div>
      </router-link>

      <div class="detailtopmid">访客详细</div>
    </div>

    <div>
      <div class="dname">
        <div>姓名</div>
        <span>方红</span>
      </div>
      <div class="dsex">
        <div>性别</div>
        <span>女</span>
      </div>
      <div class="dphonenum">
        <div>手机号码</div>
        <span>17856526262</span>
      </div>
      <div class="didtype">
        <div>证件类型</div>
        <span>身份证</span>
      </div>
      <div class="didnum">
        <div>证件号</div>
        <span>12345678912345789</span>
      </div>
      <div class="dcarnum">
        <div>车牌号</div>
        <span>浙A45678</span>
      </div>
      <div class="dordertime">
        <div>预约时间</div>
        <span>2019-2-1</span>
      </div>
      <div class="dcarnum">
        <div>来访时间</div>
        <span>2019-4-15</span>
      </div>
      <div class="dcarnum">
        <div>来访说明</div>
        <span>做客</span>
      </div>
      <div class="dcode">
        <div>二维码</div>
        <span>已失效</span>
      </div>
    </div>

    <img
      style="display:flex;width:2rem;height:2rem;margin-top:0.3rem;margin-left:0.3rem;"
      src="../../../public/img/code.png"
      alt
    />
  </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted() {
        console.log(this.$route.query.id)

        axios.post(`/user/detail?visitorAppointmentId=${this.$route.query.id}`).then(result=>{
            console.log(result)
        })
    },
    computed: {
        
    },
};
</script>
<style scoped>
.detail-top {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  background: white;
  position: relative;
}
.detailtopleft {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  font-size: 14px;
  position: absolute;
  left: 0px;
}
.detailtopmid {
  font-weight: 600;
  display: flex;
  font-size: 18px;
  align-items: center;
}
.detailtopright {
  display: flex;
  font-size: 14px;
  /* align-items: center; */
  line-height: 1rem;
  position: absolute;
  right: 0.2rem;
  color: #4bbcdc;
  font-weight: 600;
}

.dname,
.dsex,
.dphonenum,
.didtype,
.didnum,
.dcarnum,
.dordertime,
.dcometime,
.dtitle,
.dcode {
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
}
</style>