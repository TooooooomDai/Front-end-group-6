<template>
  <div id="wrap">
    <keep-alive>
      <div id="content">
        <div>
          <i>*</i>
          <p>
            用户名
            <input type="text" placeholder="请输入" ref="username" v-on:blur="getUsername" />
          </p>
        </div>
        <strong class="wrong"></strong>
        <div>
          <i>*</i>
          <p>
            姓名
            <input type="text" placeholder="请输入" ref="Rname" v-on:blur="getXingming" />
          </p>
        </div>
        <div>
          <i>*</i>
          <p>
            性别
            <select name id="sex" ref="sex" v-on:blur="getSex">
              <option value="as">男</option>
              <option value="as">女</option>
            </select>
          </p>
        </div>
        <div>
          <i>*</i>
          <p>
            证件类型
            <input type="text" value="身份证" readonly/>
          </p>
        </div>
        <div>
          <i></i>
          <p>
            证件号码
            <input type="text" placeholder="请输入" v-on:blur="idCardyz" ref="usercard" />
          </p>
        </div>
        <strong class="wrong" v-show="showIDcard">身份证号不正确</strong>
        <div>
          <i>*</i>
          <p>
            民族
            <select name id="nation" ref="nation" v-on:blur="getNation">
              <option value="hz">汉族</option>
              <option value="mz">满族</option>
              <option value="qt">其他</option>
            </select>
          </p>
        </div>
      </div>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "rstepone",
  data() {
    return {
      showIDcard: false
    };
  },
  mounted() {
    this.$store.dispatch("getSex", this.$refs.sex.value);
    this.$store.dispatch("getNation", this.$refs.nation.value);
  },
  methods: {
    idCardyz() {
      let userCard = this.$refs.usercard.value;
      console.log(userCard);
      let reg = /^\d{6}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])\d{3}[\d\x\X]$/;
      if (reg.test(userCard)) {
        this.showIDcard = false;
        this.$store.dispatch("getIdcard", userCard);
        console.log(userCard);
      } else {
        this.showIDcard = true;
      }
    },
    getUsername() {
      this.$store.dispatch("getUsername", this.$refs.username.value);
      // console.log(this.$refs.username.value)
    },
    getXingming() {
      this.$store.dispatch("getXingming", this.$refs.Rname.value);
      // console.log(this.$refs.Rname.value)
    },
    getSex() {
      this.$store.dispatch("getSex", this.$refs.sex.value);
    },
    getNation() {
      this.$store.dispatch("getNation", this.$refs.nation.value);
    }
  }
};
</script>
<style scoped>
#top {
  /* width: 100%; */
  height: 1rem;
  display: flex;
  align-items: center;
  margin-left: 0.1rem;
  position: relative;
}
.iconfont,
em {
  font-size: 20px;
  font-weight: bolder;
  font-style: normal;
}

#content {
  width: 100%;
  height: 7.2rem;
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
  box-sizing: border-box;
  width: 6.5rem;
  height: 0.9rem;
  font-size: 16px;
  padding-left: 0.1rem;
  padding-right: 0.2rem;
  border: 1px solid #e8e8e8;
  display: flex;
  color: #999;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
#content input {
  text-align: right;
  outline: none;
  border: 0;
  font-size: 18px;
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
.wrong {
  display: block;
  width: 6.5rem;
  height: 0.1rem;
  font-size: 12px;
  line-height: 12px;
  color: red;
  text-align: right;
  margin-top: -0.05rem;
}
</style>