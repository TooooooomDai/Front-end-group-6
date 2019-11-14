<template>
  <div id="wrap">

    <div id="content">
      <div>
        <i>*</i>
        <p>
          证件照片
          <span class="iconfont icon-shenfenzhengzhengmian pic"></span>
        </p>
      </div>
      <div class="you">
        <span class="iconfont icon-shenfenzhengfanmian pic"></span>
      </div>
      <div>
        <i>*</i>
        <p>
          采集照片
          <strong>
            <span class="iconfont icon-camera-s caiji"></span>
          </strong>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rstepone"
};
</script>
<style scoped>

.iconfont,
em {
  font-size: 20px;
  font-weight: bolder;
  font-style: normal;
}

.pic {
  font-size: 3rem;
  color: #999;
}
.caiji{
    font-size: 1.5rem;
    color: white;
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
  height: 3rem;
  display: flex;
  align-items: center;
}
#content i {
  width: 0.2rem;
  font-style: normal;
  font-size: 20px;
  color: red;
}
#content .you {
  padding-left: 1.85rem;
}
strong{
    margin-top: 0.5rem;
    width: 3rem;
    height: 2rem;
    font-weight: 100;
    background: #999;
}
#content p {
  box-sizing: border-box;
  width: 6.5rem;
  height: 0.9rem;
  font-size: 16px;
  padding-left: 0.1rem;
  padding-right: 0.9rem;
  display: flex;
  color: #999;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
</style>