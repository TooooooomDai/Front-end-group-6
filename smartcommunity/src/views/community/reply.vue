<template>
    <div style="background:#f8f8f8 ;width:100%;height:100%">
         <div class="reply-top">
             <router-link to="/myrecord">
<div class="replytopleft"><span class="iconfont icon-houtui"></span></div>
             </router-link>
            
            <div class="replytopmid">{{showtitle}}</div>
        </div>
        <div class="replycontent">
            <ul>
                <li>
                    <div class="replytitle">
                        <span>
                            {{sendrecord.comDesc}}

                        </span>
                    </div>
                    <div class="replypic">
                        <div><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt=""> 1</div>
                        <div><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt=""> 2</div>
                        <div><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt=""> 3</div>
                    </div>
                    <div class="replyinform">
                        <div>
                            {{sendrecord.comType}}
                            </div>
                        <div class="ptime">
                            {{sendrecord.comTime}}
                            </div>
                    </div>
                    <div class="replypeople">
                        <div>相关人员</div>
                        <div class="pname">
                            {{sendrecord.pName}}
                            </div>
                    </div>
                </li>
            </ul>
        </div>

        <div v-if="showcontent" class="adminreply">
            <div class="textreply">回复:{{sendrecord.reportDesc}}</div>
        </div>
    <!-- {{sendrecord}} -->

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            showcontent:false,
            showtitle:'未回复',
            comId:'',
            datalist:''
        }
    },
    computed: {
        sendrecord(){
            // console.log(this.$store.state.detailrecord[0])
            if(this.$store.state.detailrecord[0].reportStatus=='已回复'){
                this.showcontent=true
                this.showtitle='已回复'
                //this.$refs.replyinform.value=this.$store.state.record.replycontent
            }
            return this.$store.state.detailrecord[0]
        }
    },
    mounted() {
       
    },
}
</script>
<style scoped>
    
    .reply-top{
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    background: white;
    position: relative;
    }
    .replytopleft{
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.20rem;
    font-size: 14px;
    position: absolute;
    left: 0px;
    }

    .replytopmid{
        display: flex;
        font-size: 18px;
        align-items:center;
        font-weight: 600;
    }


    .replycontent ul li{
        background: white;
        width:100%;
        /* height: 3rem; */
        margin-top:0.2rem;
    }

    .replytitle{
        display: flex;
        margin-top: 0.2rem;
        margin-left: 0.7rem;
        font-size: 14px;
        position: relative;
        /* justify-content:space-around; */
    }
    .qianjin{
        position: absolute;
        right: 0.2rem;
    }
    .replypic{
        display: flex;

    }
    .replypic div{
        width: 1rem;
        height: 1rem;
        margin-left: 0.7rem;
        margin-top: 0.2rem;
        /* border: 1px solid red; */
    }
    .replypic img{
        width: 1rem;
        height: 1rem;
    }
    .replyinform{
        display: flex;

    }
    .replyinform div{
        margin-left: 0.7rem;
        font-size: 14px;
        margin-top: 0.2rem;
    }
    .replypeople{
        display: flex;
        position: relative;
    }
    .replypeople div{
        margin-left: 0.7rem;
        font-size: 14px;
        margin-top: 0.2rem;
    }
    .ptime{
        position: absolute;
        right: 0.7rem;
    }
    .pname{
        position: absolute;
        right: 0.7rem;
    }


    .adminreply{
        width: 6rem;
        background: lightgray;
        height:3rem ;
        margin-left: 0.7rem;
        margin-top: 0.3rem;
    }
    .textreply{
        width: 5.3rem;
        height:2.7rem ;
        background: lightgray;
        margin-left: 0.3rem;
        margin-top: 0.2rem;
        text-align: left;
        font-size: 16px;
    }

</style>