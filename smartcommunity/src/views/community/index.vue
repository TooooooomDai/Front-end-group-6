<template>
  <div id="homepage">
    <TabBar></TabBar>
    <van-sticky>
    <div id="title">
      <div class="position">
        <strong>
          <span class="iconfont icon-location"></span>
          <span>湘云雅苑</span>
        </strong>
      </div>
      <div class="msg">
        <router-link to="/c_msg">
          <span class="iconfont icon-xiaoxi"></span>
        </router-link>
      </div>
    </div>
    </van-sticky>
    <div id="banner">
      <img
        src="http://yun.qfangimg.com/group1/800x600/M00/F8/CD/wagAK1XBzTuAHD7oAAFDkymb8gE629.jpg"
        alt
      />
    </div>
    <div id="selectTab">
      <router-link to="/c_baoxiu">
        <strong class="iconfont icon-leijianzhuxiulix"></strong>
        <span>报事报修</span>
      </router-link>
      <router-link to="/visitorder">
        <strong class="iconfont icon-fangke"></strong>
        <span>访客预约</span>
      </router-link>
      <router-link to="/c_jiaofei">
        <strong class="iconfont icon-shenghuojiaofei"></strong>
        <span>生活缴费</span>
      </router-link>
      <router-link to="/onlineclick">
        <strong class="iconfont icon-huabanfuben"></strong>
        <span>在线敲门</span>
      </router-link>
      <router-link to="/monitor">
        <strong class="iconfont icon-jiankong"></strong>
        <span>电子监控</span>
      </router-link>
      <router-link to="/community">
        <strong class="iconfont icon-yijianhujiao"></strong>
        <span>呼叫物业</span>
      </router-link>
      <router-link to="/complaint">
        <strong class="iconfont icon-tousujianyi"></strong>
        <span>投诉建议</span>
      </router-link>
      <a href="javascript:;"></a>
    </div>
    <router-link to="/c_inform" class="inform">
      <div class="infoTitle">
        <strong>通知</strong>
        <span>公告</span>
      </div>
      <div class="infoContent">
        <p class="infoContent_t">物业费上调</p>
        <p class="infoContent_c">自8月1日起物业费上调到2.5元，请给我相互转告</p>
      </div>
      <div class="infoMore">
        <span class="iconfont icon-jiantou_you"></span>
      </div>
    </router-link>
    <div id="vote">
      <div class="vote-title">投票选举</div>
      <ul>
        <li>
          <router-link to="/community">
            <img
              src="http://img.mp.itc.cn/upload/20160915/8c5dd22ea21948e7b6af97c4de2273e4_th.png"
              alt
            />
            <div class="vote-c">
              <div class="vote-d">
                <p style="font-weight:bold;font-size:0.4rem">8</p>
                <p>12月</p>
              </div>
              <div class="vote-info">
                <strong>#选举#</strong>
                <br />
                <span>小区水电公司选举</span>
                <br />
                <span class="iconfont icon-shijian"></span>
                <span>6月8日至6月15日</span>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/community">
            <img
              src="http://img.mp.itc.cn/upload/20160915/8c5dd22ea21948e7b6af97c4de2273e4_th.png"
              alt
            />
            <div class="vote-c">
              <div class="vote-d">
                <p style="font-weight:bold;font-size:0.4rem">8</p>
                <p>12月</p>
              </div>
              <div class="vote-info">
                <strong>#选举#</strong>
                <br />
                <span>小区水电公司选举</span>
                <br />
                <span class="iconfont icon-shijian"></span>
                <span>6月8日至6月15日</span>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/community">
            <img
              src="http://img.mp.itc.cn/upload/20160915/8c5dd22ea21948e7b6af97c4de2273e4_th.png"
              alt
            />
            <div class="vote-c">
              <div class="vote-d">
                <p style="font-weight:bold;font-size:0.4rem">8</p>
                <p>12月</p>
              </div>
              <div class="vote-info">
                <strong>#选举#</strong>
                <br />
                <span>小区水电公司选举</span>
                <br />
                <span class="iconfont icon-shijian"></span>
                <span>6月8日至6月15日</span>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/community">
            <img
              src="http://img.mp.itc.cn/upload/20160915/8c5dd22ea21948e7b6af97c4de2273e4_th.png"
              alt
            />
            <div class="vote-c">
              <div class="vote-d">
                <p style="font-weight:bold;font-size:0.4rem">8</p>
                <p>12月</p>
              </div>
              <div class="vote-info">
                <strong>#选举#</strong>
                <br />
                <span>小区水电公司选举</span>
                <br />
                <span class="iconfont icon-shijian"></span>
                <span>6月8日至6月15日</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import TabBar from "../../components/dyc/TabBar";
export default {
    components: {
    TabBar,
  }
};
</script>
<style scoped>
#homepage {
  background: #f8f8f8;
}
#homepage a {
  text-decoration: none;
  color: #000;
}
#title {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.position {
  height: 100%;
  padding: 0 0.2rem;
  text-align: left;
}
.position strong {
  font-size: 0.3rem;
  height: 1rem;
  line-height: 1rem;
}
.msg {
  padding: 0 0.2rem;
  text-align: right;
}
.msg span {
  font-size: 0.3rem;
  height: 1rem;
  line-height: 1rem;
}
#banner {
  width: 100%;
  height: 3.5rem;
  background: #fff;
}
#banner img {
  display: block;
  width: 100%;
  height: 3.5rem;
}
#selectTab {
  height: 4rem;
  width: 7.1rem;
  padding: 0.4rem 0.2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #fff;
}
#selectTab a {
  height: 2rem;
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
#selectTab a strong {
  display: block;
  font-size: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #42b983;
  text-align: center;
  line-height: 1.5rem;
  color: #fff;
}
#selectTab a:nth-child(2) strong {
  font-size: 0.5rem;
  background: #f08863;
}
#selectTab a:nth-child(3) strong {
  background: #8383e7;
}
#selectTab a:nth-child(4) strong {
  background: #fd6365;
}
#selectTab a:nth-child(5) strong {
  background: #73aafa;
}
#selectTab a:nth-child(6) strong {
  background: #4bbcdc;
}
#selectTab a:nth-child(7) strong {
  font-size: 0.6rem;
  background: #6bd983;
}
#selectTab a span {
  height: 0.5rem;
  line-height: 0.5rem;
  color: #000;
  font-size: 0.24rem;
}
.inform {
  border-top: 1px solid #ccc;
  width: 7.1rem;
  height: 1.4rem;
  padding: 0.2rem 0.2rem;
  display: flex;
  justify-content: space-between;
  background: #fff;
}
.inform .infoTitle {
  width: 1.5rem;
  border-right: 1px solid #ccc;
  height: 100%;
}
.inform .infoTitle strong {
  display: block;
  height: 0.4rem;
  margin-top: 0.2rem;
  font-size: 0.4rem;
  color: #000;
}
.inform .infoTitle span {
  display: block;
  height: 0.4rem;
  width: 0.8rem;
  background: #23bacf;
  margin-top: 0.15rem;
  margin-left: 0.35rem;
  font-size: 0.3rem;
  border-radius: 0.1rem;
  color: #fff;
}
.inform .infoContent {
  width: 4.2rem;
  height: 100%;
}
.inform .infoContent .infoContent_t {
  font-weight: bold;
  font-size: 0.3rem;
  color: #000;
  text-align: left;
  margin: 0;
  margin-top: 0.2rem;
}
.inform .infoContent .infoContent_c {
  color: #999999;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-top: 0.2rem;
  font-size: 0.2rem;
}
.inform .infoMore {
  width: 1rem;
  height: 100%;
  font-size: 0.4rem;
  color: #000;
  line-height: 1.3rem;
}
#vote {
  margin-top: 0.2rem;
  background: #fff;
}
.vote-title {
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  font-weight: bold;
  font-size: 0.35rem;
}
#vote ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
#vote ul li {
  margin-top: 0.2rem;
  border-radius: 0.2rem;
  width: 3.5rem;
  height: 3.5rem;
  list-style: none;
  box-shadow: 0.5px 0.5px 0.5px 2px #ccc;
  overflow: hidden;
}
#vote ul li a img {
  width: 3.5rem;
  height: 2rem;
}
#vote ul li a .vote-c {
  width: 3.5rem;
  height: 1.5rem;
}
#vote ul li a .vote-c .vote-d {
  margin-top: 0.1rem;
  width: 25%;
  height: 1.3rem;
  border-right: 1px solid #eee;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#vote ul li a .vote-c .vote-d p {
  margin: 0;
  color: #000;
  font-size: 0.3rem;
}
#vote ul li a .vote-c .vote-info {
  width: 68%;
  padding: 0.1rem 0.1rem;
  height: 1.3rem;
  float: left;
  text-align: left;
  color: #000;
}
#vote ul li a .vote-c .vote-info strong {
  font-size: 0.4rem;
}
#vote ul li a .vote-c .vote-info span {
  font-size: 0.2rem;
  color: #666;
}
</style>