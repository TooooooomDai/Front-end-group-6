<template>
  <div id="wrap">

    <keep-alive>
    <div id="content">
      <div>
        <i>*</i>
        <el-date-picker ref="value1" v-model="value1" type="date" placeholder="合同开始日期" class="biankuang" v-on:blur="chooseBegin"></el-date-picker>
      </div>
      <div>
        <i>*</i>
        <el-date-picker ref="value2" v-model="value2" type="date" placeholder="合同结束日期" class="biankuang" v-on:blur="chooseEnd"></el-date-picker>
      </div>
      <div>
        <i>*</i>
        <p class="noneborder">租房合同</p>
      </div>
    </div>
    </keep-alive>
    <div id="pic">
        <ul>
            <li>+</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "rstepone",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      value2: ""
    };
  },
  methods: {
    chooseBegin(){
      this.$store.dispatch('getBegin',this.$refs.value1.value)
    },
    chooseEnd(){
      this.$store.dispatch('getEnd',this.$refs.value2.value)
    }
  },
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
  height: 3.4rem;
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
  width: 0.3rem;
  font-weight: 600;
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
 #content .noneborder{
     box-sizing: border-box;
     border: 0;
     font-weight: 600;
     padding-left: 0.15rem;
 }
.biankuang {
  width: 6.5rem;
}
#pic ul{
    width: 6.5rem;
    display: flex;
    justify-items: left;
}
#pic li{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background: #f5f5f5;
    font-size: 30px;
    text-align: center;
    line-height: 2rem;
}
</style>