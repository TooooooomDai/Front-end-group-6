<template>
     <div style="background:#f8f8f8 ;width:100%;height:100%">
        <div class="online-top">
            <router-link to="/onlineclick">
                <div class="onlinetopleft"><span class="iconfont icon-houtui"></span></div>
            </router-link>
            <div class="onlinetopmid">选择房屋</div>
        </div>
        <div class="online-choose"><span class="choose">光源公寓1栋1单元</span></div>
        <div class="online-content">
            <ul>
                <li :key="home.id" v-for="home of homelist"><span>{{home.name}}</span> <span class="iconfont icon-youjian youjian"></span></li>
                <!-- <li><span>光源公寓1栋2单元0102</span> <span class="iconfont icon-youjian youjian"></span></li>
                <li><span>光源公寓1栋1单元0103</span> <span class="iconfont icon-youjian youjian"></span></li>
                <li><span>光源公寓1栋2单元0104</span> <span class="iconfont icon-youjian youjian"></span></li> -->
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            homelist:[]
        }
    },
    mounted() {
        // 通过这两歌可以进行ajax发送数据后端判断，然后返回数据
        console.log(this.$route.params.id)
        console.log(this.$route.query)
        
        this.homelist=[
            {name:'光源公寓1栋1单元0101',id:'101'},
            {name:'光源公寓1栋1单元0102',id:'102'},
            {name:'光源公寓1栋1单元0201',id:'201'},
            {name:'光源公寓1栋1单元0202',id:'202'},
            {name:'光源公寓1栋1单元0301',id:'301'},
            {name:'光源公寓1栋1单元0302',id:'302'},
        ]
    },
}
</script>
<style scoped>
     .online-top{
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    background: white;
    position: relative;
    }
    .onlinetopleft{
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.20rem;
    font-size: 14px;
    position: absolute;
    left: 0px;
    }
    .onlinetopmid{
        display: flex;
        font-size: 18px;
        align-items:center;
        font-weight: 600
    }


    .online-choose{
        margin-top: 0.2rem;
        display: flex;
        width: 100%;
        align-items: center;
        height: 1rem;
        background: white;
        font-size: 16px;
    }
    .online-choose .choose{
        margin-left: 0.20rem;
    }


    .online-content{
        display: flex;
        width: 100%;
        /* background: white; */
        height: 0.7rem;
        line-height: 0.7rem;
        /* border: 1px solid gray; */
    }
    .online-content li{
        background: white;
        width: 7.5rem;
        text-align: left;
        border-bottom: 1px solid gray;
        position: relative;
    }
    .online-content li span{
        margin-left: 0.20rem;
        font-size: 14px;
    }
    .online-content li .youjian{
        /* text-align: right; */
        /* align-items: center; */
        position: absolute;
        top: 0.05rem;
        right: 0.2rem;
        color: blue;
        font-size: 24px;
    }
</style>