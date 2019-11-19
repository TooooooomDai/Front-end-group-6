<template>
  <div class="record">
    <div class="head">
      <!-- 头部返回键 -->
      <i @click="prev">
        <img src="../assets/jiantou.jpg" alt />
      </i>
      <h2>开门记录</h2>
    </div>
    <hr />
    <!-- 表头 -->
    <div class="header">
      <table>
        <tr>
          <td>启动时间</td>
          <td>进出门方式</td>
          <td>进出状态</td>
          <td>房屋单元入口</td>
        </tr>
        <!-- 循环遍历渲染 后端给到的数据库 -->
        <tr :key="list.gid" v-for="list in record_list">
          <td >{{list.gateTime}}</td>
          <td>{{list.gateType}}</td>
          <td>{{list.gateStatus}}</td>
          <td>{{list.gateHouse}}</td>
        </tr>
        <!-- <tr>
          <td>2019/11/5 12：24：56</td>
          <td>人脸-进</td>
          <td>1栋1单元</td>
        </tr>
        <tr>
          <td>2019/11/6 17：34：21</td>
          <td>指纹-进</td>
          <td>1栋1单元</td>
        </tr> -->
      </table>
    </div>
  </div>
</template>
<script>
document.documentElement.style.fontSize =
  (document.body.clientWidth * 50) / 375 + "px";
  import axios from 'axios';
export default {
  data() {
    return {
      record_list:[  //

      ]
    };
  },
  mounted() {  //挂载
    axios.post('/gate/selectAll').then((result)=>{
      //axios用post获取数据
      console.log(result.data.data[0]);
      this.record_list=result.data.data
    })
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
  }
};
</script>
<style>
* {
  list-style: none;
}
/* 头部样式 */
.head {
  display: flex;
  flex-direction: row;
}
.head i {
  padding: 0.3rem;
}
.head h2 {
  text-align: center;
  padding-left: 1.84rem;
  font-size: 18px;
  font-weight: 600;
  height: 1rem;
  line-height: 1rem;
}
.head i img {
  width: 0.4rem;
  height: 0.4rem;
}
.header td{
  padding: 0.1rem;
}
</style>









