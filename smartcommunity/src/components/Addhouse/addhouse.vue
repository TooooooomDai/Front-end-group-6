<template>
  <div class="addhouse">
    <ul>
      <li :key="index" v-for="(type,index) of types">
        <div>
          <span v-if="index<3" style="color:red;margin-left:-0.12rem">*</span>
          <span>{{type}}</span>
        </div>
        <div @click="selectContent(index)">
          <span>{{types_detail[index]}} ></span>
        </div>
      </li>
      <!-- <div class="pic">
        <span>房屋证件</span>
        <img src alt />
      </div>
      <div class="pic">
        <span>户型图</span>
        <img src alt />
      </div>-->

      <button @click="submit">提交</button>
      <div class="subremind" v-show="subshow">
        <transition name="fade">
          <div ref="content">提交中...</div>
        </transition>
      </div>
    </ul>

    <!--遮罩层-->
    <div class="mask" v-show="show" @touchmove="move($event)" @click="cancel($event)">
      <div class="wrap">
        <p @click="selected(selcons,isadd_render)">确定</p>
        <div class="selection">
          <div
            class="content"
            :key="index"
            v-for="(detail,index) of details"
            @click="selcon($event)"
            :class="{fontcolor:detail==selcons}"
          >{{detail}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      selcons: "",
      ekey: "",
      isadd_render: "",
      subshow: false
    };
  },
  methods: {
    //点击跳出遮罩层
    selectContent(index) {
      this.$store.dispatch('myhouse/change_detail',index);//改变弹出框的选项
      this.show = true;
      this.ekey = index;
      this.isadd_render = index; //只有第一个改变才会改变渲染
    },
    //选项移动
    move(event) {
      if (event.target.className !== "content") {
        event.preventDefault();
      }
    },
    //点击遮罩层消失
    cancel(event) {
      if (event.target.className == "mask") {
        this.show = false;
      }
    },
    selected(data, index) {
      this.$store.dispatch("myhouse/selected", {
        ekey: this.ekey,
        selcons: this.selcons
      });
      this.show = false;
      this.selcons = "";
      this.ekey = "";
      //只有第一个改变才会改变渲染
      if (index == "0") {
        switch (data) {
          case "业主":
            data = "yz";
            break;
          case "租客":
            data = "zk";
            break;
          case "家属":
            data = "js";
            break;
        }
        this.$store.dispatch("myhouse/add_houserender", data);
      }
    },
    //获取选中内容
    selcon(event, index) {
      this.selcons = event.target.innerHTML;
    },
    submit() {

      let value = this.$store.state.myhouse.addhouse_value;
      console.log(value[0],value[1],value[2],value)
      
    if(value[0] != undefined && value[0] != ''&& value[1] != undefined && value[1] != ''&& value[2] != undefined && value[2] != ''){
       this.subshow = true;
      let timer =  setTimeout(async() => {
        await this.$store.dispatch('myhouse/add_submit');
       this.$refs.content.innerHTML = "提交成功！";
        
      let intime = setTimeout(() => {
        this.subshow = false;    
          this.$router.replace({path:'/Myhouse' });
          clearTimeout(intime);
        }, 1500);
      clearTimeout(timer);
      }, 1500);
    this.$refs.content.innerHTML = '提交中...';
    }
    else{
     
      this.$refs.content.innerHTML = "必选项不能为空";
      this.subshow = true;
      let errotime = setTimeout(()=>{
        this.subshow = false;
        this.$refs.content.innerHTML = "提交中...";
        clearTimeout(errotime)
      },1500)
    }       
    }
  },
  computed: {
    types() {
      return this.$store.state.myhouse.addhouse;
    },
    types_detail() {
      return this.$store.state.myhouse.addhouse_value;
    },
    details() {
      return this.$store.state.myhouse.details;
    }
  },
  mounted() {
    this.$store.dispatch('myhouse/init_addhouse');
    this.$store.dispatch("myhouse/add_houserender", 'js');
  },
};
</script>
<style scoped>
.addhouse {
  background: #f2f2f2;
  height: 100%;
}
ul {
  list-style: none;
  background: #f2f2f2;
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

ul li div {
  display: inline-block;
  height: 0.8rem;
  line-height: 0.8rem;
  background: white;
}
ul div {
  background: #f2f2f2;
  text-align: left;
  padding: 0.2rem;
}
ul div img {
  display: inline-block;
  height: 1rem;
  width: 1rem;
  border: 0.04rem dashed #bcbcbc;
  background: white;
}
ul .pic span {
  margin-right: 0.2rem;
  width: 1rem;
  display: inline-block;
}
.addhouse button {
  display: inline-block;
  width: 90%;
  height: 1rem;
  border-radius: 0.2rem;
  background: #e4e4e4;
  outline: none;
  border: none;
  margin: 0.4rem 0;
}

.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
}
.wrap {
  width: 100%;
  height: 4rem;
  background: white;
  position: fixed;
  bottom: 0;
  z-index: 4;
  border-radius: 0.1rem 0.1rem 0 0;
}
.wrap p {
  position: absolute;
  right: 0.4rem;
  top: 0.4rem;
  margin: 0;
}
.wrap .selection::-webkit-scrollbar {
  display: none;
}
.wrap .selection {
  background: white;
  height: 1.5rem;
  margin: 0.2rem;
  margin-top: 1rem;
  text-align: center;
  overflow: auto;
  font-size: 0.3rem;
  margin-top: 1.5rem;
}
.content{
  margin: 0.1rem 0;
}
.fontcolor {
  background: #f2f2f2;
}
/* 提交显示框 */
.subremind {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 3;
  top: 0;
  margin: 0;
  padding: 0;
}
.subremind div {
  height: 1rem;
  width: 2rem;
  border-radius: 0.1rem;
  background: white;
  margin: auto;
  text-align: center;
  line-height: 1rem;
  position: absolute;
  top: calc(50% - 0.5rem);
  left: calc(50% - 1rem);
}

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>