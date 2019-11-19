<template>
  <div>
    <Title3 :title="'修改手机'"></Title3>
    <form action>
      <p>
        <input class="newnumber" type="text" placeholder="新手机号" />
      </p>
      <p>
        <input class="yzm" type="text" placeholder="验证码" />
        <button :disabled='flag' style="width:100px" @click.prevent="btnclick">
          {{num}}
        </button>
      </p>
      <button class="submit">绑定</button>
    </form>
  </div>
</template>
<script>
import Title3 from "@/components/dyc/Title3";
export default {
  name: "Changenumber",
  data() {
    return {
      num:'获取验证码',
      flag: false,
    }
  },
  components: {
    Title3
  },
  methods: {
    //验证码倒计时
    btnclick(e) {
      this.flag = true;
      this.num = 60;
      var timer = setInterval(() => {
        this.num--;
        if (this.num == 0) {
          e.target.value == "获取验证码";
          this.num = '获取验证码',
          this.flag = false;
          clearInterval(timer);
        } else {
          e.target.value = this.num;
        }
      }, 100);
    }
  }
};
</script>
<style scoped>
form {
  position: absolute;
  top: 99px;
  width: 100%;
  margin: 0 auto;
  display: block;
}
form p {
  width: calc(100% - 40px);
  padding: 0 20px;
  overflow: hidden;
}
form p input {
  text-indent: 10px;
  float: left;
  height: 30px;
}
form p .newnumber {
  width: 100%;
}
form p .yzm {
  width: calc(70%);
  /* margin-right: calc(5%); */
}
form p button {
  /* width: calc(20%); */
  height: 36px;
  float: right;
  margin-right: -5px;
}
form .submit {
  width: 380px;
  /* width: calc(100% - 40px); */
  height: 40px;
  padding: 0 20px;
  display: inline-block;
}
</style>