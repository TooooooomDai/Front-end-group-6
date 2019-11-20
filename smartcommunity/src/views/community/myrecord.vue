<template>
  <div style="background:#f8f8f8 ;width:100%;height:100%">
    <div class="record-top">
      <router-link to="complaint">
        <div class="recordtopleft">
          <span class="iconfont icon-houtui"></span>
        </div>
      </router-link>

      <div class="recordtopmid">我的记录</div>
    </div>

    <div class="mold">
      <div @click="showall" :class="{active:all}">全部</div>
      <div @click="showtousu($event)" :class="{active:tousu}">投诉</div>
      <div @click="showbiaoyang($event)" :class="{active:biaoyang}">表扬</div>
      <div @click="showjianyi($event)" :class="{active:jianyi}">建议</div>
    </div>




    <!-- <router-link to="/reply" style="text-decoration:none;color:black"> -->
      <div class="recordcontent" >
        <div v-show="all">
          <ul>
            <li :key="data.id" v-for="data of datalists" @click="sendrecord(data)">
              <div class="recordtitle">
                <span style="font-size:16px">内容:{{data.comDesc}}</span>
                <span class="iconfont icon-qianjin qianjin"></span>
              </div>
              <div class="recordpic">
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg"  alt /> 
                </div>
                <div>
                  <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt /> 
                </div>
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg" alt /> 
                </div>
              </div>
              <div class="recordinform">
                <div>{{data.reportStatus}}</div>
                <div>{{data.comType}}</div>
                <div>{{data.reportTime}}</div>
              </div>
              <div class="recordpeople">
                <div>相关人员</div>
                <div class="pname">{{data.pName}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="tousu">
          <ul>
            <li :key="data.id" v-for="data of datalists" @click="sendrecord(data)">
              <div class="recordtitle">
                <span style="font-size:16px">内容:{{data.comDesc}}</span>
                <span class="iconfont icon-qianjin qianjin"></span>
              </div>
              <div class="recordpic">
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg"  alt /> 
                </div>
                <div>
                  <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt /> 
                </div>
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg" alt /> 
                </div>
              </div>
              <div class="recordinform">
                <div>{{data.reportStatus}}</div>
                <div>{{data.comType}}</div>
                <div>{{data.reportTime}}</div>
              </div>
              <div class="recordpeople">
                <div>相关人员</div>
                <div class="pname">{{data.pName}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="biaoyang">
          <ul>
            <li :key="data.id" v-for="data of datalists" @click="sendrecord(data)">
              <div class="recordtitle">
                <span style="font-size:16px">内容:{{data.comDesc}}</span>
                <span class="iconfont icon-qianjin qianjin"></span>
              </div>
              <div class="recordpic">
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg"  alt /> 
                </div>
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg" alt /> 
                </div>
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg" alt /> 
                </div>
              </div>
              <div class="recordinform">
                <div>{{data.reportStatus}}</div>
                <div>{{data.comType}}</div>
                <div>{{data.reportTime}}</div>
              </div>
              <div class="recordpeople">
                <div>相关人员</div>
                <div class="pname">{{data.pName}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="jianyi">
          <ul>
            <li :key="data.id" v-for="data of datalists" @click="sendrecord(data)">
              <div class="recordtitle">
                <span style="font-size:16px">内容:{{data.comDesc}}</span>
                <span class="iconfont icon-qianjin qianjin"></span>
              </div>
              <div class="recordpic">
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg"  alt /> 
                </div>
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg" alt /> 
                </div>
                <div>
                  <img src="https://img.yzcdn.cn/vant/leaf.jpg" alt /> 
                </div>
              </div>
              <div class="recordinform">
                <div>{{data.reportStatus}}</div>
                <div>{{data.comType}}</div>
                <div>{{data.reportTime}}</div>
              </div>
              <div class="recordpeople">
                <div>相关人员</div>
                <div class="pname">{{data.pName}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    <!-- </router-link> -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      all: true,
      tousu: false,
      jianyi: false,
      biaoyang: false,
      datalists: []
    };
  },
  mounted() {
              let uid = Number(localStorage.getItem("uid"));
    //http://10.31.163.30:9081/complain/selectCom/{uid}
      axios.get(`complain/selectCom/${uid}`).then(result=>{
        // console.log(result)
        this.datalists=result.data.data
      })
  },
  methods: {
    showall() {
      (this.all = true),
        (this.tousu = false),
        (this.jianyi = false),
        (this.biaoyang = false),
        axios.get('complain/selectCom/1').then(result=>{
        // console.log(result)
        this.datalists=result.data.data
      })
    },
    showjianyi(e) {
      (this.all = false),
        (this.tousu = false),
        (this.jianyi = true),
        (this.biaoyang = false);
        console.log(e.target.innerHTML)
        axios.get(`complain/selectType/1/${e.target.innerHTML}`).then(result=>{
        // console.log(result)
        this.datalists=result.data.data
      })
    },
    showtousu(e) {
      (this.all = false),
        (this.tousu = true),
        (this.jianyi = false),
        (this.biaoyang = false);
        axios.get(`complain/selectType/1/${e.target.innerHTML}`).then(result=>{
        // console.log(result)
        this.datalists=result.data.data
      })
    },
    showbiaoyang(e) {
      (this.all = false),
        (this.tousu = false),
        (this.jianyi = false),
        (this.biaoyang = true);
        axios.get(`complain/selectType/1/${e.target.innerHTML}`).then(result=>{
        // console.log(result)
        this.datalists=result.data.data
      })
    },
    sendrecord(record){
        this.$router.push('/reply')
        // console.log(record)
        axios.get(`/complain/selectOne/${record.comId}`).then(result=>{
          console.log(result.data.data)
          this.$store.dispatch('sendrecord',result.data.data)
        })
        
    }
  }
};
</script>


<style scoped>
.active {
  border-bottom: 3px solid red;
}
.record-top {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  background: white;
  position: relative;
}
.recordtopleft {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  font-size: 14px;
  position: absolute;
  left: 0px;
}
.recordtopmid {
  font-weight: 600;
  display: flex;
  font-size: 18px;
  align-items: center;
}

.mold {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  height: 1rem;
  line-height: 1rem;
  background: white;
}

.recordcontent ul li {
  width: 100%;
  /* height: 3rem; */
  margin-top: 0.2rem;
  background: white;
}

.recordtitle {
  display: flex;
  margin-top: 0.2rem;
  margin-left: 0.7rem;
  font-size: 14px;
  position: relative;
  /* justify-content:space-around; */
}
.qianjin {
  position: absolute;
  right: 0.2rem;
}
.recordpic {
  display: flex;
}
.recordpic div {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.7rem;
  margin-top: 0.2rem;
  /* border: 1px solid red; */
}
.recordpic img {
  width: 1.5rem;
  height: 1.5rem;
}
.recordinform {
  display: flex;
}
.recordinform div {
  margin-left: 0.7rem;
  font-size: 14px;
  margin-top: 0.2rem;
}
.recordpeople {
  display: flex;
  position: relative;
}
.recordpeople div {
  margin-left: 0.7rem;
  font-size: 14px;
  margin-top: 0.2rem;
}
.pname {
  position: absolute;
  right: 0.7rem;
}
</style>