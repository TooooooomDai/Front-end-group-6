<template>
  <div class="edithouse">
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
      <button class="delete" v-if="this.$route.query.state == 'tg'" @click="deleted">删除</button>
      <div class="subremind" v-show="subshow">
        <div ref="content">提交中...</div>
      </div>
    </ul>

    <!--遮罩层-->
    <div class="mask" v-show="show" @touchmove="move($event)" @click="cancel($event)">
      <div class="wrap">
        <p @click="edit_selected()">确定</p>
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
      lasttop: 0,
      selcons: "",
      ekey: "",
      limit:0,
      subshow: false
    };
  },
  methods: {
    selectContent(index) {
      if (index < this.limit) {
        return;
      }
      this.show = true;
      this.ekey = index;
    },
    move(event) {
      if (event.target.className !== "content") {
        event.preventDefault();
      }
    },
    cancel(event) {
      if (event.target.className == "mask") {
        this.show = false;
      }
    },
    edit_selected() {
      this.$store.dispatch("myhouse/edit_selected", {
        ekey: this.ekey,
        selcons: this.selcons
      });
      this.show = false;
      this.selcons = "";
      this.ekey = "";
    },
    selcon(event) {
      console.log(event.target.innerHTML);
      this.selcons = event.target.innerHTML;
    },
    submit() {
      this.subshow = true;
      let timer = setTimeout(async () => {
        await this.$store.dispatch('myhouse/edit_submit');
        this.$refs.content.innerHTML = "提交成功！";
        console.log(1);
       
        let intime = setTimeout(() => {
          this.subshow = false;
          console.log(2);
          
          this.$router.replace({ path: "/Myhouse"});
          clearTimeout(intime);
        }, 1500);

       clearTimeout(timer); 
      }, 2000);
      this.$refs.content.innerHTML = "提交中..."; 
      
    },
    deleted(){
      this.$store.dispatch('deleted',{name:111})
    }
  },
  computed: {
    types() {
      return this.$store.state.myhouse.edithouse;
    },
    types_detail() {
      return this.$store.state.myhouse.edithouse_value;
    },
    details() {
      return this.$store.state.myhouse.details;
    }
  },
  mounted() {
    console.log(this.$route.query)

    this.$store.dispatch("myhouse/edit_houserender", {type:this.$route.query});
    if(this.$route.query.state == 'wtg'){
      this.limit = 4;
    }else if(this.$route.query.state == 'tg'){
      this.limit = 3;
    }
  }
};
</script>

<style scoped>
.edithouse {
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
/* 户型图 */
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

ul li div {
  display: inline-block;
  height: 0.8rem;
  line-height: 0.8rem;
  background: white;
}
.edithouse button {
  display: inline-block;
  width: 90%;
  height: 1rem;
  border-radius: 0.2rem;
  background: #e4e4e4;
  outline: none;
  border: none;
  margin: 0.4rem 0;
}
/* 遮罩层 */
.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
}
/* 选择框 */
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
  height: 2.5rem;
  margin: 0.2rem;
  margin-top: 1rem;
  text-align: center;
  overflow: auto;
  font-size: 0.3rem;
  padding: 0.2rem 0;
}
.content{
  margin: 0.1rem 0 ;
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
.fontcolor {
  background: #f2f2f2;
}
.delete{
  margin-top:0!important; 
}

</style>