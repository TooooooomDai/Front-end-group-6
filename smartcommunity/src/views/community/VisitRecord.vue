<template>
  <div style="background:#f8f8f8 ;width:100%;height:100%">
    <div class="VR-top">
      <div class="VRtopleft">
          <router-link to="./visitorder">
<span class="iconfont icon-houtui"></span>
          </router-link>
        
      </div>
      <div class="VRtopmid">访客记录</div>
    </div>
    <div class="content">
      <ul>
        <router-link to="./visitdetail" style="color:black;text-decoration:none">
          <li>
            <span style="font-size: 30px;margin-top:0.1rem" class="iconfont icon-zhanghu"></span>方红
            <br />
            <span style="font-size: 30px;margin-top:0.1rem" class="iconfont icon-qiche"></span>鲁A11111
            <br />
            <span style="font-size: 30px;margin-top:0.1rem" class="iconfont icon-shijian"></span>2017-12-14
            <br />
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
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