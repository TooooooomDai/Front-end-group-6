<template>
  <div>
    <Title2 :title="'用户信息'"></Title2>
    <ul class="content">
      <li>
        <span class="type">头像</span>
        <span class="messages">
          <div class="portrait">
            <img
              src="./3.jpg"
              style=" border-radius: 13px;width:24px;height:24px;display:inline-block"
              alt
            />
          </div>
        </span>
      </li>
      <li>
        <span class="type">用户名</span>
        <span class="messages">
          <input type="text" @focus="focus" @blur="
        blur" v-model="messages.id" />
        </span>
      </li>
      <li>
        <span class="type">姓名</span>
        <span class="messages">
          <input type="text" @focus="focus" @blur="
        blur" v-model="messages.name" />
        </span>
      </li>
      <li>
        <span class="type">生日</span>
        <span class="messages">
          <el-date-picker
            v-model="value1"
            type="date"
            :placeholder="messages.birthday"
            style="padding:none;"
          ></el-date-picker>
        </span>
      </li>
      <li>
        <span class="type">性别</span>
        <span class="messages">
          男
          <input v-model="messages.sex" type="radio" name="sex" id value="男" />
          女
          <input v-model="messages.sex" value="女" type="radio" name="sex" id />
        </span>
      </li>
      <li>
        <span class="type">手机号</span>
        <span class="messages" style="color:#ccc">
          {{messages.phonenumer}}
          <router-link to="/changenumber">编辑</router-link>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import Title2 from "@/components/dyc/Title2";
import axios from "axios";
export default {
  name: "Account",
  data() {
    return {
      messages: {},
      value1: ""
    };
  },
  mounted() {
    var data = {
        id: "asd",
        name: "张宏",
        birthday: "1991-11-01",
        sex: "女",
        phonenumer: "13812345678"
      };
      this.messages = data;
    // axios.post("user/knockdoor" + "/1").then(result => {
    //   console.log(result.data);
    // });
  },
  methods: {
    focus() {
      event.target.style.color = "#000";
    },
    blur() {
      event.target.style.color = "#ccc";
    }
  },
  components: {
    Title2
  }
};
</script>
<style scoped>
input {
  border: none;
  /* float: right; */
  text-align: right;
  outline: medium;
  color: #ccc;
}
.content {
  position: absolute;
  top: calc(1rem + 20px);
  width: 100%;
}
.content li {
  width: calc(100% - 50px);
  border-top: 2px solid #ccc;
  padding: 0 30px 0 20px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  overflow: hidden;
}
.content li .type {
  float: left;
}
.content li .messages {
  float: right;
}
.content li .messages .portrait {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 13px;
  border: 1px solid #000;
  margin-top: 5px;
  /* margin-right: 5px; */
}
.content li .messages .arrow {
  font-size: 24px;
  color: #ccc;
  line-height: 30px;
  position: relative;
  top: -3px;
  margin-left: 3px;
}
.el-input >>> .el-input__inner {
  border: none;
  padding: 0;
  padding-left: 0;
  padding-right: 0;
  text-align: right;
}
.el-input >>> .el-input__prefix {
  display: none;
}
.el-input >>> .el-input__suffix {
  display: none;
}
</style>
