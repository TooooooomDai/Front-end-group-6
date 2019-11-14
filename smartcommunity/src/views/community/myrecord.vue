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
      <div @click="showtousu" :class="{active:tousu}">投诉</div>
      <div @click="showbiaoyang" :class="{active:biaoyang}">表扬</div>
      <div @click="showjianyi" :class="{active:jianyi}">建议</div>
    </div>




    <!-- <router-link to="/reply" style="text-decoration:none;color:black"> -->
      <div class="recordcontent" >
        <div v-show="all">
          <ul>
            <li :key="data.id" v-for="data of datalists" @click="sendrecord(data)">
              <div class="recordtitle">
                <span>{{data.tile}}</span>
                <span class="iconfont icon-qianjin qianjin"></span>
              </div>
              <div class="recordpic">
                <div>
                  <img src alt /> 1
                </div>
                <div>
                  <img src alt /> 2
                </div>
                <div>
                  <img src alt /> 3
                </div>
              </div>
              <div class="recordinform">
                <div>{{data.static}}</div>
                <div>{{data.type}}</div>
                <div>{{data.time}}</div>
              </div>
              <div class="recordpeople">
                <div>相关人员</div>
                <div class="pname">{{data.people}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="tousu">456</div>
        <div v-show="biaoyang">789</div>
        <div v-show="jianyi">000</div>
      </div>
    <!-- </router-link> -->
  </div>
</template>
<script>
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
    //   默认一进入
      (this.datalists = [
          {
            title: "垃圾未清理",
            static: "已回复",
            type: "投诉",
            time: "2019-11-12",
            people: "陈二",
            replycontent:'好的',
            id:1
          },
          {
            title: "门口有陌生人",
            static: "未回复",
            type: "建议",
            time: "2019-11-12",
            people: "陈二",
            id:2
          }
        ]);
  },
  methods: {
    showall() {
      (this.all = true),
        (this.tousu = false),
        (this.jianyi = false),
        (this.biaoyang = false),
        (this.datalists = [
          {
            title: "垃圾未清理",
            static: "未回复",
            type: "投诉",
            time: "2019-11-12",
            people: "陈二",
            replycontent:'好的'
          },
          {
            title: "门口有陌生人",
            static: "未回复",
            type: "建议",
            time: "2019-11-12",
            people: "陈二",
          }
        ]);
    },
    showjianyi() {
      (this.all = false),
        (this.tousu = false),
        (this.jianyi = true),
        (this.biaoyang = false);
    },
    showtousu() {
      (this.all = false),
        (this.tousu = true),
        (this.jianyi = false),
        (this.biaoyang = false);
    },
    showbiaoyang() {
      (this.all = false),
        (this.tousu = false),
        (this.jianyi = false),
        (this.biaoyang = true);
    },
    sendrecord(record){
        this.$router.push('/reply')
        this.$store.dispatch('sendrecord',record)
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
  border: 1px solid red;
}
.recordpic img {
  width: 1rem;
  height: 1rem;
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