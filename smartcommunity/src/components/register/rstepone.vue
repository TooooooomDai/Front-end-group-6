<template>
  <div id="wrap">
    <div class="ze" ref="zhezhao"></div>
    <div id="content">
      <div>
        <i>*</i>
        <p>
          身份类型
          <select name id="identity" ref="identity" v-on:blur="identitychoose">
            <option value="业主">业主</option>
            <option value="租户">租户</option>
            <option value="家属">家属</option>
          </select>
        </p>
      </div>
      <div>
        <i></i>
        <p>
          片区
          <span class="neirong">{{pianquid}}</span>
          <span class="iconfont icon-qianjin" v-show="!showpianqu" @click="pianqu"></span>
          <pianqu v-show="showpianqu"></pianqu>
          <button @click="queding" v-show="show" class="queding">确定</button>
        </p>
      </div>
      <div>
        <i>*</i>
        <p>
          楼栋
          <span class="neirong">{{loudongid}}</span>
          <span class="iconfont icon-qianjin" v-show="!showloudong" @click="loudong"></span>
          <loudong v-show="showloudong"></loudong>
        </p>
      </div>
      <div>
        <i>*</i>
        <p>
          单元
          <span class="neirong">{{danyuanid}}</span>
          <span class="iconfont icon-qianjin" v-show="!showdanyuan" @click="danyuan"></span>
          <danyuan v-show="showdanyuan"></danyuan>
        </p>
      </div>
      <div>
        <i>*</i>
        <p>
          房屋
          <span class="neirong">{{fangwuid}}</span>
          <span class="iconfont icon-qianjin" v-show="!showfangwu" @click="fangwu"></span>
          <fangwu v-show="showfangwu"></fangwu>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import pianqu from "./pianqu";
import loudong from "./loudong";
import danyuan from "./danyuan";
import fangwu from "./fangwu";

export default {
  name: "rstepone",
  data() {
    return {
      show: false,
      showpianqu: false,
      showloudong: false,
      showdanyuan: false,
      showfangwu: false
    };
  },
  mounted() {
    this.$store.dispatch("identitychoose", identity);
  },
  methods: {
    pianqu() {
      this.showpianqu = !this.showpianqu;
      this.show = !this.show;
      this.$refs.zhezhao.style.zIndex = 10;
    },
    loudong() {
      this.showloudong = !this.showloudong;
      this.show = !this.show;
      this.$refs.zhezhao.style.zIndex = 10;
    },
    danyuan() {
      this.showdanyuan = !this.showdanyuan;
      this.show = !this.show;
      this.$refs.zhezhao.style.zIndex = 10;
    },
    fangwu() {
      this.showfangwu = !this.showfangwu;
      this.show = !this.show;
      this.$refs.zhezhao.style.zIndex = 10;
    },
    zhezhao() {
      console.log(1);
      // console.log(this.$refs.zhezhao.style)
    },
    queding() {
      this.showpianqu = false;
      this.showloudong = false;
      this.showdanyuan = false;
      this.showfangwu = false;
      this.show = false;
      this.$refs.zhezhao.style.zIndex = 0;
    },
    identitychoose() {
      // this.$refs.identity.value
      this.$store.dispatch("identitychoose", identity);
    }
  },
  components: {
    pianqu,
    loudong,
    danyuan,
    fangwu
  },
  computed: {
    pianquid(list) {
      return this.$store.state.list;
    },
    loudongid(loudongnum) {
      return this.$store.state.loudongnum;
    },
    danyuanid(dnyuan) {
      return this.$store.state.danyuan;
    },
    fangwuid(fangwu) {
      console.log(this.$store.state.fangwu);
      return this.$store.state.fangwu;
    }
  }
};
</script>
<style scoped>
.iconfont,
em {
  font-size: 20px;
  font-weight: bolder;
  font-style: normal;
}

#content {
  width: 100%;
  height: 6rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#content div {
  height: 1rem;
  display: flex;
  align-items: center;
}
#content i {
  width: 0.2rem;
  font-style: normal;
  font-size: 20px;
  color: red;
}
#content p {
  width: 6.5rem;
  height: 0.9rem;
  font-size: 16px;
  border: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.neirong {
  width: 1rem;
  height: 20px;
  display: inline-block;
  position: absolute;
  right: 0.5rem;
}
select {
  background: white;
  border: 0;
  /* color: #999; */
  font-size: 16px;
  outline: none;
  box-shadow: none;
}
option {
  font-size: 12px;
}
.queding {
  width: 1.2rem;
  height: 0.7rem;
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 10;
  background: #92dce7;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border-radius: 0.2rem
}
#wrap {
  position: relative;
}
.ze {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.5;
  z-index: 0;
}
</style>