<template>
  <div class="seehouse">
    <ul>
      <li :key="index" v-for="(type,index) of types"> 
        <div>
          <span v-if="index<3" style="color:red;margin-left:-0.12rem">*</span>
          <span>{{type}}</span>
        </div>
        <div>
          <span>{{types_detail[index]}} ></span>
        </div>
      </li>
      <!-- <div class="pic" >
          <span>房屋证件</span>
          <img src="" alt="">
      </div>
      <div class="pic" >
          <span>户型图</span>
          <img src="" alt="">
      </div>
      <div class="prove">
          <span>相关证明</span>
          <img src="" alt="">
      </div> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {

  },
  computed: {
      types(){
          return this.$store.state.myhouse.seehouse;
      },
      types_detail(){
          return this.$store.state.myhouse.seehouse_value;
      }
  },
  mounted() {
        this.$store.dispatch('myhouse/see_houserender',{type: this.$route.query});
        
  },
};
</script>
<style scoped>
.seehouse{
    background:#F2F2F2;
}
ul {
  list-style: none;
  overflow: hidden;
}
ul li {
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
}
ul li div{
    background: white; 
}
ul li div {
  display: inline-block;
  height: 0.8rem;
  line-height: 0.8rem;
}
ul div {
    background: #F2F2F2;
    text-align: left;
    padding: 0.2rem;
}
ul div img{
    display: inline-block;
    height: 1rem;
    width: 1rem;
    border: 0.04rem dashed #BCBCBC;
    background: white;
}
ul .pic span{
    margin-right: 0.2rem;
    width: 1rem;
    display: inline-block;
}
.seehouse button{
    display: inline-block;
    width: 90%;
    height: 1rem;
    border-radius: 0.2rem;
    background: #E4E4E4;
    outline:none;
    border: none;
    margin:0.4rem 0 ;
}
ul .prove{
    background: white;
}
ul .prove span{
    margin-right: 0.2rem;
    width: 1rem;
    display: inline-block;
}
ul .prov img{
    display: inline-block;
    height: 1rem;
    width: 1rem;
    border: 0.04rem dashed #BCBCBC;
    background: white;
}
</style>