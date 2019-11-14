
<template>
  <!-- 电子监控 -->
  <div style="background:#f8f8f8 ;width:100%;height:100%">
    <div class="monitor-top">
      <router-link to="/community">
      <div class="monitortopleft">
        <span class="iconfont icon-houtui"></span>
      </div>
      </router-link>
      <div class="monitortopmid">电子监控</div>
    </div>
    <div class="monitor-choose">
      <span class="iconfont icon-Magnifier fangdajing"></span>
      <input class="monitor-search" type="text" placeholder="请输入你想要看的监控" />
    </div>








  <div class="monitor-content">
    <span v-show="!fuhao" class="iconfont icon-jia jiahao" @click.stop="showlou">公共监控</span>
    <span v-show="fuhao" class="iconfont icon-jian jiahao" @click.stop="showlou">公共监控</span>  
      <ul class="twocook" v-show="xianshilou">
        <li  :key="home.id" v-for="home of homelists" @click="showdanyuan($event,home)">
          <span ref="icon"  class="iconfont icon-jia loujiahao" :class="{'icon-jian':showarr[home.id-1]}"></span>
          {{home.text}}
          <ul  v-show="showarr[home.id-1]">
            <li @click.stop="showmonitor" class="danyuan" :key="danyuan.id" v-for="danyuan of danyuanlists">{{danyuan.text}}</li>
          </ul> 
          
        </li>
      </ul>
    
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
export default {
  data() {
    return {
      homelists:[],
      showarr:[],
      // showobj:{},
      danyuanlists:[],
      xianshilou:false,
      fuhao:false,
    }
  },
  mounted() {
    this.homelists=[
      {text:'1栋',id:'1'},
      {text:'2栋',id:'2'},
      {text:'3栋',id:'3'},
      {text:'4栋',id:'4'}
    ];
    this.danyuanlists=[
      {text:'1单元',id:'1'},
      {text:'2单元',id:'2'},
    ];

    for(var i=0;i<this.homelists.length;i++){
      this.showarr.push(false)
    }
  },
  methods: {
    showlou(){
      this.xianshilou=!this.xianshilou;
      this.fuhao=!this.fuhao;
      
    },
    showdanyuan(e,home){
        Vue.set(this.showarr,home.id-1,!this.showarr[home.id-1])
    },
    showmonitor(){
      this.$dialog.alert({
                title: "提示",
                message: "暂无监视功能"
              });
      // console.log(1)
    }
  },


};
</script>
<style scoped>
.monitor-top {
  display: flex;
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  background: white;
  position: relative;
}
.monitortopleft{
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.20rem;
    font-size: 14px;
    position: absolute;
    left: 0px;
}
.monitortopmid{
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
}

.monitor-choose{
    display: flex;
    margin-left: 0.4rem;
    margin-top: 0.15rem;
    width: 6.5rem;
    height: 0.75rem;
    border: 1px solid red;
    background: lightgray
}
.fangdajing{
    display: flex;
    align-items: center;
    margin-left: 0.2rem;

}
.monitor-choose .monitor-search{
    width: 6rem;
    border: 0px;
    margin-left: 0.2rem;
    outline: none;
    background: lightgray;
    
}
input::-webkit-input-placeholder { color: gray; }

.monitor-content{
  /* display: flex;
  justify-content: flex-start; */
  text-align: left;
}

.jiahao{
    display: block;
    margin-top: 0.5rem;
    margin-left: 0.3rem;
}

 .twocook{
   margin-left: 0.5rem;
   font-size: 16px;
 }

.danyuan{
  margin-left: 0.6rem;
}

</style>