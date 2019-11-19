<template>
  <!-- 投诉 -->
  <div style="background:#f8f8f8 ;width:100%;height:100%">
    <div class="complaint-top">
      <router-link to="/community">
        <div class="complainttopleft">
          <span class="iconfont icon-houtui" @click="empty"></span>
        </div>
      </router-link>
      <div class="complainttopmid">投诉建议</div>
      <router-link to="/myrecord">
        <div class="complainttopright" @click="empty">我的记录</div>
      </router-link>
    </div>
    <div class="complaint-content">
      <div class="complaint-people">
        <span class="people">选择人员(必选)</span>
        <router-link to="/choosepeople">
          <span class="choose-people">
            <span ref="people">{{sendname}}</span>
            <span class="iconfont icon-qianjin"></span>
          </span>
        </router-link>
      </div>
      <div class="complaint-type">
        <span class="type">选择类型</span>
        <ul>
          <li
            ref="type"
            :key="type.name"
            v-for="type of types"
            @click="toactive(type)"
            :class="{active: type==selecttype}"
          >{{type.name}}</li>
        </ul>
      </div>
      <div class="content">
        <textarea @click="check" ref="neirong" name class="neirong" placeholder="请输入你要写的事"></textarea>
      </div>

      <!-- <div class="contentpic">
        <div class="jia">
          <span>+</span>
        </div>
        <div class="pic">可添加三张图片</div>
      </div>-->
      <div class="contentpic">
        图片上传(可填)
        <br />
        <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="3" />
        <!-- <input type="file" placeholder="上传图片"> -->
      </div>

      <div class="submit">
        <button @click="senddata">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/cat.jpeg", name: "图片1" }
      ],
      selecttype: "",
      types: [
        {
          name: "投诉"
        },
        {
          name: "表扬"
        },
        {
          name: "建议"
        }
      ],
      inform: "",
      pic1: "",
      pic2: "",
      pic3: ""
      // dropzFile:''
    };
  },
  methods: {
    afterRead(file) {
      // console.log(file.file)
      // this.dropzFile=file.file
      // console.log(this.dropzFile)

      var formData = new FormData();
      formData.append("dropzFile", file.file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      console.log(formData.get("dropzFile"));
      axios.post("/complain/uploadImage", formData, config).then(result => {
        console.log("发送成功");
      });
    },

    toactive(type) {
      this.selecttype = type;
      if (this.$refs.people.innerHTML == "") {
        this.$dialog.alert({
          title: "提示",
          message: "请选择人员"
        });
        this.selecttype = "";
      }
    },
    check() {
      if (this.$refs.people.innerHTML == "") {
        this.$dialog.alert({
          title: "提示",
          message: "请选择人员"
        });
        this.$refs.neirong.disabled = true;
      }
    },
    senddata() {
      if (this.$refs.neirong.value != "" && this.selecttype.name != "") {
        console.log({
          type: this.selecttype.name,
          // people: this.$refs.people.innerHTML,
          text: this.$refs.neirong.value,
          uid: this.$store.state.peopleid
        });
        this.inform = {
          comType: this.selecttype.name,
          // comPerson: this.$refs.people.innerHTML,
          comDesc: this.$refs.neirong.value,
          pId: this.$store.state.peopleid,
          uid: "1"
        };

        axios
          .get("/complain/insertSelective", { params: this.inform })
          .then(result => {
            console.log("发送成功");
          });
        this.$dialog.alert({
          title: "提示",
          message: "提交成功"
        });
        this.$refs.neirong.value = "";
        this.$refs.people.innerHTML = "";
        this.selecttype = "";
      } else {
        this.$dialog.alert({
          title: "提示",
          message: "请输入信息"
        });
      }
    },
    empty() {
      this.$store.dispatch("sendname", "");
    }
  },
  computed: {
    sendname() {
      return this.$store.state.peoplename;
    }
  }
};
</script>
<style scoped>
.active {
  background: lightgray;
  color: white;
}
.complaint-top {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  background: white;
  position: relative;
}
.complainttopleft {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  font-size: 14px;
  position: absolute;
  left: 0px;
}
.complainttopmid {
  font-weight: 600;
  display: flex;
  font-size: 18px;
  align-items: center;
}
.complainttopright {
  display: flex;
  font-size: 14px;
  /* align-items: center; */
  line-height: 1rem;
  position: absolute;
  right: 0.2rem;
  color: #4bbcdc;
  font-weight: 600;
}

.complaint-content .complaint-type {
  background: white;
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 2.5rem;
  position: relative;
  margin-top: 0.2rem;
}
.type {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
}
.complaint-type ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
/* .tousu,.biaoyang,.jianyi */
.complaint-type ul li {
  display: flex;
  align-self: center;
  margin-top: 0.5rem;
  font-size: 16px;
  width: 1rem;
  height: 0.5rem;
  /* background: gray; */
  padding: 0.2rem 0.1rem 0.2rem 0.4rem;
  text-align: center;
  border: 1px solid lightgray;
  /* color: white; */
}

.complaint-people {
  background: white;
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 1rem;
  position: relative;
  margin-top: 0.2rem;
}
.people {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
}

.choose-people {
  position: absolute;
  top: 0.2rem;
  right: 0.3rem;
}

.content {
  position: relative;
  margin-top: 0.2rem;
  background: white;
}
.neirong {
  margin-top: 0.5rem;
  width: 6rem;
  height: 2rem;
  border: none;
  outline: none;
  background: white;
}
.contentpic {
  /* background: white;
  margin-top: 0.2rem;
  height: 3.2rem;
  overflow: hidden; */

  height: 4rem;
  width: 7.1rem;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  background: #fff;
  font-size: 0.3rem;
  line-height: 1rem;
  text-align: left;
}
.jia {
  /* height: 2rem; */
  width: 1.5rem;
  height: 1.5rem;
  border: 1px dashed gray;
  margin-left: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.pic {
  display: flex;
  margin-top: 0.2rem;
  margin-left: 0.7rem;
}

.submit button {
  margin-top: 1rem;
  width: 6rem;
  height: 1rem;
  /* border-color: lightgray; */
  outline: none;
  border: none;
  border-radius: 0.1rem;
  background: #4bbcdc;
  color: white;
}
</style>