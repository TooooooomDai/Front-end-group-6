
<template>
<!-- 选择楼栋 -->
    <div style="background:#f8f8f8 ;width:100%;height:100%">
        <div class="online-top">
            <router-link to="/community">
                <div class="onlinetopleft"><span class="iconfont icon-houtui"></span></div>
            </router-link>
            

            <div class="onlinetopmid">在线敲门</div>
        </div>
        <div class="online-choose"><span class="choose">选择楼栋</span></div>
        <div class="online-content">
            <ul>
                <!-- <router-link to="/choosehome" style="text-decoration:none;color:black"> -->
                    <li :key="house.id" v-for="house of houselist" @click="sendhouse(house)"><span>{{house.name}}</span> <span class="iconfont icon-qianjin qianjin"></span></li>
                <!-- </router-link> -->
                
                <!-- <li><span>光源公寓1栋2单元</span> <span class="iconfont icon-qianjin qianjin"></span></li> -->
            </ul>
        </div>




    </div>
</template>
<script>
export default {
    data() {
        return {
           houselist:[],
        }
    },
    mounted() {
        this.houselist=[
            {name:'光源公寓1栋1单元',id:'1'},
            {name:'光源公寓1栋2单元',id:'2'},
            {name:'光源公寓1栋3单元',id:'3'}
        ]
    },
    methods: {
        sendhouse(house){
            // console.log(1)
            console.log(house.id)
            this.$router.push({name:'choosehome', params:{id:house.id},query:{housename:house.name}})
            // this.$router.push({path:'choosehome',query:{housename:house.name}})
        }
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
        font-weight: 600;
    }


    .online-choose{
        display: flex;
        width: 100%;
        margin-top: 0.2rem;
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
        /* margin-top: 0.2rem; */
        background: white;
        /* border: 1px solid gray; */
    }
    .online-content li{
        height: 0.7rem;
        line-height: 0.7rem;
        width: 7.5rem;
        text-align: left;
        border-bottom: 1px solid #ccc;
        position: relative;
    }
    .online-content li span{
        margin-left: 0.20rem;
        font-size: 14px;
    }
    .online-content li .qianjin{
        /* text-align: right; */
        /* align-items: center; */
        position: absolute;
        top: 0.05rem;
        right: 0.2rem;
    }

</style>