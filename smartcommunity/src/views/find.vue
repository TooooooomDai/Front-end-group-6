<template>
  <!-- 发现页面 -->
  <div class="find">
    <div class="head">
      <span @click="prev"><img src="../assets/jiantou.jpg" alt /></span>
    <h2>发现</h2>
    </div>
    <p style="padding-right:6rem;line-height:0.5rem;">生活服务</p>
    <hr />
    <ul>
      <!-- <li @click="change(1)">
        <img src="../assets/timg.jpg" alt="家政服务" />
        <p>家政服务</p>
      </li>
      <li @click="change(2)">
        <img src="../assets/meirong.jpg" alt="美容美发" />
        <p>美容美发</p>
      </li>
      <li @click="change">
        <img src="../assets/caichang.jpg" alt="网上菜场" />
        <p>网上菜场</p>
      </li>
      <li>
        <img src="../assets/baihuo.jpg" alt="日用百货" />
        <p>日用百货</p>
      </li>
      <li>
        <img src="../assets/meihsi.jpg" alt="餐饮美食" />
        <p>餐饮美食</p>
      </li>
      <li>
        <img src="../assets/yule.jpg" alt="休闲娱乐" />
        <p>休闲娱乐</p>
      </li>-->
      <!-- 遍历发现页面六张图片 -->
      <li v-for="value of imgList" @click="change(value.id)">
        <img :src="value.src" alt="value.alt" />
          <p >{{value.alt}}</p>
      </li>
      <li></li>
      <li></li>
    </ul>
<TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '../components/dyc/TabBar'
document.documentElement.style.fontSize = document.body.clientWidth * 50 / 375 + 'px'
export default {
  name: "findkeping",
  data() {  //数据
    return {
      imgList: [
        { id: "img1", src: "./timg.jpg",alt:"家政服务" },
        { id: "img2", src: "./meirong.jpg",alt:"美容美发" },
        { id: "img3", src: "./caichang.jpg",alt:"网上菜场" },
        { id: "img4", src: "./baihuo.jpg",alt:"日用百货" },
        { id: "img5", src: "./meihsi.jpg",alt:"餐饮美食" },
        { id: "img6", src: "./yule.jpg",alt:"休闲娱乐" }
      ]
    };
  },
  components:{TabBar},

  methods: {  //方法
    change(value) {
      switch (value) {
        case "img1":
          this.$router.push({ path: "/housekeping" });
          break;
        case "img2":
          this.$router.push({ path: "/beauty" });
          break;
        case "img3":
          this.$router.push({ path: "/market" });
          break;
        case "img4":
          this.$router.push({ path: "/bazaar" });
          break;
          case "img5":
          this.$router.push({ path: "/cate" });
          break;
          case "img6":
          this.$router.push({ path: "/fallow" });
          break;
      }
    },
    

     prev () {
      this.$router.go(-1)
    },
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.find .head {
  display: flex;
  /* flex-direction: row; */
}
.head span img {
  width: 0.4rem;
  height: 0.4rem;
  padding-top: 0.4rem;
  display: inline-block;
}
.find {
  width: 100%;
}
.find p {
  text-align: center;
  
  height: 0.5rem;
  margin: 0.06rem 0;
  line-height: 0.5rem;
  font-size: 16px;
}
.find h2 {
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  height: 1rem;
  background-color: white;
  border-bottom: 0.2rem solid rgb(231, 231, 231);
  text-align: center;
  line-height: 1rem;
  padding-right: 2.2rem;
}
/* .find ul {
  display: flex;
  flex-direction: row;
} */
.find ul li {
  width: 1.6rem;
  height: 1.6rem;
  display: inline-block;
  padding: 0.2rem 0.1rem 0;
}
.find li img {
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.1rem;
}
</style>