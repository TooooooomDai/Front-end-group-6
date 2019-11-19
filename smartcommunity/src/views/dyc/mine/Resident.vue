<template>
  <div>
    <Title3 :title="'住户信息'"></Title3>
    <ul class="content">
      <li :key="message.type" v-for="message of messages">
        <span class="type">{{message.type}}</span>
        <span class="text">{{message.text}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import Title3 from "@/components/dyc/Title3";
export default {
  name: "Changenumber",
  created() {
    // axios();
    // let messages = [];
    // this.messages = messages;
    // console.log("我被赋值了")
  },
  mounted() {
    var data = [
      { type: "姓名", text: "张强" },
      { type: "性别", text: "男" },
      { type: "证件类型", text: "身份证" },
      { type: "证件号码", text: "3325011562042611XX" },
      { type: "名族", text: "汉" },
      { type: "婚姻状况", text: "未婚" },
      { type: "国籍", text: "中国" },
      { type: "籍贯", text: "杭州" },
      { type: "学历", text: "大专" },
      { type: "政治面貌", text: "中共党员" },
      { type: "户口所在地", text: "本地" },
      { type: "是否业主入住", text: "是" },
      { type: "证件照片", text: "" },
      { type: "采集照片", text: "" }
    ];
    // axios.post('user/getDetail',`uid = 1`).then((result)=>{
    //   console.log("执行了");
    //   console.log(result.data);
    //   data = result.data.data;
      this.messages = data;
    // })
  },
  data() {
    return {
      messages: []
    };
  },
  components: {
    Title3
  }
};
</script>
<style scoped>
ul {
  position: absolute;
  top: calc(1rem + 20px);
  width: 100%;
}
li {
  padding: 10px 20px;
  width: calc(100% - 40px);
  border-top: 2px solid #ccc;
  overflow: hidden;
}
li .type {
  float: left;
}
li .text {
  float: right;
  color: #ccc;
}
</style>