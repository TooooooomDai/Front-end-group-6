<template>
    <div style="background:#f8f8f8 ;width:100%;height:100%">
        <div class="pass-top">
            <router-link to="/visitorder">
<div class="passtopleft"><span class="iconfont icon-houtui"></span></div>
            </router-link>
            
            <div class="passtopmid">访客通行证</div>
            <div class="passtopright">分享</div>
        </div>
        <div class="detail">
            <span class="detailname">尊敬的{{name}}</span>
            <img src="../../../public/img/code.png" alt="" style="width:4.5rem;height:4.5rem;">
            
                <div>进出时请出示此证</div>
                <div >预约时间:<span>{{appoint}}</span></div> 
                <div>通行证在预约时间内有效</div>
            
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:'',
            appoint:''
        }
    },
    mounted() {
        this.name= localStorage.getItem("name");
        this.appoint= localStorage.getItem("appoint");
    },
    // 发ajax获取数据  
    computed: {
        // getpass(){
        //     console.log(this.$store.state.pass)
        //     return this.$store.state.pass
        // }
    },
}
</script>
<style scoped>
    .pass-top{
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    background: white;
    position: relative;
    }
    .passtopleft{
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.20rem;
    font-size: 14px;
    position: absolute;
    left: 0px;
    }
    .passtopmid{
        font-weight: 600;
        display: flex;
        font-size: 18px;
        align-items:center;
    }
    .passtopright{
        display: flex;
        font-size: 14px;
        /* align-items: center; */
        line-height: 1rem;
        position: absolute;
        right: 0.2rem;
        color: #4bbcdc;
        font-weight:600
    }


    .detail{
        display: flex;
        flex-direction: column;
        align-items:flex-start;
    }
    .detail .detailname{
        margin-top: 0.5rem;
        margin-left: 0.7rem;
        font-size: 18px;
    }
    .detail img{
        margin-top: 0.3rem;
        margin-left: 0.7rem;
    }

    .detail div{
        margin-top: 0.3rem;
        margin-left: 0.7rem;
        font-size: 16px;
    }
</style>