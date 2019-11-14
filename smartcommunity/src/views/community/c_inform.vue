<template>
  <div id="c_msg">
    <van-sticky>
    <div class="title">
      <strong>通知公告</strong>
      <span class="iconfont icon-houtui" @click="back"></span>
    </div>
    </van-sticky>
    <ul class="myMsg">
      <li>
        <strong>物业费上调</strong>
        <p>广大业主朋友，大家好！光源小区自2016年交付使用以来，一直由国家一级管理资质的伯恩（福建）物业管理公司打理各项业务</p>
        <span>
          <i class="iconfont icon-shijian"></i>2019/06/18 13:00
          <button>阅读全文</button>
        </span>
      </li>
      <li>
        <strong>物业费上调</strong>
        <p>广大业主朋友，大家好！光源小区自2016年交付使用以来，一直由国家一级管理资质的伯恩（福建）物业管理公司打理各项业务</p>
        <span>
          <i class="iconfont icon-shijian"></i>2019/06/18 13:00
          <button>阅读全文</button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      history.back(-1);
    }
  }
};
</script>
<style scoped>
#c_msg {
  background: #f8f8f8;
  width: 7.5rem;
  height: 100%;
}
.title {
  width: 7.1rem;
  padding: 0 0.2rem;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: center;
  background: #fff;
  font-size: 0.4rem;
  position: relative;
    border-bottom: 1px solid #eee;
}
.title span {
  position: absolute;
  top: 0;
  left: 0.2rem;
  font-size: 0.4rem;
}
.myMsg {
  width: 7.1rem;
  padding: 0.2rem;
  background: #f8f8f8;
}
.myMsg li {
  width: 7.1rem;
  padding: 0.2rem 0;
  text-align: left;
  background: #fff;
  margin-top: 0.2rem;
}
.myMsg :first-child {
  margin-top: 0;
}
.myMsg li strong {
  font-size: 0.3rem;
  margin-left: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.myMsg li p {
  margin: 0.2rem 0;
  padding: 0 0.2rem;
  border-bottom: 1px solid #eee;
  font-size: 0.24rem;
  line-height: 0.4rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.myMsg li span {
  display: block;
  padding: 0.1rem 0.2rem;
  font-size: 0.2rem;
  position: relative;
}
.myMsg li span i {
  font-size: 0.2rem;
}
.myMsg li span button {
  height: 0.4rem;
  position: absolute;
  top: 0.1rem;
  right: 0.2rem;
  font-size: 0.2rem;
  border: none;
  outline: none;
  background: #fff;
  font-weight: bold;
  color: #4bbcdc;
}
</style>